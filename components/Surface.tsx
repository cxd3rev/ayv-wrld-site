"use client";

import { createContext, useContext } from "react";

export type SurfaceTone = "dark" | "light";

const SurfaceContext = createContext<SurfaceTone>("dark");

export function Surface({
  tone,
  children,
}: {
  tone: SurfaceTone;
  children: React.ReactNode;
}) {
  return (
    <SurfaceContext.Provider value={tone}>{children}</SurfaceContext.Provider>
  );
}

export function useSurfaceTone() {
  return useContext(SurfaceContext);
}
