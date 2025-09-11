import { processSteps } from "@/lib/data";
import { PageTransition } from "../page-transition";
import { StaggerContainer, FadeInUp } from "../components/animated";

export const metadata = { title: "Process" };

export default function ProcessPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">
            Process
          </h1>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            Here’s how we work with you from idea to launch and beyond.
          </p>
          <StaggerContainer
            amount={0.5}
            once={false}
            className="mt-8 grid gap-6 md:grid-cols-2"
            animate="show"
          >
            {processSteps.map((s, i) => (
              <FadeInUp key={s.title}>
                <li className="relative rounded-xl border p-10 px-12 bg-card/80 shadow-sm list-none overflow-hidden">
                  <span className="absolute top-4 left-2 bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center text-base font-bold shadow-md z-10">
                    {i + 1}
                  </span>
                  <div className="font-medium mt-2 text-lg flex items-center gap-2">
                    {s.title}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.description}
                  </p>
                </li>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </PageTransition>
  );
}
