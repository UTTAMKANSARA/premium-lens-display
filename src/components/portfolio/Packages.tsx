import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const packages = [
  {
    name: "Essence",
    tagline: "Intimate gatherings",
    price: "₹35,000",
    duration: "Up to 6 hours coverage",
    photos: "150+ edited photos",
    delivery: "Delivery in 14 days",
    features: ["1 photographer", "Online gallery", "Print‑ready files", "Highlight reel (30s)"],
    featured: false,
  },
  {
    name: "Heirloom",
    tagline: "Most popular",
    price: "₹85,000",
    duration: "Full‑day coverage (10 hrs)",
    photos: "400+ edited photos",
    delivery: "Delivery in 21 days",
    features: ["2 photographers", "Curated keepsake album", "Cinematic teaser (60s)", "Pre‑event consultation", "Priority editing"],
    featured: true,
  },
  {
    name: "Heritage",
    tagline: "Multi‑day weddings",
    price: "₹1,80,000",
    duration: "Up to 3 days coverage",
    photos: "1000+ edited photos",
    delivery: "Delivery in 30 days",
    features: ["3 photographers + drone", "Premium leather album", "Full cinematic film (3–5 min)", "Couple shoot included", "Dedicated producer"],
    featured: false,
  },
];

export const Packages = () => {
  return (
    <section id="packages" className="relative py-24 md:py-36">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">Packages</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight">
              Honest pricing, generous storytelling.
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 text-muted-foreground">
              Three thoughtful packages for every kind of celebration. Custom
              quotes available for destination & multi‑day events.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((p, i) => (
            <Reveal key={p.name} delay={i * 120}>
              <article
                className={`group relative h-full flex flex-col rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 ${
                  p.featured
                    ? "bg-foreground text-background shadow-warm border border-primary/40"
                    : "bg-card text-card-foreground shadow-card border border-border/60 hover:border-primary/50"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 rounded-full">
                    Most loved
                  </span>
                )}
                <div className="flex items-baseline justify-between">
                  <h3 className="font-display text-3xl">{p.name}</h3>
                  <span className={`text-[11px] uppercase tracking-[0.25em] ${p.featured ? "text-secondary" : "text-muted-foreground"}`}>
                    {p.tagline}
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-xs uppercase tracking-[0.25em] opacity-70">Starting at</span>
                </div>
                <div className="font-display text-5xl mt-1">{p.price}</div>

                <ul className={`mt-8 space-y-3 text-sm ${p.featured ? "text-background/80" : "text-muted-foreground"}`}>
                  <li className="flex items-start gap-3"><Check size={16} className="mt-0.5 text-primary shrink-0" />{p.duration}</li>
                  <li className="flex items-start gap-3"><Check size={16} className="mt-0.5 text-primary shrink-0" />{p.photos}</li>
                  <li className="flex items-start gap-3"><Check size={16} className="mt-0.5 text-primary shrink-0" />{p.delivery}</li>
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={16} className="mt-0.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`mt-10 inline-flex items-center justify-between gap-3 rounded-full px-5 py-3 text-sm tracking-wide transition-colors duration-500 ${
                    p.featured
                      ? "bg-primary text-primary-foreground hover:bg-secondary hover:text-foreground"
                      : "bg-foreground text-background hover:bg-primary"
                  }`}
                >
                  Inquire about {p.name}
                  <ArrowRight size={16} className="transition-transform duration-500 group-hover:translate-x-1" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="text-center mt-12 text-sm text-muted-foreground">
            Need something custom? <a href="#contact" className="link-underline text-foreground">Let's design a package together →</a>
          </p>
        </Reveal>
      </div>
    </section>
  );
};
