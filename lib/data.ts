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

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  results: string[];
  tags: string[];
  url?: string;
  image?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "chia",
    title: "Chia – Dental Clinic Reservation Management System",
    summary:
      "A modern SaaS platform for dental clinics to manage reservations, patient records, and schedules efficiently.",
    results: [
      "Automated appointment scheduling and reminders",
      "Streamlined patient management and record-keeping",
      "Multi-clinic support with secure cloud access",
      "User-friendly dashboard for staff and administrators",
    ],
    tags: ["SaaS", "Next.js", "Healthcare"],
    url: "https://chia.ai.kr/",
    image: "/work/chia.png",
  },
  {
    slug: "chia-mobile",
    title: "Chia Mobile – Patient & Dentist Companion App",
    summary:
      "Cross-platform mobile application for real-time appointment tracking, push notifications, and instant patient-dentist communication.",
    results: [
      "Real-time push notifications for appointment changes",
      "Secure biometric login for patient data privacy",
      "Simplified mobile booking interface for patients",
      "Optimized offline access for clinic staff schedules",
    ],
    tags: ["Mobile", "React Native", "Healthcare", "iOS & Android"],
    url: "https://play.google.com/store/apps/details?id=com.anonymous.chia", // Placeholder URL
    image: "/work/chia-mobile.webp",
  },
] as const;

export const team = [
  {
    name: "Reynaldo Castante",
    role: "Founding Engineer",
    bio: "Full‑stack engineer focused on DX and shipping fast with quality.",
    links: { linkedin: "#", github: "https://github.com/Lan2x" },
    image: "/team/reynaldo.jpg",
  },
  {
    name: "Kizzelyn Cruz",
    role: "Frontend Engineer",
    bio: "Specializes in building beautiful, accessible user interfaces and seamless user experiences for modern web apps.",
    links: { linkedin: "#", github: "#" },
    image: "/team/kizzelyn.png",
  },
  {
    name: "Joveth Dela Cruz",
    role: "Backend Engineer",
    bio: "Expert in scalable backend systems, API design, and cloud infrastructure, ensuring reliability and performance.",
    links: { linkedin: "#", github: "#" },
    image: "/team/joveth.png",
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
