/**
 * Timeline and milestones. Placeholders only.
 * Future years must not contain invented achievements.
 */

export const journey = {
  label: "Journey",
  title: "The story so far.",
  intro:
    "PLACEHOLDER: a short line about the path. Years below are markers, not a list of wins.",
  chapters: [
    {
      year: "2024",
      title: "Beginning",
      body: "PLACEHOLDER: how it started.",
    },
    {
      year: "2025",
      title: "Exploration",
      body: "PLACEHOLDER: what you tried.",
    },
    {
      year: "2026",
      title: "Building",
      body: "PLACEHOLDER: what you are building now.",
    },
    {
      year: "2027",
      title: "Next chapter",
      body: "The story hasn't been written yet.",
    },
  ],
  milestonesLabel: "Milestones",
  milestonesEmpty: "No milestones yet.",
  milestones: [] as { year: string; title: string }[],
};
