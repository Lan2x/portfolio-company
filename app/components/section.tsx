import { cn } from "@/lib/utils";
import { Container } from "./container";

type Props = React.PropsWithChildren<{
  className?: string;
  title?: string;
  subtitle?: string;
}>;

export function Section({ children, className, title, subtitle }: Props) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <Container>
        {title ? (
          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              {title}
            </h2>
            {subtitle ? (
              <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
