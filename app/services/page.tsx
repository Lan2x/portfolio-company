import { services } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { PageTransition } from "../page-transition";
import { FadeInUp, StaggerContainer } from "../components/animated";

export const metadata = {
  title: "Services",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <div className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Services
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            We help teams design, build, and launch software that drives
            outcomes.
          </p>
          <StaggerContainer
            amount={0.5}
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((s) => (
              <FadeInUp key={s.description}>
                <Card className="bg-card/70 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    <CardDescription>{s.description}</CardDescription>
                  </CardHeader>
                </Card>
              </FadeInUp>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </PageTransition>
  );
}
