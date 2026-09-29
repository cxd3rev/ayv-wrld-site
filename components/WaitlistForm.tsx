"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm({ product }: { product: string }) {
  const [joined, setJoined] = useState(false);
  const fieldId = `waitlist-${product.toLowerCase()}`;

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // PLACEHOLDER: no backend yet. This only confirms on the page.
    // Connect the email field to your list provider before launch.
    setJoined(true);
  }

  if (joined) {
    return <p className="mt-8 text-sm text-paper">You&apos;re on the list.</p>;
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mt-8 flex w-full min-w-0 flex-col gap-2 sm:flex-row"
    >
      <label htmlFor={fieldId} className="sr-only">
        Email for the {product} waitlist
      </label>
      <input
        id={fieldId}
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="Email address"
        className="h-12 w-full min-w-0 rounded-full border border-white/20 bg-ink px-4 text-base text-paper outline-none placeholder:text-paper/45 focus:border-white/40"
      />
      <button
        type="submit"
        className="relative inline-flex h-12 w-full shrink-0 items-center justify-center rounded-full border border-white/15 px-4 text-sm text-paper transition duration-300 hover:border-navy sm:w-auto"
      >
        Join the waitlist
        <span
          aria-hidden
          className="absolute -bottom-1.5 left-3 right-3 h-px origin-left scale-x-0 bg-navy transition-transform duration-300 group-hover:scale-x-100"
        />
      </button>
    </form>
  );
}
