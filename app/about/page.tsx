import Image from "next/image";
import { PageTransition } from "../page-transition";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[1fr_2fr] items-start">
            <Image
              src="/reynaldo.jpg"
              alt="Portrait of Reynaldo Castante"
              width={480}
              height={620}
              priority
              className="w-full max-w-xs h-auto rounded-xl border border-border shadow-sm object-cover"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                About
              </h1>
              <p className="mt-4 text-muted-foreground">
                I’m Reynaldo Castante, a full‑stack engineer focused on DX and
                shipping fast with quality.
              </p>
              <div className="mt-8 prose prose-neutral max-w-none">
                <p>
                  I partner closely with founders, teams, and government
                  offices to clarify goals, design pragmatic solutions, and ship
                  value fast. My work spans web apps, mobile apps, and the APIs
                  behind them.
                </p>
                <p>
                  Working with me means you talk directly to the person doing
                  the work—no layers, no handoffs. I keep communication tight
                  and the feedback loop fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
