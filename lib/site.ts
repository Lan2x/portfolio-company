export type NavLink = {
  href: string;
  label: string;
};

export const siteConfig = {
  name: "Reynaldo Castante",
  description:
    "Freelance full‑stack developer building custom web and mobile software that ships fast and scales.",
  contactEmail: "castantereynaldo@gmail.com",
  url: "https://portfolio-company-eta.vercel.app",
  nav: [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/process", label: "Process" },
    { href: "/pricing", label: "Pricing" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ] as NavLink[],
  social: {
    github: "https://github.com/Lan2x",
    email: "mailto:castantereynaldo@gmail.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
