/**
 * Index of work that already exists on the studio site,
 * plus empty slots for experiments and an archive.
 */

import { course, product, products, service, work } from "@/lib/site";

export const build = {
  label: "Build",
  title: "What exists.",
  intro:
    "The product, the service, side projects, client work and the course. Experiments stay empty until there is something real to put here.",
  groups: [
    {
      label: "Product",
      items: [
        {
          name: product.name,
          status: "A project I'm building",
          note: "It has its own site.",
          href: product.href,
        },
      ],
    },
    {
      label: "Service",
      items: [
        {
          name: service.name,
          status: "Open for clients",
          note: service.pitch,
          href: service.href,
        },
      ],
    },
    {
      label: "Side projects",
      items: [
        {
          name: products.side[0].name,
          status: "Live",
          note: products.side[0].pitch,
          href: products.side[0].href ?? "#products",
        },
        {
          name: products.side[1].name,
          status: "Coming soon",
          note: products.side[1].pitch,
          href: "#kleuro",
        },
      ],
    },
    {
      label: "Client work",
      items: [
        {
          name: work.dili.name,
          status: "Live",
          note: work.dili.description,
          href: work.dili.href,
        },
      ],
    },
    {
      label: "Course",
      items: [
        {
          name: course.name,
          status: "On the studio page",
          note: course.description,
          href: "#course",
        },
      ],
    },
  ],
  experimentsLabel: "Experiments",
  experimentsEmpty: "Nothing here yet.",
  experiments: [] as { name: string; note: string }[],
  archiveLabel: "Archive",
  archiveEmpty: "Nothing archived yet.",
  archive: [
    {
      name: "AYV Automation Stack",
      note: "Six separate modules (Avyro, Velto, Rovyn, Orvyn, Nexro, Ravelo). Merged into one product for one trade in October 2026.",
    },
  ] as { name: string; note: string }[],
};
