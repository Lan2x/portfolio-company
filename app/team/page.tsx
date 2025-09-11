import { team } from "@/lib/data";
import { PageTransition } from "../page-transition";
import Image from "next/image";

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
              <div
                key={m.name}
                className="rounded-lg border p-6 bg-card flex flex-col items-center text-center"
              >
                {m.image && (
                  <span className="mb-4 block rounded-full border border-border bg-muted overflow-hidden w-[96px] h-[96px]">
                    <Image
                      src={m.image}
                      alt={m.name}
                      width={96}
                      height={96}
                      className="object-cover w-full h-full"
                      priority
                    />
                  </span>
                )}
                <div className="font-medium text-lg">{m.name}</div>
                <div className="text-sm text-muted-foreground mb-1">
                  {m.role}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
