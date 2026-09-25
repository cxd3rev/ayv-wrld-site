"use client";

import type { MouseEvent, ReactNode } from "react";

type SafeLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
  external?: boolean;
  "aria-label"?: string;
};

export function SafeLink({
  href,
  className,
  children,
  external = false,
  "aria-label": ariaLabel,
}: SafeLinkProps) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      onClick={(event: MouseEvent<HTMLAnchorElement>) => {
        // PLACEHOLDER links use "#" until a real URL is set in lib/site.ts.
        if (href === "#") event.preventDefault();
      }}
    >
      {children}
    </a>
  );
}

export function ArrowLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <SafeLink
      href={href}
      external={external}
      className="relative inline-flex items-center gap-2 text-sm font-medium text-paper"
    >
      <span>{children}</span>
      <span
        aria-hidden
        className="transition-transform duration-300 group-hover:translate-x-1"
      >
        →
      </span>
      <span
        aria-hidden
        className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-navy transition-transform duration-300 ease-out group-hover:scale-x-100"
      />
    </SafeLink>
  );
}
