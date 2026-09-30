/**
 * Index of work that already exists on the studio site,
 * plus empty slots for experiments and an archive.
 */

import { course, products, work } from "@/lib/site";

export const build = {
  label: "Build",
  title: "What exists.",
  intro:
    "Products, client work, and the course already on the studio page. Experiments and the archive stay empty until there is something real to put here.",
  groups: [
    {
      label: "Products",
      items: [
        {
          name: products.featured.name,
          status: "Live",
          note: products.featured.pitch,
          href: products.featured.href,
        },
        {
          name: products.upcoming[0].name,
          status: "Live",
          note: products.upcoming[0].pitch,
          href: products.upcoming[0].href ?? "#products",
        },
        {
          name: products.upcoming[1].name,
          status: "Coming soon",
          note: products.upcoming[1].pitch,
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
  archive: [] as { name: string; note: string }[],
};
