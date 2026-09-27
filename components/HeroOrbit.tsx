"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { SafeLink } from "@/components/SafeLink";
import { Texture } from "@/components/Texture";
import { orbitProjects, type OrbitProject } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const FLY_MS = 0.5;
const ACTIVE_SCALE = 1.16;

type StageSize = { width: number; height: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function orbitMetrics(width: number, height: number) {
  const minSide = Math.min(width, height);
  const satellite = Math.round(clamp(minSide * 0.132, 80, 108));
  const center = Math.round(satellite * 2.2);
  // Names sit just under each mark, so the ring stays clear of the center
  // and of the stage edge.
  const labelDrop = 22;
  const pad = 18 + labelDrop;
  const edgeLimit = minSide / 2 - satellite / 2 - pad;
  const gapFloor = center / 2 + satellite / 2 + labelDrop + 10;
  const generous = minSide * 0.34;
  const radius = Math.max(72, Math.min(edgeLimit, Math.max(generous, gapFloor)));
  return { satellite, center, radius };
}

function orbitOffset(index: number, count: number, radius: number) {
  const angle = -Math.PI / 2 + (index / count) * Math.PI * 2;
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

/**
 * While a project is open, pull the ring in so the rightmost mark stays
 * clear of the detail card and every satellite remains clickable.
 */
function clearedRadius(stageWidth: number, satellite: number, idleRadius: number) {
  const panelWidth = Math.min(352, stageWidth * 0.28);
  const panelLeft = stageWidth * 0.95 - panelWidth;
  const rightmost = Math.cos(-Math.PI / 2 + (1 / orbitProjects.length) * Math.PI * 2);
  const maxOffset = panelLeft - 20 - satellite / 2 - stageWidth / 2;
  if (rightmost <= 0.2) return idleRadius;
  return clamp(Math.min(idleRadius, maxOffset / rightmost), satellite * 1.25, idleRadius);
}

/** Left-third slot, measured from the stage center. Kept inside the stage. */
function activeOffset(stageWidth: number, satellite: number) {
  const half = (satellite * ACTIVE_SCALE) / 2;
  let x = -stageWidth / 3;
  const leftEdge = stageWidth / 2 + x - half;
  if (leftEdge < 24) x += 24 - leftEdge;
  return { x, y: 0 };
}

function moveTransition(instant: boolean) {
  return instant ? { duration: 0 } : { duration: FLY_MS, ease: EASE };
}

function useStageSize() {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<StageSize>({ width: 0, height: 0 });
  const [instant, setInstant] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const sizeRef = { width: 0, height: 0 };
    let frame = 0;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      if (
        Math.abs(sizeRef.width - rect.width) < 0.5 &&
        Math.abs(sizeRef.height - rect.height) < 0.5
      ) {
        return;
      }
      sizeRef.width = rect.width;
      sizeRef.height = rect.height;
      setInstant(true);
      setSize({ width: rect.width, height: rect.height });
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setInstant(false));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);

  return { ref, size, instant };
}

function ProjectMark({ project }: { project: OrbitProject }) {
  if (project.brand) {
    return (
      <Logo brand={project.brand} decorative priority className="h-full w-full" />
    );
  }

  return (
    <span className="flex h-full w-full items-center justify-center rounded-2xl border border-white/10 bg-card px-2 text-center font-display text-base font-semibold tracking-display text-paper">
      {project.wordmark}
    </span>
  );
}

function publicPath(path: string) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return `${basePath}${path}`;
}

