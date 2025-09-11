import { PageTransition } from "../page-transition";

export const metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Careers
          </h1>
          <p className="mt-4 text-muted-foreground">
            We don’t have open roles right now. If you’re exceptional and
            aligned with our approach, reach out and we’ll keep you in mind.
          </p>
        </div>
      </div>
    </PageTransition>
  );
}
