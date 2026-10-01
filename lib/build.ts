/**
 * Index of work that already exists on the studio site,
 * plus empty slots for experiments and an archive.
 */

import { course, product, work } from "@/lib/site";

export const build = {
  label: "Build",
  title: "What exists.",
  intro:
    "AYV Automation, Dili Paints, and One Man Army Stack.",
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
          status: "On the projects page",
          note: course.description,
          href: "/projects",
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
