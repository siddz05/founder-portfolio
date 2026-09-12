export const site = {
  name: "Signal Core Co.",
  mark: "S\\",
  role: "Stealth Startup Lab",
  tagline:
    "A stealth lab turning everyday friction into autopilot software. Two products in motion — zero pitch decks.",
  location: "India · shipping worldwide",
  availability: "In stealth · waitlist open",
  email: "hello@signalcore.co",
  // TODO: replace with your real handles once ready
  socials: {
    github: "https://github.com/signal-core",
    linkedin: "https://linkedin.com/company/signal-core",
    twitter: "https://x.com/signalcore",
  },
};

export const missionStats = [
  { value: "02", label: "products in motion" },
  { value: "01", label: "in build — Autopilot Ledger" },
  { value: "01", label: "in discovery — finding friction" },
];

export const principles = [
  "Find friction",
  "Kill busywork",
  "Ship autopilot",
  "Talk to users",
  "Stay small",
  "No hype, just help",
  "Automate the boring",
  "Chai-powered",
];

export const story = {
  heading: "Busywork is the enemy.",
  bio: [
    "Signal Core Co. is a stealth startup lab with one obsession: the boring, repetitive work millions of people suffer through every day — and killing it with software.",
    "We don't start with code. We start by living inside the friction — shadowing real workflows, counting wasted hours — and only then do we build. One product already runs on autopilot; the next is still taking shape inside the problem.",
  ],
  cards: [
    {
      kicker: "find friction",
      emoji: "🔍",
      title: "Live inside the problem",
      desc: "We embed in real workflows and measure the pain before writing a line of code. No friction, no product.",
    },
    {
      kicker: "ship autopilot",
      emoji: "🤖",
      title: "Automate the boring",
      desc: "If a human does it twice, software should do it forever. Our products take repetitive work to zero.",
    },
    {
      kicker: "launch often",
      emoji: "📦",
      title: "A lab, not a single bet",
      desc: "Small team, multiple shots on goal. Every launch compounds — shared infra, shared learnings, one mission.",
    },
  ],
  exploring: [
    "Autopilot Ledger — build",
    "Product 002 — discovery",
    "User interviews",
    "Pricing tests",
    "Distribution",
  ],
};

export const flagship = {
  name: "Autopilot Ledger",
  oneliner: "Your books, kept by themselves.",
  desc: "Product 001. Bookkeeping that runs on autopilot — transactions categorized, records reconciled, reports ready without lifting a finger. In build with a tiny circle of early users. Waitlist members enter the private beta first and shape the roadmap.",
  promises: [
    "Zero-entry bookkeeping",
    "Always reconciled",
    "Reports on autopilot",
  ],
  status: "In build · private beta soon",
};

export type Product = {
  title: string;
  status: string;
  desc: string;
  note: string;
  emoji: string;
  cta?: boolean;
};

export const products: Product[] = [
  {
    title: "Product 002 — codename Friction",
    status: "Finding friction",
    desc: "We're inside the problem: interviewing operators, shadowing workflows, measuring wasted hours. The product hasn't emerged yet — that's the point.",
    note: "no code until the pain is proven",
    emoji: "🧭",
  },
  {
    title: "Product 003",
    status: "Locked",
    desc: "Sealed in the vault until 001 and 002 are flying. A lab always keeps one idea under wraps.",
    note: "declassifies after launch 002",
    emoji: "🔒",
  },
  {
    title: "Your workflow?",
    status: "Tell us",
    desc: "Drowning in repetitive work? Describe where it hurts — real friction from real operators is our favorite roadmap input.",
    note: "your pain could become product 004",
    emoji: "💬",
    cta: true,
  },
];

export type JourneyStep = {
  date: string;
  title: string;
  desc: string;
};

export const journey: JourneyStep[] = [
  {
    date: "Now",
    title: "Autopilot Ledger in build",
    desc: "Core autopilot engine plus a tiny early-user circle. Weekly ships, tight feedback loops, zero ceremony.",
  },
  {
    date: "Next",
    title: "Private beta",
    desc: "The waitlist opens the door. The first hundred users stress-test the autopilot in the wild.",
  },
  {
    date: "Then",
    title: "Product 002 takes shape",
    desc: "Discovery hardens into a build. Friction findings become our second launch.",
  },
  {
    date: "Later",
    title: "The autopilot suite",
    desc: "A family of products sharing one mission: zero busywork. Public launch first — then scale to millions.",
  },
];

export const navLinks = [
  { label: "Thesis", href: "#story" },
  { label: "Products", href: "#building" },
  { label: "Roadmap", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
