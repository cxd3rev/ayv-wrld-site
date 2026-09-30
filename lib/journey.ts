/**
 * Timeline and milestones.
 * Future years must not contain invented achievements.
 */

export const journey = {
  label: "Journey",
  title: "The story so far.",
  intro:
    "This isn't a list of wins. It's what I was interested in, what I tried, what I learned, and what I'm building now.",
  chapters: [
    {
      year: "2024",
      title: "Beginning",
      body: "This is where the curiosity started. An interest in technology, business, and making things, before it had a clear shape. I don't have a neat list of events from that year. It was the beginning.",
    },
    {
      year: "2025",
      title: "Exploration",
      body: "A year of looking around. Ideas, technology, business, and trying to see which direction was actually mine. Exploration, not a finished plan.",
    },
    {
      year: "2026",
      title: "Building",
      body: "This chapter is still open. I'm building AYV WRLD, learning to program, and working on Rated and AYV Automation. I'm also working on AYV Invest. Next to that I'm exploring SaaS, learning AI, and trying to get better at both the code and the business side. None of this is finished.",
    },
    {
      year: "2027",
      title: "Next chapter",
      body: "The story hasn't been written yet. I'll figure out what comes next by building toward it.",
    },
  ],
  milestonesLabel: "Milestones",
  milestonesEmpty:
    "No milestones yet. I'd rather add these when they actually happen.",
  milestones: [] as { year: string; title: string }[],
};
