import { Briefcase, Building2, Megaphone, Users, Calendar } from "lucide-react";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { IMG } from "./images";

const subcats = [
  { icon: Calendar, label: "Office Events" },
  { icon: Megaphone, label: "Brand Campaigns" },
  { icon: Building2, label: "Company Functions" },
  { icon: Users, label: "Team Portraits" },
  { icon: Briefcase, label: "Corporate Meetings" },
];

const logos = ["TATA", "INFOSYS", "ZOMATO", "MYNTRA", "SWIGGY", "HDFC", "RELIANCE", "WIPRO"];

export const Corporate = () => {
  return (
    <section id="corporate" className="relative py-24 md:py-36 bg-foreground text-background overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Copy */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs uppercase tracking-[0.32em] text-secondary">Corporate Photography</span>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight">
                Polished, on‑brand visuals for serious teams.
              </h2>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 text-background/70 max-w-md text-pretty">
                A refined, deadline‑friendly approach to corporate imagery — from
                annual conferences and product launches to leadership portraits
                and editorial brand stories.
              </p>
            </Reveal>

            <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {subcats.map((s, i) => (
                <Reveal as="li" key={s.label} delay={i * 80}>
                  <div className="flex items-center gap-3 rounded-xl border border-background/15 px-4 py-3 hover:border-primary/60 hover:bg-background/5 transition-colors duration-500">
                    <span className="grid place-items-center h-9 w-9 rounded-full bg-background/10 text-secondary">
                      <s.icon size={16} />
                    </span>
                    <span className="text-sm tracking-wide">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={500}>
              <a
                href="#contact"
                className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm tracking-wide hover:bg-secondary hover:text-foreground transition-colors duration-500"
              >
                Request corporate quote
              </a>
            </Reveal>
          </div>

          {/* Masonry image grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 md:gap-5 items-start">

              {/* Left column */}
              <Parallax speed={0.06} className="space-y-4 md:space-y-5">
                <Reveal variant="mask">
                  <img
                    src={IMG.corp1}
                    alt="Corporate keynote"
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                </Reveal>
                <Reveal variant="mask" delay={120}>
                  <img
                    src={IMG.corp2}
                    alt="Team workshop"
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </Reveal>
              </Parallax>

              {/* Right column — offset top for staggered depth */}
              <Parallax speed={-0.08} className="space-y-4 md:space-y-5 mt-10">
                <Reveal variant="mask">
                  <img
                    src={IMG.corp3}
                    alt="Brand portrait"
                    loading="lazy"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </Reveal>
                <Reveal variant="mask">
                  <img
                    src={IMG.corp4}
                    alt="Office candid"
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover rounded-2xl"
                  />
                </Reveal>
              </Parallax>

            </div>
          </div>

        </div>

        {/* Logo marquee */}
        <div className="mt-20 md:mt-28">
          <Reveal>
            <p className="text-center text-[11px] uppercase tracking-[0.32em] text-background/60">
              Trusted by teams across India
            </p>
          </Reveal>
          <div className="mt-8 relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
            <div className="flex w-max marquee-track">
              {[...logos, ...logos].map((l, i) => (
                <span key={i} className="font-display text-2xl md:text-3xl tracking-[0.25em] text-background/50 px-10 whitespace-nowrap">
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decor blob */}
      <div aria-hidden className="pointer-events-none absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl" />
    </section>
  );
};
