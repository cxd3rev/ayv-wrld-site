import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { Surface } from "@/components/Surface";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AYV WRLD — Achieve Your Vision",
  description:
    "AYV WRLD builds websites for anyone who needs one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${interTight.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <Surface tone="dark">
          <MotionProvider>
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
            >
              Skip to content
            </a>
            {children}
          </MotionProvider>
        </Surface>
      </body>
    </html>
  );
}
