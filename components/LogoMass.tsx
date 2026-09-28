"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type MutableRefObject,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { hubLogos, type HubLogo } from "@/lib/hub-projects";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const ALPHA_SIZE = 256;
const ALPHA_CUTOFF = 0.3;
const MAX_PUSH = 0.025;

type Pose = { x: number; y: number; scale: number; driftX: number; driftY: number };
type AlphaMap = { data: Uint8ClampedArray | null };

const restPose = (): Pose => ({ x: 0, y: 0, scale: 1, driftX: 0, driftY: 0 });

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function isNavigable(item: HubLogo) {
  return !item.centre && item.status === "live" && Boolean(item.href);
}

function hoverScale(item: HubLogo) {
  if (item.id === "ayvwrld") return 1.05;
  if (item.w < 12) return 1.45;
  return 1.2;
}

function logoSrc(file: string) {
  return `${basePath}/logos/${file}`;
}

function num(value: unknown, fallback: number) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function anchorProps(href: string) {
  return isExternal(href) ? { target: "_blank" as const, rel: "noopener noreferrer" } : {};
}

function pushFor(item: HubLogo, active: HubLogo | undefined, stageW: number, stageH: number) {
  if (!active || stageW <= 0) return { x: 0, y: 0, scale: 1 };
  if (item.id === active.id) return { x: 0, y: 0, scale: hoverScale(item) };
  const dx = ((item.x - active.x) / 100) * stageW;
  const dy = ((item.y - active.y) / 100) * stageH;
  const dist = Math.hypot(dx, dy) || 1;
  const falloff = Math.exp(-Math.max(0, dist / stageW - 0.04) / 0.12);
  const mag = stageW * MAX_PUSH * falloff;
  return { x: (dx / dist) * mag, y: (dy / dist) * mag, scale: 0.97 };
}

function labelStyle(item: HubLogo) {
  const reach = item.w * hoverScale(item) * 0.66;
  let above = item.y + reach > 88;
  if (item.y - reach < 8) above = false;
  const anchor = Math.min(96, Math.max(4, above ? item.y - reach : item.y + reach));
  const shift = item.x > 66 ? "-92%" : item.x < 28 ? "-8%" : "-50%";
  return {
    left: `${item.x}%`,
    top: `${anchor}%`,
    transform: `translate(${shift}, ${above ? "-100%" : "0%"})`,
  };
}

function openHref(href: string) {
  if (isExternal(href)) {
    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
    return;
  }
  window.location.assign(href);
}

function loadAlpha(src: string): Promise<AlphaMap> {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.crossOrigin = "anonymous";
    image.onload = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = ALPHA_SIZE;
        canvas.height = ALPHA_SIZE;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) {
          resolve({ data: null });
          return;
        }
        context.clearRect(0, 0, ALPHA_SIZE, ALPHA_SIZE);
        context.drawImage(image, 0, 0, ALPHA_SIZE, ALPHA_SIZE);
        resolve({ data: context.getImageData(0, 0, ALPHA_SIZE, ALPHA_SIZE).data });
      } catch {
        resolve({ data: null });
      }
    };
    image.onerror = () => resolve({ data: null });
    image.src = src;
  });
}

