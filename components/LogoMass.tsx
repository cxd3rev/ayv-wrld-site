"use client";

import { motion, useReducedMotion, type Transition } from "framer-motion";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type FocusEvent,
  type MouseEvent,
  type MutableRefObject,
  type PointerEvent,
} from "react";
import { hubLogos, type HubLogo } from "@/lib/hub-projects";

/** Optional stack modules. Keep off until those marks should appear. */
const INCLUDE_MODULES = false;

/** Soft goo filter. Leave off; the cluster reads as separate liquid marks. */
const GOOEY = false;

const HOVER_SCALE = 1.36;
const NEIGHBOUR_SCALE = 0.96;
const MAX_PUSH = 5.2;

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

function anchorProps(href: string) {
  return isExternal(href)
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};
}

function pushFor(item: HubLogo, active: HubLogo | undefined, width: number) {
  if (!active) return { x: 0, y: 0, scale: 1 };
  if (item.id === active.id) return { x: 0, y: 0, scale: HOVER_SCALE };
  const dx = item.x - active.x;
  const dy = item.y - active.y;
  const dist = Math.hypot(dx, dy) || 1;
  const falloff = Math.exp(-dist / 26);
  const mag = ((MAX_PUSH * falloff) / 100) * width;
  return {
    x: (dx / dist) * mag,
    y: (dy / dist) * mag,
    scale: NEIGHBOUR_SCALE,
  };
}

