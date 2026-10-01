import Image from "next/image";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function LogoMass() {
  return (
    <section
      aria-label="AYV WRLD"
      className="relative flex flex-col items-center justify-center overflow-x-clip bg-[#0A0A0A] px-0 pb-8 pt-20 md:h-[100svh] md:overflow-visible md:pb-0 md:pt-[4.5rem]"
    >
      <div className="relative flex w-full justify-center">
        <div className="relative aspect-[2/1] w-full max-w-full md:w-[min(100vw,164vh,calc((100svh-7.5rem)*2))]">
          <Image
            src={`${basePath}/hero/ayvwrld-front.png`}
            alt="AYV WRLD"
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-contain mix-blend-screen"
          />
        </div>
      </div>

      <p className="relative z-10 mt-6 max-w-xs px-6 text-center md:mt-3 md:max-w-sm md:px-6">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.28em] text-paper/80">
          AYV WRLD
        </span>
        <span className="mt-2 block text-sm leading-snug text-paper/60 md:text-xs">
          Products, tools, and a course under one name.
        </span>
      </p>
    </section>
  );
}
