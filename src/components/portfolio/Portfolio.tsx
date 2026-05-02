import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMG } from "./images";

const categories = [
  { title: "Weddings", count: "120+ films", img: IMG.catWedding, span: "h-[420px] lg:h-[520px] lg:col-span-7 lg:row-span-2" },
  { title: "Birthday Celebrations", count: "80+ events", img: IMG.catBirthday, span: "h-[280px] lg:h-[250px] lg:col-span-5" },
  { title: "Baby Showers", count: "60+ stories", img: IMG.catBaby, span: "h-[280px] lg:h-[250px] lg:col-span-5" },
  { title: "Corporate", count: "140+ brands", img: IMG.catCorporate, span: "h-[320px] lg:h-[360px] lg:col-span-12" },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="relative py-24 md:py-36 bg-cream-deep/50">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <span className="text-xs uppercase tracking-[0.32em] text-primary">Selected work</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight max-w-2xl">
                Four kinds of joy, one <em className="italic text-primary">unmistakable</em> hand.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={240}>
            <p className="max-w-sm text-muted-foreground">
              Each category is shaped around the rhythm of the day — sacred,
              candid, and never staged.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 auto-rows-fr">
          {categories.map((c, i) => (
            <Reveal key={c.title} variant="mask" className={c.span} delay={i * 90}>
              <a
                href="#contact"
                className={`group relative block h-full w-full overflow-hidden rounded-2xl shadow-card`}
              >
                <img
                  src={c.img}
                  alt={`${c.title} photography`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-overlay" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-700" />

                <div className="relative h-full flex flex-col justify-end p-6 md:p-8 text-background">
                  <div className="overflow-hidden">
                    <span className="block text-[11px] uppercase tracking-[0.3em] opacity-80 translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                      {c.count}
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-4 mt-2">
                    <h3 className="font-display text-3xl md:text-5xl leading-tight">{c.title}</h3>
                    <span className="grid place-items-center h-12 w-12 rounded-full bg-background/95 text-foreground translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="mt-4 h-px w-0 bg-background/60 group-hover:w-full transition-all duration-700" />
                  <span className="mt-3 text-xs opacity-0 group-hover:opacity-90 transition-opacity duration-700">
                    View gallery
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
