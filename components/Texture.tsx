export function Texture({ strong = false }: { strong?: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div
        className={
          strong
            ? "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(154,154,154,0.2),transparent_62%)]"
            : "absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(154,154,154,0.07),transparent_68%)]"
        }
      />
      <div className={strong ? "absolute inset-0 halftone" : "absolute inset-0 halftone opacity-40"} />
      <div className="grain absolute inset-0" />
      {strong ? (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,#070B14_88%)]" />
      ) : null}
    </div>
  );
}
