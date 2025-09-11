import { notFound } from "next/navigation";
import { caseStudies } from "@/lib/data";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return {};
  return { title: `${item.title}` };
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) notFound();

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          {item.title}
        </h1>
        <p className="mt-4 text-muted-foreground">{item.summary}</p>
        {item.url && (
          <Button asChild className="mt-4" size="lg">
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              Visit Project
            </a>
          </Button>
        )}
        <div className="mt-8">
          <h2 className="font-medium">Results</h2>
          <ul className="mt-2 list-disc pl-6 text-sm text-muted-foreground">
            {item.results.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-2 text-xs text-muted-foreground">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full border px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
