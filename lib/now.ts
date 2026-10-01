/**
 * Current focus. Edit this file when the work changes.
 */

import { links, product } from "@/lib/site";

export const now = {
  label: "Now",
  title: "Right now.",
  intro:
    "Right now I'm focused on learning how to build real software while turning AYV WRLD from an idea into something tangible.",
  items: [
    {
      label: "Building",
      body: `I build websites for people who need one. ${product.name} is a separate project, on its own site.`,
      href: links.product,
    },
    {
      label: "Learning",
      body: "Programming first: TypeScript, JavaScript, React, Next.js, databases, and APIs. AI and the rest of the fundamentals sit next to that, so I can build with them.",
    },
    {
      label: "Exploring",
      body: "SaaS ideas, AI applications, automation, and business models. Finance and crypto too. Mostly I'm looking for ways an idea becomes a product someone can actually use.",
    },
    {
      label: "Focus",
      body: "Becoming better at actually building software. The goal isn't just to make things work. It's to understand what I'm building, and gradually become able to build more complex things properly.",
    },
    {
      label: "Goals",
      body: "Get better at programming. Build and ship real products. Grow AYV WRLD. Learn AI well enough to build useful applications, and get the software fundamentals solid. If some of these become businesses, that comes after they exist.",
    },
    {
      label: "Thinking",
      body: "How far can I take this if I keep learning and building consistently for the next few years?",
    },
    {
      label: "Next",
      body: `Keep building ${product.name}, and finish it properly instead of jumping to the next idea.`,
    },
  ],
  pages: [
    { href: "/me", label: "Me" },
    { href: "/learn", label: "Learn" },
    { href: "/think", label: "Think" },
    { href: "/journey", label: "Journey" },
    { href: "/build", label: "Build" },
  ],
};
