"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { copy, localeNames, locales, type Copy, type Locale } from "@/lib/copy";
import { homeHref } from "@/lib/paths";

const STORAGE_KEY = "ayv-lang";

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: Copy;
} | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "nl" || value === "fr" || value === "en";
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("nl");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(saved)) setLocaleState(saved);
    setReady(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", copy[locale].metaDescription);
    if (ready) window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale, ready]);

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocaleState,
        copy: copy[locale],
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const value = useContext(LocaleContext);
  if (!value) throw new Error("useLocale must be used inside LocaleProvider");
  return value;
}

export function BackHome() {
  const { copy: text } = useLocale();
  return (
    <div className="shell pb-16">
      <a
        href={homeHref("main")}
        className="text-sm text-paper/70 underline decoration-white/20 underline-offset-4 transition hover:decoration-navy"
      >
        {text.back}
      </a>
    </div>
  );
}

export function SkipLink() {
  const { copy: text } = useLocale();
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
    >
      {text.skip}
    </a>
  );
}

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale, copy: text } = useLocale();

  return (
    <div role="group" aria-label={text.languageLabel} className={`flex items-center gap-1 ${className}`}>
      {locales.map((code) => {
        const selected = locale === code;
        return (
          <button
            key={code}
            type="button"
            aria-pressed={selected}
            aria-label={localeNames[code]}
            onClick={() => setLocale(code)}
            className={`h-8 min-w-8 rounded-full px-2 text-[11px] font-medium tracking-[0.14em] transition ${
              selected ? "bg-paper text-ink" : "text-paper/55 hover:text-paper"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
