import { PageTransition } from "../page-transition";

export const metadata = { title: "Pricing" };

export default function PricingPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Pricing
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We offer{" "}
            <span className="font-semibold text-primary">
              per-project pricing
            </span>{" "}
            based on the size and complexity of your software needs. This
            ensures transparency and flexibility for every client.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Starter */}
            <div className="rounded-xl border bg-card/80 p-6 shadow-sm flex flex-col">
              <div className="font-semibold text-lg text-primary mb-1">
                Starter
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                ₱150,000
                <span className="text-base font-normal text-muted-foreground">
                  +
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Small website, landing page, or MVP
              </div>
              <ul className="flex-1 space-y-2 text-sm text-muted-foreground mb-4">
                <li>Consultation &amp; design</li>
                <li>Development &amp; launch</li>
                <li>Basic support</li>
              </ul>
            </div>
            {/* Growth */}
            <div className="rounded-xl border bg-card/80 p-6 shadow-sm flex flex-col">
              <div className="font-semibold text-lg text-primary mb-1">
                Growth
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                ₱300,000
                <span className="text-base font-normal text-muted-foreground">
                  +
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Custom web app, integrations, dashboards
              </div>
              <ul className="flex-1 space-y-2 text-sm text-muted-foreground mb-4">
                <li>Consultation &amp; design</li>
                <li>Development &amp; launch</li>
                <li>Integrations</li>
                <li>Basic support</li>
              </ul>
            </div>
            {/* Enterprise */}
            <div className="rounded-xl border bg-card/80 p-6 shadow-sm flex flex-col">
              <div className="font-semibold text-lg text-primary mb-1">
                Enterprise
              </div>
              <div className="text-2xl font-bold text-foreground mb-2">
                ₱1,200,000
                <span className="text-base font-normal text-muted-foreground">
                  +
                </span>
              </div>
              <div className="text-sm text-muted-foreground mb-4">
                Complex systems, SaaS, ongoing support
              </div>
              <ul className="flex-1 space-y-2 text-sm text-muted-foreground mb-4">
                <li>Consultation &amp; design</li>
                <li>Development &amp; launch</li>
                <li>Integrations</li>
                <li>Ongoing support</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-muted-foreground text-sm max-w-2xl">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                All packages include consultation, design, development, and
                basic support.
              </li>
              <li>
                Final pricing depends on your project’s requirements and scope.
              </li>
            </ul>
            <p className="mt-4">
              For a detailed quote, please{" "}
              <a
                href="/contact"
                className="text-primary underline underline-offset-4"
              >
                contact us
              </a>{" "}
              with your project details!
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
