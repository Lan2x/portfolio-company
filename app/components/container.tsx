import { cn } from "@/lib/utils";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

export function Container({ children, className }: Props) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}
    >
      {children}
    </div>
  );
}