export function LogoMass() {
  const reduce = useReducedMotion();
  const clusterRef = useRef<HTMLDivElement>(null);
  const touchTap = useRef(false);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);
  const [width, setWidth] = useState(0);

  const logos = hubLogos.filter((item) => INCLUDE_MODULES || !item.module);
  const activeId = hoveredId ?? pinnedId;
  const active = logos.find((item) => item.id === activeId);

  useEffect(() => {
    const el = clusterRef.current;
    if (!el) return;
    const measure = () => setWidth(el.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLElement>('[aria-controls="mobile-nav"]');
      if (menu?.getAttribute("aria-expanded") === "true") return;
      setPinnedId(null);
      setHoveredId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const clearPin = (target: EventTarget | null) => {
    if (!(target instanceof Element)) return;
    if (target.closest("[data-logo-group]")) return;
    const cluster = clusterRef.current;
    const focused = document.activeElement;
    if (focused instanceof HTMLElement && cluster?.contains(focused)) focused.blur();
    setPinnedId(null);
    setHoveredId(null);
  };

  const spring: Transition = reduce
    ? { duration: 0.12, ease: "easeOut" }
    : { type: "spring", stiffness: 150, damping: 16 };

  return (
    <section
      aria-label="AYV WRLD"
      className="relative h-[100svh] bg-[#0A0A0A]"
      onPointerDown={(event) => clearPin(event.target)}
    >
      {GOOEY ? (
        <svg className="pointer-events-none absolute h-0 w-0" aria-hidden>
          <filter id="logo-mass-goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </svg>
      ) : null}

      <div className="absolute inset-x-0 bottom-0 top-16 flex flex-col items-center justify-center px-4 md:top-[4.5rem]">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(68vw,34rem)] w-[min(68vw,34rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent_68%)]"
        />

        {/* PLACEHOLDER: edit the hero tagline. */}
        <p className="relative z-10 mb-3 text-center sm:mb-4">
          <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/80">
            AYV WRLD
          </span>
          <span className="mt-1 block text-xs leading-snug text-paper/55">
            Products, tools, and a course under one name.
          </span>
        </p>

        <div
          ref={clusterRef}
          className="relative z-10 aspect-square w-full max-w-[min(92vw,40rem)]"
          style={GOOEY ? { filter: "url(#logo-mass-goo)" } : undefined}
        >
          {logos.map((item, index) => (
            <LogoNode
              key={item.id}
              item={item}
              index={index}
              push={pushFor(item, active, width)}
              hot={item.id === activeId}
              pinned={item.id === pinnedId}
              reduce={reduce === true}
              drift={reduce === false}
              spring={spring}
              touchTap={touchTap}
              onHover={setHoveredId}
              onPin={setPinnedId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoNode({
  item,
  index,
  push,
  hot,
  pinned,
  reduce,
  drift,
  spring,
  touchTap,
  onHover,
  onPin,
}: {
  item: HubLogo;
  index: number;
  push: { x: number; y: number; scale: number };
  hot: boolean;
  pinned: boolean;
  reduce: boolean;
  drift: boolean;
  spring: Transition;
  touchTap: MutableRefObject<boolean>;
  onHover: (id: string | null) => void;
  onPin: (id: string | null) => void;
}) {
  const ampX = 1.5 + (index % 3) * 0.45;
  const ampY = 1.3 + (index % 4) * 0.35;
  const navigable = !item.centre && item.status === "live" && Boolean(item.href);
  const showOpen = pinned && navigable && Boolean(item.href);
  const labelAbove = item.y > 60;

  const follow = (event: MouseEvent<HTMLElement>) => {
    const fromTouch = touchTap.current && event.detail > 0;
    if (item.centre) {
      if (fromTouch && !pinned) {
        event.preventDefault();
        onPin(item.id);
        return;
      }
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      onPin(null);
      return;
    }
    if (!navigable) {
      event.preventDefault();
      if (fromTouch) onPin(item.id);
      return;
    }
    if (fromTouch && !pinned) {
      event.preventDefault();
      onPin(item.id);
    }
  };

  const controlClass =
    "pointer-events-auto absolute left-1/2 top-1/2 z-10 h-[43%] w-[43%] -translate-x-1/2 -translate-y-1/2 rounded-full border-0 bg-transparent p-0 touch-manipulation";

  const controlProps = {
    "data-logo-group": item.id,
    className: controlClass,
    "aria-label": item.name,
    onPointerDown: (event: PointerEvent<HTMLElement>) => {
      touchTap.current = event.pointerType === "touch";
      event.stopPropagation();
    },
    onPointerEnter: (event: PointerEvent<HTMLElement>) => {
      if (event.pointerType === "touch") return;
      onHover(item.id);
    },
    onPointerLeave: (event: PointerEvent<HTMLElement>) => {
      const next = event.relatedTarget;
      if (next instanceof Element && next.closest(`[data-logo-shell="${item.id}"]`)) return;
      onHover(null);
    },
    onFocus: (event: FocusEvent<HTMLElement>) => {
      const el = event.currentTarget;
      if (el.matches(":focus-visible") || touchTap.current) onPin(item.id);
    },
    onBlur: (event: FocusEvent<HTMLElement>) => {
      const next = event.relatedTarget;
      const shell = event.currentTarget.closest("[data-logo-shell]");
      if (shell && next instanceof Node && shell.contains(next)) return;
      onPin(null);
    },
    onClick: follow,
  };

  return (
    <div
      data-logo-shell={item.id}
      className="pointer-events-none absolute aspect-square -translate-x-1/2 -translate-y-1/2"
      style={{
        left: `${item.x}%`,
        top: `${item.y}%`,
        width: `${item.size}%`,
        zIndex: hot ? 40 : item.z,
      }}
    >
      <motion.div
        className="h-full w-full"
        initial={false}
        animate={{ x: push.x, y: push.y }}
        transition={spring}
      >
        <motion.div
          className="relative h-full w-full"
          initial={false}
          animate={{
            scale: push.scale,
            filter: hot
              ? "drop-shadow(0 0 12px rgba(255,255,255,0.42))"
              : "drop-shadow(0 0 0 rgba(255,255,255,0))",
          }}
          transition={spring}
        >
          <motion.div
            className="h-full w-full"
            animate={
              drift
                ? { x: [0, ampX, 0, -ampX, 0], y: [0, -ampY, 0, ampY, 0] }
                : { x: 0, y: 0 }
            }
            transition={
              drift
                ? {
                    duration: 9 + (index % 5) * 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.37,
                  }
                : { duration: reduce ? 0 : 0.2 }
            }
          >
            <div className="h-full w-full" style={{ transform: `rotate(${item.rotation}deg)` }}>
              <Image
                src={`${basePath}${item.logo}`}
                alt=""
                width={1120}
                height={1120}
                priority
                sizes="(max-width: 768px) 42vw, 280px"
                className="pointer-events-none h-full w-full select-none object-contain"
              />
            </div>
          </motion.div>

          {item.centre ? (
            <button type="button" {...controlProps} />
          ) : navigable && item.href ? (
            <a href={item.href} {...anchorProps(item.href)} {...controlProps} />
          ) : (
            <button type="button" aria-disabled="true" {...controlProps} />
          )}
        </motion.div>

        {hot ? (
          <div
            data-logo-group={item.id}
            className={`pointer-events-auto absolute z-20 w-max max-w-[12.5rem] rounded-xl border border-white/15 bg-[#0A0A0A]/75 px-3 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md ${
              labelAbove ? "bottom-[calc(118%+0.25rem)]" : "top-[calc(118%+0.25rem)]"
            } ${item.x > 64 ? "right-0" : item.x < 36 ? "left-0" : "left-1/2 -translate-x-1/2"}`}
            onPointerEnter={(event) => {
              if (event.pointerType !== "touch") onHover(item.id);
            }}
            onPointerLeave={(event) => {
              const next = event.relatedTarget;
              if (next instanceof Element && next.closest(`[data-logo-shell="${item.id}"]`)) return;
              onHover(null);
            }}
          >
            <p className="text-xs font-semibold leading-tight text-paper">{item.name}</p>
            <p className="mt-1 text-[11px] leading-snug text-paper/70">{item.description}</p>
            {item.status === "soon" ? (
              <p className="mt-1 text-[11px] font-medium text-paper/55">Coming soon</p>
            ) : null}
            {showOpen && item.href ? (
              <a
                href={item.href}
                {...anchorProps(item.href)}
                data-logo-group={item.id}
                className="mt-2 inline-flex h-7 items-center rounded-full bg-paper px-3 text-[11px] font-medium text-ink"
              >
                Open
              </a>
            ) : null}
          </div>
        ) : null}
      </motion.div>
    </div>
  );
}
