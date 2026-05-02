import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMG } from "./images";

const reviews = [
  {
    quote:
      "Aarav captured our wedding like a memory we hadn't lived yet. Every frame feels like cinema — soft, honest, and timeless.",
    name: "Priya & Rohan",
    role: "Wedding · Udaipur",
    img: IMG.client1,
  },
  {
    quote:
      "We hired him for our annual conference and got editorial‑grade work. Calm, professional, and incredibly fast turnaround.",
    name: "Neha Sharma",
    role: "Brand Lead, Infosys",
    img: IMG.client2,
  },
  {
    quote:
      "Our daughter's first birthday felt impossibly chaotic, but the photos? Pure magic. Worth every rupee — and then some.",
    name: "Ananya Iyer",
    role: "Birthday · Mumbai",
    img: IMG.client3,
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 md:py-36 bg-cream-deep/40">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">Kind words</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight">
              Words from people I've had the joy of photographing.
            </h2>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 140}>
              <article className="relative h-full rounded-3xl bg-card border border-border/60 p-8 md:p-10 shadow-card transition-transform duration-500 hover:-translate-y-1">
                <Quote className="absolute -top-4 left-8 text-primary fill-primary" size={36} />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-5 font-display italic text-2xl leading-snug text-foreground text-pretty">
                  "{r.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border/60">
                  <img src={r.img} alt={r.name} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-medium">{r.name}</div>
                    <div className="text-xs text-muted-foreground tracking-wide">{r.role}</div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
