export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="mt-4 text-muted-foreground text-sm">
          This website does not collect personal data beyond what you
          voluntarily provide via email. We use no tracking cookies.
        </p>
      </div>
    </div>
  );
}
