import Link from "next/link";
import Image from "next/image";
import { Container } from "./components/container";
import { Section } from "./components/section";
import { services, caseStudies } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { StaggerContainer, FadeInUp } from "./components/animated";
import { Appear } from "./components/appear";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-16 md:pt-24 pb-12 border-b bg-gradient-to-b from-background to-secondary/40 min-h-[80vh] md:min-h-screen">
        <Container>
          <div className="grid items-center gap-10 md:grid-cols-2">
            <Appear>
              <div>
                <h1 className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
                  Senior product engineers building software that moves the
                  needle
                </h1>
                <p className="mt-4 text-muted-foreground text-base md:text-lg">
                  {siteConfig.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href="/contact">Start a project</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/work">See our work</Link>
                  </Button>
                </div>
              </div>
            </Appear>
            <Appear delay={0.06}>
              <div className="relative md:justify-self-end">
                <div
                  className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-foreground/10 to-secondary/30 blur-3xl -z-10"
                  aria-hidden
                />
                <Image
                  src="/hero-team.png"
                  alt="Our team designing and building modern software products"
                  width={640}
                  height={480}
                  priority
                  className="w-full h-auto rounded-xl border border-border shadow-sm object-cover"
                />
              </div>
            </Appear>
          </div>
        </Container>
      </section>

      {/* What we do */}
      <Section
        title="What we do"
        subtitle="Full‑stack product engineering from idea to launch and beyond."
      >
        <StaggerContainer
          amount={0.5}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.slice(0, 6).map((s, i) => {
            const accent =
              i % 3 === 0 ? "primary" : i % 3 === 1 ? "secondary" : "accent";
            return (
              <FadeInUp key={s.title}>
                <Card
                  className={cn(
                    "group hover:shadow-sm transition-shadow bg-card/70 backdrop-blur border",
                    accent === "primary" && "border-t-4 border-primary/70",
                    accent === "secondary" && "border-t-4 border-secondary/70",
                    accent === "accent" && "border-t-4 border-accent/70"
                  )}
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex h-9 w-9 items-center justify-center rounded-full ring-1",
                          accent === "primary" &&
                            "bg-primary/10 text-primary ring-primary/20",
                          accent === "secondary" &&
                            "bg-secondary/60 text-secondary-foreground ring-secondary/30",
                          accent === "accent" &&
                            "bg-accent/10 text-accent ring-accent/20"
                        )}
                      >
                        <Image
                          src={`/${s.icon}.svg`}
                          alt={s.title}
                          width={18}
                          height={18}
                        />
                      </span>
                      <CardTitle className="text-base">{s.title}</CardTitle>
                    </div>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeInUp>
            );
          })}
        </StaggerContainer>
        <div className="mt-8">
          <Link
            href="/services"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            Explore services →
          </Link>
        </div>
      </Section>

      {/* Case Studies */}
      <Section
        title="Selected work"
        subtitle="Business outcomes first. Here are a few highlights."
      >
        <StaggerContainer amount={0.5} className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((c) => (
            <FadeInUp key={c.slug}>
              <Card className="group hover:shadow-sm transition-shadow bg-card/70 backdrop-blur">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg group-hover:underline underline-offset-4">
                      <Link href={`/work/${c.slug}`}>{c.title}</Link>
                    </CardTitle>
                    <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">
                      Case Study
                    </span>
                  </div>
                  <CardDescription>{c.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border px-2 py-0.5 bg-secondary/60"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeInUp>
          ))}
        </StaggerContainer>
        <div className="mt-8">
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4"
          >
            View all case studies →
          </Link>
        </div>
      </Section>
    </>
  );
}