function hitTest(
  clientX: number,
  clientY: number,
  stage: HTMLDivElement | null,
  poses: Record<string, Pose>,
  alphas: Record<string, AlphaMap | undefined>,
  frontId: string | null,
) {
  if (!stage) return null;
  const rect = stage.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;
  const px = clientX - rect.left;
  const py = clientY - rect.top;
  const ranked = hubLogos
    .map((item, index) => ({ item, index, z: item.id === frontId ? 100 : item.z }))
    .sort((a, b) => b.z - a.z || b.index - a.index);

  for (const { item } of ranked) {
    const pose = poses[item.id] ?? restPose();
    const scale = pose.scale || 1;
    const cx = (item.x / 100) * rect.width + pose.x + pose.driftX;
    const cy = (item.y / 100) * rect.height + pose.y + pose.driftY;
    const size = (item.w / 100) * rect.width * scale;
    if (size <= 0) continue;
    const sx = px - cx;
    const sy = py - cy;
    const rad = (item.rot * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const lx = sx * cos + sy * sin;
    const ly = -sx * sin + sy * cos;
    const u = lx / size + 0.5;
    const v = ly / size + 0.5;
    const map = alphas[item.id];
    if (!map?.data) {
      if (u < 0 || u > 1 || v < 0 || v > 1) continue;
      const ox = (u - 0.5) * size;
      const oy = (v - 0.5) * size;
      if (ox * ox + oy * oy <= (size * size) / 4) return item;
      continue;
    }
    if (u < 0 || v < 0 || u > 1 || v > 1) continue;
    const x = Math.min(ALPHA_SIZE - 1, Math.max(0, Math.floor(u * ALPHA_SIZE)));
    const y = Math.min(ALPHA_SIZE - 1, Math.max(0, Math.floor(v * ALPHA_SIZE)));
    if (map.data[(y * ALPHA_SIZE + x) * 4 + 3] / 255 > ALPHA_CUTOFF) return item;
  }
  return null;
}

export function LogoMass() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const poses = useRef<Record<string, Pose>>({});
  const alphas = useRef<Record<string, AlphaMap | undefined>>({});
  const hoveredRef = useRef<string | null>(null);
  const pinnedRef = useRef<string | null>(null);
  const frontRef = useRef<string | null>(null);
  const reduceRef = useRef(false);
  const swallowClick = useRef(false);
  const clearTimer = useRef(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [focusedId, setFocusedId] = useState<string | null>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  const [driftOn, setDriftOn] = useState(false);
  const [debugSrc, setDebugSrc] = useState<string | null>(null);

  const activeId = hoveredId ?? focusedId ?? pinnedId;
  const active = hubLogos.find((item) => item.id === activeId);
  frontRef.current = activeId;
  reduceRef.current = reduce === true;
  const pointerItem = hubLogos.find((item) => item.id === hoveredId);

  useEffect(() => {
    setDriftOn(reduce === false);
  }, [reduce]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setBox({ w: stage.clientWidth, h: stage.clientHeight });
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    for (const item of hubLogos) {
      loadAlpha(logoSrc(item.file)).then((map) => {
        if (!cancelled) alphas.current[item.id] = map;
      });
    }
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("debug") !== "1") return;
    const src = `${basePath}/reference/ayvwrld-collection.png`;
    const image = new window.Image();
    image.onload = () => setDebugSrc(src);
    image.onerror = () => setDebugSrc(null);
    image.src = src;
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLElement>('[aria-controls="mobile-nav"]');
      if (menu?.getAttribute("aria-expanded") === "true") return;
      hoveredRef.current = null;
      pinnedRef.current = null;
      setHoveredId(null);
      setPinnedId(null);
      setFocusedId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => window.clearTimeout(clearTimer.current);
  }, []);

  const spring: Transition = reduce
    ? { duration: 0.12, ease: "easeOut" }
    : { type: "spring", stiffness: 140, damping: 16, mass: 1 };

  const pointAt = (id: string | null) => {
    window.clearTimeout(clearTimer.current);
    if (id) {
      if (hoveredRef.current !== id) {
        hoveredRef.current = id;
        frontRef.current = id;
        setHoveredId(id);
      }
      return;
    }
    clearTimer.current = window.setTimeout(() => {
      hoveredRef.current = null;
      setHoveredId(null);
    }, 110);
  };

  const pick = (clientX: number, clientY: number) =>
    hitTest(clientX, clientY, stageRef.current, poses.current, alphas.current, frontRef.current);

  const activate = (item: HubLogo | null, fromTouch: boolean) => {
    if (!item) {
      pinnedRef.current = null;
      setPinnedId(null);
      return;
    }
    if (fromTouch && pinnedRef.current !== item.id) {
      pinnedRef.current = item.id;
      setPinnedId(item.id);
      return;
    }
    if (item.centre) {
      window.scrollTo({ top: 0, behavior: reduceRef.current ? "auto" : "smooth" });
      pinnedRef.current = null;
      setPinnedId(null);
      return;
    }
    if (!isNavigable(item) || !item.href) return;
    openHref(item.href);
    pinnedRef.current = null;
    setPinnedId(null);
  };

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const target = event.target;
    if (target instanceof Element && target.closest("[data-logo-label]")) return;
    pointAt(pick(event.clientX, event.clientY)?.id ?? null);
  };

  const showOpen = Boolean(active && isNavigable(active) && (pinnedId === active.id || focusedId === active.id));

  return (
    <section
      aria-label="AYV WRLD"
      className="relative flex h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] pt-16 md:overflow-visible md:pt-[4.5rem]"
    >
      <div className="flex w-full justify-center overflow-hidden md:overflow-visible">
        <div
          ref={stageRef}
          className="relative aspect-[2/1] w-[170vw] shrink-0 touch-manipulation md:w-[min(100vw,164vh,calc((100svh-7.5rem)*2))]"
          style={{ cursor: pointerItem && isNavigable(pointerItem) ? "pointer" : "default" }}
          onPointerMove={onPointerMove}
          onPointerLeave={() => pointAt(null)}
          onPointerUp={(event) => {
            if (event.pointerType !== "touch") return;
            swallowClick.current = true;
            activate(pick(event.clientX, event.clientY), true);
          }}
          onClick={(event) => {
            if (swallowClick.current) {
              swallowClick.current = false;
              return;
            }
            const target = event.target;
            if (target instanceof Element && target.closest("a, button, [data-logo-label]")) return;
            activate(pick(event.clientX, event.clientY), false);
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.055) 0%, rgba(255,255,255,0) 68%)",
            }}
          />

          {hubLogos.map((item, index) => (
            <LogoNode
              key={item.id}
              item={item}
              index={index}
              push={pushFor(item, active, box.w, box.h)}
              hot={item.id === activeId}
              drift={driftOn}
              spring={spring}
              poses={poses}
              onFocus={setFocusedId}
            />
          ))}

          {active ? (
            <div
              data-logo-label={active.id}
              className="pointer-events-auto absolute z-50 w-max max-w-[11.5rem] rounded-xl border border-white/15 bg-white/10 px-3 py-2 shadow-[0_10px_28px_rgba(0,0,0,0.35)] backdrop-blur-md"
              style={labelStyle(active)}
              onPointerEnter={() => pointAt(active.id)}
              onPointerUp={(event) => event.stopPropagation()}
              onClick={(event) => event.stopPropagation()}
            >
              <p className="text-xs font-semibold leading-tight text-paper">{active.name}</p>
              <p className="mt-1 text-[11px] leading-snug text-paper/70">{active.description}</p>
              {active.status === "soon" ? (
                <p className="mt-1 text-[11px] font-medium text-paper/55">Coming soon</p>
              ) : null}
              {showOpen && active.href ? (
                <a
                  href={active.href}
                  {...anchorProps(active.href)}
                  className="mt-2 inline-flex h-7 items-center rounded-full bg-paper px-3 text-[11px] font-medium text-ink"
                >
                  Open
                </a>
              ) : null}
            </div>
          ) : null}

          {debugSrc ? (
            <Image
              src={debugSrc}
              alt=""
              fill
              unoptimized
              sizes="100vw"
              className="pointer-events-none z-[60] object-fill opacity-35"
            />
          ) : null}
        </div>
      </div>

      <p className="relative z-10 mt-3 px-6 text-center">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/80">
          AYV WRLD
        </span>
        {/* PLACEHOLDER: one line under the cluster. */}
        <span className="mt-1 block text-xs leading-snug text-paper/55">
          Products, tools, and a course under one name.
        </span>
      </p>
    </section>
  );
}

