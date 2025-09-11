import Link from "next/link";
import { Container } from "./container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t mt-24">
      <Container className="py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="font-semibold">{siteConfig.name}</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-sm">
            {siteConfig.description}
          </p>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Company</div>
          <ul className="space-y-2 text-sm">
            {siteConfig.nav.slice(0, 6).map((i) => (
              <li key={i.href}>
                <Link
                  className="text-muted-foreground hover:text-foreground"
                  href={i.href}
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="text-muted-foreground hover:text-foreground"
                href={siteConfig.social.email}
              >
                {siteConfig.contactEmail}
              </a>
            </li>
            <li>
              <a
                className="text-muted-foreground hover:text-foreground"
                href={siteConfig.social.linkedin}
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                className="text-muted-foreground hover:text-foreground"
                href={siteConfig.social.github}
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t py-6 text-center text-xs text-muted-foreground">
        © {year} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
