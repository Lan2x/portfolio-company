import { team } from "@/lib/data";
import { PageTransition } from "../page-transition";

export const metadata = { title: "Team" };

export default function TeamPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Team
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Three senior developers, one aligned mission: ship impactful
            software.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="rounded-lg border p-6 bg-card">
                <div className="font-medium">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
