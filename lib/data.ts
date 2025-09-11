export const services = [
  {
    title: "Product Discovery",
    description:
      "Research, scope, and validate the highest‑impact features before writing code.",
    icon: "file",
  },
  {
    title: "Design & Prototyping",
    description:
      "UX/UI design with interactive prototypes to align stakeholders quickly.",
    icon: "window",
  },
  {
    title: "Web & API Development",
    description:
      "Modern web apps with Next.js and robust APIs. Performance and accessibility first.",
    icon: "globe",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross‑platform mobile experiences with a shared design system.",
    icon: "next",
  },
  {
    title: "Launch & Support",
    description:
      "Deployment, monitoring, and iteration to keep shipping value.",
    icon: "vercel",
  },
] as const;

export const caseStudies = [
  {
    slug: "ops-dashboard",
    title: "Operations Dashboard",
    summary:
      "Unified real‑time insights across tools, improving decisions and reducing noise.",
    results: [
      "-35% time to insight",
      "+25% team productivity",
      "NPS +18 after launch",
    ],
    tags: ["Next.js", "Tailwind", "Analytics"],
  },
  {
    slug: "ecommerce-modernization",
    title: "E‑commerce Modernization",
    summary:
      "Replatformed storefront and admin, cutting page loads to under 1s globally.",
    results: ["+22% conversion", "Core Web Vitals: all green"],
    tags: ["Next.js", "Edge", "SEO"],
  },
] as const;

export const team = [
  {
    name: "Avery Kim",
    role: "Founding Engineer",
    bio: "Full‑stack engineer focused on DX and shipping fast with quality.",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Riley Chen",
    role: "Product Engineer",
    bio: "Bridges product and engineering to deliver business outcomes.",
    links: { linkedin: "#", github: "#" },
  },
  {
    name: "Jordan Patel",
    role: "Platform Engineer",
    bio: "Loves performance, reliability, and clean abstractions.",
    links: { linkedin: "#", github: "#" },
  },
] as const;

export const pricingTiers = [
  {
    name: "Sprint",
    priceText: "From $5k",
    features: [
      "1–2 week engagement",
      "Discovery or prototype",
      "Senior engineer(s) only",
    ],
  },
  {
    name: "Build",
    priceText: "From $12k/mo",
    features: [
      "Dedicated pod (part‑time)",
      "Design + engineering",
      "Weekly demos",
    ],
  },
  {
    name: "Scale",
    priceText: "Custom",
    features: ["Performance, platform, migrations", "SLAs available"],
  },
] as const;

export const processSteps = [
  {
    title: "Discovery",
    description:
      "Understand goals, constraints, and users. Align on success criteria.",
  },
  {
    title: "Design",
    description: "Flows, UI, and architecture to de‑risk build.",
  },
  { title: "Build", description: "Iterate in small slices with weekly demos." },
  {
    title: "Launch",
    description: "Staged rollouts, observability, and polish.",
  },
  { title: "Support", description: "Measure, iterate, and expand impact." },
] as const;

export const posts = [
  {
    slug: "why-small-teams-ship-faster",
    title: "Why small senior teams ship faster",
    excerpt: "Focus, clarity, and ownership beat headcount.",
    date: "2025-07-01",
    content:
      "We believe small, senior teams with clear goals ship faster and with fewer surprises. Here’s how we approach projects…",
  },
] as const;
