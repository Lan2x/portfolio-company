import { processSteps } from "@/lib/data";
import { PageTransition } from "../page-transition";

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Process
          </h1>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {processSteps.map((s, i) => (
              <li key={s.title} className="rounded-lg border p-6 bg-card">
                <div className="text-xs text-muted-foreground">
                  Step {i + 1}
                </div>
                <div className="font-medium mt-1">{s.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {s.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageTransition>
  );
}
