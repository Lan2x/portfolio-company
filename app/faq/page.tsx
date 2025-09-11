export const metadata = { title: "FAQ" };

const faqs = [
  {
    q: "How do we start?",
    a: "Send us a note about your goals. We’ll set up a short call to align and propose next steps.",
  },
  {
    q: "What’s your typical timeline?",
    a: "Discovery sprints are 1–2 weeks. Builds are scoped in 2–6 week phases with weekly demos.",
  },
  {
    q: "Do you work fixed-bid?",
    a: "We prefer time & materials with clear milestones. Fixed-bid on well-defined scopes is possible.",
  },
];

export default function FAQPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
          FAQ
        </h1>
        <dl className="mt-8 space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="border-b pb-6">
              <dt className="font-medium">{f.q}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
