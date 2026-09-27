"use client";

import Image from "next/image";
import { useSurfaceTone, type SurfaceTone } from "@/components/Surface";

export type LogoBrand = "ayvwrld" | "ayvstack" | "oma" | "rated" | "kleuro";

const altText: Record<LogoBrand, string> = {
  ayvwrld: "AYV WRLD",
  ayvstack: "AYV Automation Pack",
  oma: "One Man Army Stack",
  rated: "Rated",
  kleuro: "Kleuro",
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
  // Kleuro is a purple/blue/cyan gradient. A black recolor would flatten it,
  // so every surface uses the transparent colorful mark.
  const variant =
    brand === "kleuro" ? "white" : surface === "light" ? "black" : "white";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const src = `${basePath}/logos/${brand}-logo-${variant}.png`;
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