function LogoNode({
  item,
  index,
  push,
  hot,
  drift,
  spring,
  poses,
  onFocus,
}: {
  item: HubLogo;
  index: number;
  push: { x: number; y: number; scale: number };
  hot: boolean;
  drift: boolean;
  spring: Transition;
  poses: MutableRefObject<Record<string, Pose>>;
  onFocus: (id: string | null) => void;
}) {
  const ampX = 1.15 + (index % 3) * 0.3;
  const ampY = 1.05 + (index % 4) * 0.22;
  const sign = index % 2 === 0 ? 1 : -1;
  const patch = (partial: Partial<Pose>) => {
    poses.current[item.id] = { ...(poses.current[item.id] ?? restPose()), ...partial };
  };

  const controlClass =
    "pointer-events-none absolute inset-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paper";

  const focusProps = {
    className: controlClass,
    onFocus: () => onFocus(item.id),
    onBlur: () => onFocus(null),
  };

  return (
    <div
      className="pointer-events-none absolute aspect-square"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: `${item.w}%`,
        zIndex: hot ? 40 : item.z,
        transform: "translate(-50%, -50%)",
      }}
    >
      <motion.div
        className="pointer-events-none h-full w-full"
        initial={false}
        animate={
          drift
            ? { x: [0, ampX * sign, 0, -ampX * sign, 0], y: [0, -ampY * sign, 0, ampY * sign, 0] }
            : { x: 0, y: 0 }
        }
        transition={
          drift
            ? { duration: 8.4 + (index % 5) * 0.55, repeat: Infinity, ease: "easeInOut", delay: index * 0.37 }
            : { duration: 0 }
        }
        onUpdate={(latest) => patch({ driftX: num(latest.x, 0), driftY: num(latest.y, 0) })}
      >
        <motion.div
          className="pointer-events-none h-full w-full"
          initial={false}
          animate={{
            x: push.x,
            y: push.y,
            scale: push.scale,
            filter: hot
              ? "drop-shadow(0 0 14px rgba(255,255,255,0.5))"
              : "drop-shadow(0 0 0 rgba(255,255,255,0))",
          }}
          transition={spring}
          onUpdate={(latest) =>
            patch({ x: num(latest.x, 0), y: num(latest.y, 0), scale: num(latest.scale, 1) || 1 })
          }
        >
          <div className="pointer-events-none h-full w-full" style={{ transform: `rotate(${item.rot}deg)` }}>
            <Image
              src={logoSrc(item.file)}
              alt=""
              width={2000}
              height={2000}
              unoptimized
              priority={item.w > 18}
              draggable={false}
              sizes="(max-width: 768px) 50vw, 36vw"
              className="pointer-events-none h-full w-full select-none"
            />
          </div>
        </motion.div>
      </motion.div>

      {item.centre ? (
        <button
          type="button"
          aria-label="AYV WRLD"
          onClick={() => {
            const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
          }}
          {...focusProps}
        />
      ) : item.status === "soon" ? (
        <button
          type="button"
          aria-disabled="true"
          aria-label={`${item.name}, coming soon`}
          onClick={(event) => event.preventDefault()}
          {...focusProps}
        />
      ) : item.href ? (
        <a href={item.href} aria-label={item.name} {...anchorProps(item.href)} {...focusProps} />
      ) : (
        <button
          type="button"
          aria-label={item.name}
          onClick={(event) => event.preventDefault()}
          {...focusProps}
        />
      )}
    </div>
  );
}