/** Rounded phone bezel. Only rendered when a real screenshot exists. */
function DevicePreview({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mb-5 flex justify-center">
      <div className="w-[4.65rem] rounded-[1.15rem] border border-white/20 bg-[#121212] p-[5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_14px_28px_rgba(0,0,0,0.45)] lg:w-[6.15rem] lg:rounded-[1.45rem] lg:p-1.5">
        {/* next/image drops the GitHub Pages basePath when unoptimized. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={publicPath(src)}
          alt={alt}
          width={780}
          height={1688}
          draggable={false}
          className="aspect-[390/844] w-full rounded-[0.85rem] object-cover object-top lg:rounded-[1.05rem]"
        />
      </div>
    </div>
  );
}

function OrbitName({ name }: { name: string }) {
  return (
    <span className="absolute left-1/2 top-[calc(100%+6px)] -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold leading-none tracking-tight text-paper/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.95),0_6px_14px_rgba(0,0,0,0.8)]">
      {name}
    </span>
  );
}

function PanelBody({ project, titleId }: { project: OrbitProject; titleId: string }) {
  return (
    <>
      {project.preview ? (
        <DevicePreview src={project.preview.src} alt={project.preview.alt} />
      ) : (
        // PLACEHOLDER: no device frame until project.preview points at a real screenshot.
        <span aria-hidden className="mb-5 inline-block h-2 w-2 bg-navy" />
      )}
      <h2
        id={titleId}
        className="font-display text-3xl font-bold leading-[0.95] tracking-display sm:text-4xl"
      >
        {project.name}
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-paper/75 md:text-base">
        {project.description}
      </p>
      <div className="mt-7">
        {project.comingSoon || !project.href ? (
          <button
            type="button"
            disabled
            aria-disabled="true"
            className="inline-flex h-11 cursor-not-allowed items-center justify-center rounded-full border border-white/15 px-5 text-sm font-medium text-paper/40"
          >
            Coming soon
          </button>
        ) : (
          <SafeLink
            href={project.href}
            external={project.external}
            className="inline-flex h-11 items-center justify-center rounded-full bg-paper px-5 text-sm font-medium text-ink transition duration-300 hover:scale-[1.03]"
          >
            Read more
            {project.external ? (
              <span className="sr-only"> (opens in a new tab)</span>
            ) : null}
          </SafeLink>
        )}
      </div>
    </>
  );
}

const panelSurface =
  "rounded-2xl border border-white/10 bg-card/85 p-7 shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-md";

export function HeroOrbit() {
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [desktop, setDesktop] = useState<boolean | null>(null);
  const reduceMotion = useReducedMotion();
  const { ref, size, instant } = useStageSize();
  const active = orbitProjects.find((project) => project.id === activeProject) ?? null;
  const idle = reduceMotion === false && activeProject === null;
  const metrics = orbitMetrics(size.width, size.height);
  const radius = activeProject
    ? clearedRadius(size.width, metrics.satellite, metrics.radius)
    : metrics.radius;

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const apply = () => setDesktop(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (!activeProject) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      // The navbar already closes its mobile menu on Escape. Don't dismiss
      // the project in the same keypress while that menu is open.
      const menu = document.querySelector<HTMLElement>('[aria-controls="mobile-nav"]');
      if (menu?.getAttribute("aria-expanded") === "true") return;
      setActiveProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeProject]);

  const toggle = (id: string) => {
    setActiveProject((current) => (current === id ? null : id));
  };

  const clear = () => setActiveProject(null);

  return (
    <section aria-label="Studio projects" className="relative bg-ink">
      <Texture />

      <div
        className="relative z-10 hidden h-[100svh] overflow-hidden lg:block"
        aria-hidden={desktop === false}
      >
        <div
          ref={ref}
          className="absolute inset-x-0 bottom-0 top-[4.5rem]"
          onClick={clear}
        >
          {size.width > 0 ? (
            <div className="absolute inset-0">
              <svg
                aria-hidden
                className="pointer-events-none absolute inset-0 z-0 h-full w-full"
              >
                {orbitProjects.map((project, index) => {
                  const home = orbitOffset(index, orbitProjects.length, radius);
                  const atRest = project.id === activeProject ? activeOffset(size.width, metrics.satellite) : home;
                  return (
                    <motion.line
                      key={project.id}
                      x1={size.width / 2}
                      y1={size.height / 2}
                      initial={false}
                      animate={{
                        x2: size.width / 2 + atRest.x,
                        y2: size.height / 2 + atRest.y,
                        opacity: activeProject ? 0.05 : 0.13,
                      }}
                      transition={moveTransition(instant)}
                      stroke="#F5F5F5"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>

              <motion.button
                type="button"
                initial={false}
                animate={{
                  scale: activeProject ? 0.84 : 1,
                  opacity: activeProject ? 0.28 : 1,
                }}
                transition={moveTransition(instant)}
                onClick={(event) => {
                  event.stopPropagation();
                  clear();
                }}
                aria-label={activeProject ? "Show all projects" : "AYV WRLD"}
                className="group absolute left-1/2 top-1/2 z-[5] border-0 bg-transparent p-0"
                style={{
                  width: metrics.center,
                  height: metrics.center,
                  marginLeft: -metrics.center / 2,
                  marginTop: -metrics.center / 2,
                }}
              >
                <span className="logo-affordance block h-full w-full">
                  <Logo brand="ayvwrld" decorative priority className="h-full w-full" />
                </span>
              </motion.button>

              {orbitProjects.map((project, index) => {
                const home = orbitOffset(index, orbitProjects.length, radius);
                const isActive = project.id === activeProject;
                const spot = isActive
                  ? activeOffset(size.width, metrics.satellite)
                  : home;
                const dimmed = activeProject !== null && !isActive;
                return (
                  <motion.button
                    key={project.id}
                    type="button"
                    initial={false}
                    animate={{
                      x: spot.x,
                      y: spot.y,
                      scale: isActive ? ACTIVE_SCALE : 1,
                      opacity: dimmed ? 0.18 : 1,
                    }}
                    transition={moveTransition(instant)}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggle(project.id);
                    }}
                    aria-pressed={isActive}
                    className="group absolute left-1/2 top-1/2 z-10 overflow-visible border-0 bg-transparent p-0"
                    style={{
                      width: metrics.satellite,
                      height: metrics.satellite,
                      marginLeft: -metrics.satellite / 2,
                      marginTop: -metrics.satellite / 2,
                      zIndex: isActive ? 20 : 10,
                    }}
                  >
                    <motion.span
                      className="absolute inset-0"
                      animate={idle ? { y: [0, -7, 0] } : { y: 0 }}
                      transition={
                        idle
                          ? {
                              duration: 5.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.42,
                            }
                          : { duration: reduceMotion ? 0 : 0.28 }
                      }
                    >
                      <span className="logo-affordance block h-full w-full">
                        <ProjectMark project={project} />
                      </span>
                      <OrbitName name={project.name} />
                    </motion.span>
                  </motion.button>
                );
              })}

              <AnimatePresence>
                {active ? (
                  <motion.div
                    key="orbit-panel"
                    id="orbit-panel-desktop"
                    role="region"
                    aria-labelledby="orbit-panel-desktop-title"
                    onClick={(event) => event.stopPropagation()}
                    initial={{ opacity: 0, x: 36, y: "-50%" }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: "-50%",
                      transition: { duration: 0.3, delay: 0.16, ease: EASE },
                    }}
                    exit={{
                      opacity: 0,
                      x: 24,
                      y: "-50%",
                      transition: { duration: 0.24, ease: EASE },
                    }}
                    className={`absolute right-[5%] top-1/2 z-30 max-h-[calc(100%-2.5rem)] w-[min(22rem,28%)] overflow-y-auto ${panelSurface}`}
                  >
                    <PanelBody project={active} titleId="orbit-panel-desktop-title" />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          ) : null}
        </div>
      </div>

      <div
        className="relative z-10 flex min-h-[100svh] flex-col px-5 pb-12 pt-24 lg:hidden"
        aria-hidden={desktop === true}
        onClick={clear}
      >
        <div className="my-auto flex w-full flex-col items-center">
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              clear();
            }}
            aria-label={activeProject ? "Show all projects" : "AYV WRLD"}
            className="group h-40 w-40 border-0 bg-transparent p-0"
          >
            <span className="logo-affordance block h-full w-full">
              <Logo brand="ayvwrld" decorative priority className="h-full w-full" />
            </span>
          </button>

          <div className="mt-8 grid w-full max-w-sm grid-cols-6 gap-x-2 gap-y-5">
            {orbitProjects.map((project, index) => {
              const isActive = project.id === activeProject;
              const dimmed = activeProject !== null && !isActive;
              const cell =
                index < 3
                  ? "col-span-2"
                  : index === 3
                    ? "col-span-2 col-start-2"
                    : "col-span-2 col-start-4";
              return (
                <div key={project.id} className={cell}>
                  <motion.button
                    type="button"
                    animate={{ opacity: dimmed ? 0.18 : 1 }}
                    transition={{ duration: reduceMotion ? 0 : 0.35 }}
                    onClick={(event) => {
                      event.stopPropagation();
                      toggle(project.id);
                    }}
                    aria-pressed={isActive}
                    className="group flex w-full flex-col items-center gap-1.5 border-0 bg-transparent p-0"
                  >
                    <span className="logo-affordance relative block h-[4.25rem] w-[4.25rem]">
                      <ProjectMark project={project} />
                    </span>
                    <span className="w-full text-balance text-center text-[11px] font-semibold leading-tight tracking-tight text-paper/90">
                      {project.name}
                    </span>
                  </motion.button>
                </div>
              );
            })}
          </div>

          <AnimatePresence>
            {active ? (
              <motion.div
                key="orbit-panel-mobile"
                id="orbit-panel-mobile"
                role="region"
                aria-labelledby="orbit-panel-mobile-title"
                onClick={(event) => event.stopPropagation()}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE } }}
                exit={{ opacity: 0, y: 10, transition: { duration: 0.22, ease: EASE } }}
                className={`mt-8 w-full max-w-sm ${panelSurface}`}
              >
                <PanelBody project={active} titleId="orbit-panel-mobile-title" />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
