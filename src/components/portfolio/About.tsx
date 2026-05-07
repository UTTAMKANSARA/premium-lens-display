import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { Counter } from "./Counter";
import { IMG } from "./images";

const stats = [
  { value: 5, suffix: "+", label: "Years behind the lens" },
  { value: 100, suffix: "+", label: "Events covered" },
  { value: 200, suffix: "+", label: "Happy clients" },
];

export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 overflow-hidden">
      <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <div className="lg:col-span-5 relative">
          <Parallax speed={0.08}>
            <div className="relative">
              <div aria-hidden className="absolute -inset-4 md:-inset-6 rounded-2xl border-2 border-primary/60 translate-x-4 translate-y-4" />
              <Reveal variant="mask">
                <img
                  src={IMG.portrait}
                  alt="Portrait of photographer Aarav Kapoor"
                  loading="lazy"
                  className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-warm"
                />
              </Reveal>
            </div>
          </Parallax>

          <Reveal delay={300}>
            <div className="absolute -bottom-6 -right-3 md:-right-6 bg-background/95 backdrop-blur rounded-2xl px-5 py-4 shadow-card border border-border/60 max-w-[200px] animate-float">
              <p className="font-display text-sm italic leading-snug">
                "I don't pose moments. I wait for them."
              </p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">— VISHAL</p>
            </div>
          </Reveal>
        </div>

        {/* Copy */}
        <div className="lg:col-span-7">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.32em] text-primary">About the photographer</span>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-5 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight">
              A quiet eye for <em className="italic text-primary">loud, beautiful</em> Indian celebrations.
            </h2>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 space-y-5 text-muted-foreground text-pretty max-w-xl">
              <p>
                I'm Vishal, a udaipur‑based photographer with eight years of
                documenting weddings, intimate family rituals, and brand stories
                across India. My work sits between heirloom‑editorial and
                candid — restrained, warm, and unmistakably you.
              </p>
              <p>
                From a haldi at sunrise to a boardroom keynote, every frame is
                made with intention. Less performance, more presence.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-3 gap-6 md:gap-10 border-t border-border/60 pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={120 * i}>
                <div>
                  <div className="font-display text-5xl md:text-6xl text-foreground tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
