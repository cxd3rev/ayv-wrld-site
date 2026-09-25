export function Texture({ strong = false }: { strong?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className={strong ? "absolute inset-0 halftone" : "absolute inset-0 halftone opacity-35"} />
      <div className="grain absolute inset-0" />
      {strong ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#0A0A0A_88%)]" />
      ) : null}
    </div>
  );
}
