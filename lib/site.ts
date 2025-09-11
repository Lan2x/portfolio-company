export type NavLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Ren Software Studio",
  description:
    "A 3‑developer consultancy building custom web and mobile software that ships fast and scales.",
  contactEmail: "hello@example.com",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ] as NavLink[],
  social: {
    github: "https://github.com/your-org",
    linkedin: "https://www.linkedin.com/company/your-company",
    email: "mailto:hello@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
