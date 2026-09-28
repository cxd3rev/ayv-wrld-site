"use client";

import Image from "next/image";
import { useSurfaceTone, type SurfaceTone } from "@/components/Surface";

export type LogoBrand = "ayvwrld" | "ayvstack" | "oma" | "rated" | "kleuro" | "dili";

const altText: Record<LogoBrand, string> = {
  ayvwrld: "AYV WRLD",
  ayvstack: "AYV Automation Pack",
  oma: "One Man Army Stack",
  rated: "Rated",
  kleuro: "Kleuro",
  dili: "Dili Paints",
};

/** White / gradient marks. Kleuro and Dili keep their grey artwork. */
const whiteMark: Record<LogoBrand, string> = {
  ayvwrld: "ayvwrld-logo-white.png",
  ayvstack: "ayvstack-logo-white.png",
  oma: "oma-logo-w.png",
  rated: "rated-logo-w.png",
  kleuro: "kleuro-logo-w.png",
  dili: "dilipaints-logo-w.png",
};

type LogoProps = {
  brand: LogoBrand;
  className?: string;
  /** Dark surface uses the white mark. Light surface uses the black mark. */
  tone?: SurfaceTone;
  decorative?: boolean;
  priority?: boolean;
  fill?: boolean;
};

/**
 * White mark on dark backgrounds, black mark on light backgrounds.
 * Inherits the nearest <Surface tone="...">, which defaults to dark.
 */
export function Logo({
  brand,
  className = "",
  tone,
  decorative = false,
  priority = false,
  fill = false,
}: LogoProps) {
  const inherited = useSurfaceTone();
  const surface = tone ?? inherited;
  // Kleuro is a gradient and Dili is a grey monogram. A black recolor would
  // flatten them, so every surface uses the single transparent mark.
  const variant =
    brand === "kleuro" || brand === "dili"
      ? "white"
      : surface === "light"
        ? "black"
        : "white";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const file =
    variant === "black" ? `${brand}-logo-black.png` : whiteMark[brand];
  const src = `${basePath}/logos/${file}`;
  const alt = decorative ? "" : altText[brand];

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 80vw, 720px"
        className={`object-contain ${className}`}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1120}
      height={1120}
      priority={priority}
      className={`object-contain ${className}`}
    />
  );
}
