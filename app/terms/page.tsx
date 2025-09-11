export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Terms of Service
        </h1>
        <p className="mt-4 text-muted-foreground text-sm">
          Use of this site constitutes acceptance of these terms. Content is
          provided as‑is without warranties.
        </p>
      </div>
    </div>
  );
}
