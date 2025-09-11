import Link from "next/link";
import { caseStudies } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { PageTransition } from "../page-transition";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Case Studies
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            A selection of projects and outcomes.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudies.map((c) => (
              <Card
                key={c.slug}
                className="group hover:shadow-sm transition-shadow bg-card/70 backdrop-blur"
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg group-hover:underline underline-offset-4">
                      <Link href={`/work/${c.slug}`}>{c.title}</Link>
                    </CardTitle>
                    <span className="text-xs rounded-full border px-2 py-0.5 text-muted-foreground">
                      Results
                    </span>
                  </div>
                  <CardDescription>{c.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground list-disc pl-5">
                    {c.results.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
