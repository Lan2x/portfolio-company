"use client";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Container } from "./container";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold tracking-tight">
          {siteConfig.name}
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <div key={item.href} className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative px-1 text-muted-foreground transition-colors hover:text-foreground",
                    active && "text-foreground"
                  )}
                >
                  {item.label}
                </Link>
                {active ? (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-4 left-0 h-0.5 w-full rounded bg-primary/90"
                    transition={{ type: "spring", stiffness: 500, damping: 40 }}
                  />
                ) : null}
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button asChild size="sm">
            <Link href="/contact">Start a project</Link>
          </Button>
        </div>
      </Container>
    </header>
  );
}
