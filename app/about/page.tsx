import { PageTransition } from "../page-transition";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            About
          </h1>
          <p className="mt-4 text-muted-foreground">
            We’re a small, senior team focused on building software that
            delivers business outcomes.
          </p>
          <div className="mt-8 prose prose-neutral max-w-none">
            <p>
              We partner closely with founders and teams to clarify goals,
              design pragmatic solutions, and ship value fast. Our experience
              spans product, platform, and performance.
            </p>
            <p>
              As a 3‑developer studio, you get direct access to the people doing
              the work—no layers, no handoffs. We keep communication tight and
              the feedback loop fast.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
