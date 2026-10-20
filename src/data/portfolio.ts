export const site = {
  name: "Signal Core Studios",
  role: "Stealth Startup Lab",
  tagline:
    "A stealth lab building small, calm software for everyday life — less friction, more connection. Three products in motion — zero pitch decks.",
  location: "India · shipping worldwide",
  availability: "In stealth · say hi",
  email: "support@signalcorestudios.com",
};

export const missionStats = [
  { value: "03", label: "products in motion" },
  { value: "02", label: "live — slowSKY & Autopilot Ledger" },
  { value: "01", label: "in discovery — finding friction" },
];

export const principles = [
  "Find friction",
  "Less friction",
  "More connection",
  "Talk to users",
  "Stay small",
  "No hype, just help",
  "Make it calm",
  "Chai-powered",
];

export const story = {
  heading: "Friction is the enemy.",
  bio: [
    "Signal Core Studios is a stealth startup lab with one obsession: the everyday friction millions of people put up with — and removing it with small, calm software.",
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
    "slowSKY — live on Android",
    "Autopilot Ledger — alpha live",
    "Product 002 — discovery",
    "User interviews",
    "Pricing tests",
    "Distribution",
  ],
};

export const flagship = {
  name: "slowSKY",
  logo: "/logos/slowsky-symbol.svg",
  oneliner: "Meet, play and rise.",
  desc: "Product 001 — live on Android. A chat community where you meet, play and rise: live rooms for countries and topics, private chats, room games and gifts. Built for good conversations, with moderation and safety at its core.",
  promises: [
    "Live rooms for countries and topics",
    "Room games like LowCard and Dice",
    "Moderation and safety at its core",
  ],
  status: "Live · Android",
  live: "https://slowsky.app",
  cta: "Visit slowSKY",
};

export type Product = {
  title: string;
  status: string;
  desc: string;
  note: string;
  emoji: string;
  /** An image shown in place of the emoji, e.g. the product's own logo */
  logo?: string;
  cta?: boolean;
  link?: { label: string; href: string };
};

export const products: Product[] = [
  {
    title: "Sit With",
    status: "In stealth",
    desc: "Your practice and the group's, overlapping.",
    note: "in stealth",
    emoji: "⭕",
    logo: "/logos/sitwith-symbol.svg",
  },
  {
    title: "Autopilot Ledger",
    status: "Alpha live · v1.3",
    desc: "A private expense tracker that quietly turns the receipts you already receive into a personal ledger. Read-only receipt access, no bank passwords, no money movement — revoke anytime.",
    note: "receipts in, ledger out",
    emoji: "📒",
    link: { label: "Try the live alpha", href: "https://autopilot-ledger-omega.vercel.app/" },
  },
  {
    title: "Next — codename Friction",
    status: "Finding friction",
    desc: "We're inside the problem: interviewing operators, shadowing workflows, measuring wasted hours. The product hasn't emerged yet — that's the point.",
    note: "no code until the pain is proven",
    emoji: "🧭",
  },
  {
    title: "Your workflow?",
    status: "Tell us",
    desc: "Drowning in repetitive work? Describe where it hurts — real friction from real operators is our favorite roadmap input.",
    note: "your pain could become our next product",
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
    title: "slowSKY is live on Android",
    desc: "Rooms, games and gifts in the hands of real users, with the APK on slowsky.app.",
  },
  {
    date: "Next",
    title: "slowSKY on Google Play",
    desc: "Closed testing with our first testers, then the public Play Store launch.",
  },
  {
    date: "Then",
    title: "Sit With comes out of stealth",
    desc: "A small, shared space for your practice and the group's.",
  },
  {
    date: "Later",
    title: "Autopilot Ledger beta",
    desc: "The alpha grows into a private beta, then a public launch.",
  },
];

export const navLinks = [
  { label: "Thesis", href: "#story" },
  { label: "Products", href: "#building" },
  { label: "Roadmap", href: "#journey" },
  { label: "Contact", href: "#contact" },
];
