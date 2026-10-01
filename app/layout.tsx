import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import { LocaleProvider, SkipLink } from "@/components/Locale";
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
  description: "AYV WRLD bouwt websites voor iedereen die er een nodig heeft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${interTight.variable}`}>
      <body className="bg-ink font-sans text-paper antialiased">
        <LocaleProvider>
          <Surface tone="dark">
            <MotionProvider>
              <SkipLink />
              {children}
            </MotionProvider>
          </Surface>
        </LocaleProvider>
      </body>
    </html>
  );
}
