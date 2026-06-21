// TODO: Add real testimonials when available

const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
}[] = [];

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-[hsl(var(--section-bg-1))]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Client Love
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 rounded-xl border border-border bg-card space-y-4">
              <p className="text-muted-foreground italic">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                {t.avatar && (
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                )}
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
