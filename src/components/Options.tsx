const options = [
  {
    title: "Just Looking?",
    body: "Download our free Moving to Poland Checklist",
    cta: "Download Here",
  },
  {
    title: "Actively Planning?",
    body: "Book a 1:1 consultation",
    cta: "Book Here",
  },
  {
    title: "Already Here?",
    body: "Join our next community meetup",
    cta: "Join Here",
  },
  {
    title: "Supporting Others?",
    body: "Check out our corporate packages",
    cta: "Check Out Here",
  },
];

export function Options() {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="py-16 md:py-20 flex flex-col items-center px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary mb-3">
            Ready to Make Poland Feel Like Home?
          </h2>
          <p className="uppercase tracking-[0.3em] text-xs text-navy-foreground/70">
            Let's get you started
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-12 w-full max-w-3xl">
          {options.map((o) => (
            <div key={o.title} className="flex flex-col items-start">
              <h3 className="font-display text-xl font-semibold mb-2">{o.title}</h3>
              <p className="text-navy-foreground/70 text-sm mb-5">{o.body}</p>
              <button className="inline-flex items-center border border-primary text-primary px-5 py-2 rounded-sm text-sm font-medium hover:bg-primary hover:text-primary-foreground transition">
                {o.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
