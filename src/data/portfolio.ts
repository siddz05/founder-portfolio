export const site = {
  name: "Siddharth Dwivedi",
  role: "Founder & Builder",
  tagline:
    "A struggling founder building simple SaaS for millions — no funding, no filter, just shipping.",
  location: "India · building for the world",
  availability: "Building in stealth · waitlist open",
  email: "hello@siddharth.dev",
  // TODO: replace with your real handles once ready
  socials: {
    github: "https://github.com/your-handle",
    linkedin: "https://linkedin.com/in/your-handle",
    twitter: "https://x.com/your-handle",
  },
};

export const missionStats = [
  { value: "1", label: "SaaS in stealth" },
  { value: "6+", label: "experiments shipped" },
  { value: "1M+", label: "dream — people helped" },
];

export const principles = [
  "Talk to users",
  "Ship v1 fast",
  "Build in public",
  "Stay humble",
  "Solve real problems",
  "No hype, just help",
  "Embrace the struggle",
  "Chai-powered",
];

export const story = {
  heading: "Struggling founder, stubborn mission.",
  bio: [
    "Hey, I'm Siddharth. I'm not a funded startup with a fancy office — I'm one engineer with a laptop, a big problem I can't stop thinking about, and a stubborn belief that software should help millions, not just impress investors.",
    "The struggle is real: long nights, failed experiments, running on savings and chai. But every failed side project taught me something, and every user conversation sharpens the mission. I'm documenting all of it in the open.",
  ],
  cards: [
    {
      kicker: "the struggle",
      emoji: "🥾",
      title: "Starting from zero",
      desc: "No funding, no team, no safety net. Just skills, savings, and an unreasonable amount of persistence.",
    },
    {
      kicker: "the insight",
      emoji: "💡",
      title: "A problem worth millions",
      desc: "Talking to real users surfaced a painful, everyday problem. Small enough to start, big enough to matter at scale.",
    },
    {
      kicker: "the mission",
      emoji: "🚀",
      title: "Simple SaaS, massive reach",
      desc: "One product, dead simple, priced for everyone. Built to serve millions — starting with the first ten users.",
    },
  ],
  exploring: ["User interviews", "Landing tests", "Pricing experiments", "MVP scope", "Distribution"],
};

export const flagship = {
  name: "Stealth SaaS",
  // TODO: replace with your real product name + one-liner when ready
  oneliner: "Something simple that solves a painful everyday problem.",
  desc: "Currently in stealth while I validate with real users. The thesis: take a workflow millions suffer through, make it 10x simpler, price it for everyone. Private beta opening soon — waitlist members get in first and shape the roadmap.",
  promises: ["Dead simple to use", "Priced for everyone", "Built with users, not for them"],
  status: "Private beta soon",
};

export type Experiment = {
  title: string;
  desc: string;
  lesson: string;
  emoji: string;
};

export const experiments: Experiment[] = [
  {
    title: "Pulseboard",
    desc: "Multi-tenant analytics dashboard with realtime charts and Stripe billing.",
    lesson: "Lesson: great tech, nobody asked for it. Talk to users first.",
    emoji: "📊",
  },
  {
    title: "Cartly",
    desc: "Headless storefront, 95+ Lighthouse, SEO-ready. Technically sweet.",
    lesson: "Lesson: crowded market, no edge. Distribution beats code.",
    emoji: "🛒",
  },
  {
    title: "JotAI",
    desc: "Markdown notes with semantic search + summarization.",
    lesson: "Lesson: closest to real pain — this one pointed at the mission.",
    emoji: "✨",
  },
];

export type JourneyStep = {
  date: string;
  title: string;
  desc: string;
};

export const journey: JourneyStep[] = [
  {
    date: "Then",
    title: "Engineer shipping for others",
    desc: "Years building full-stack apps — React, Node, Postgres. Learned how software gets made, and how often it misses the point.",
  },
  {
    date: "Later",
    title: "Side projects, honest failures",
    desc: "Shipped dashboards, storefronts, AI toys. Most flopped. Each one taught me what not to build — the most valuable curriculum there is.",
  },
  {
    date: "The turn",
    title: "Talked to users, found the pain",
    desc: "Stopped building in a cave. Started listening. One painful, everyday problem kept coming up — small enough to start, big enough for millions.",
  },
  {
    date: "Now",
    title: "Building the SaaS in stealth",
    desc: "Heads down on the MVP with a tiny circle of early users. Validating, iterating, documenting in the open. Savings + chai.",
  },
  {
    date: "Next",
    title: "Private beta → public launch",
    desc: "Waitlist opens the door. First ten users shape the product, then we scale to thousands, then millions. One step, honestly taken, at a time.",
  },
];

export const navLinks = [
  { label: "Story", href: "#story" },
  { label: "Building", href: "#building" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
