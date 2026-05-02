import { ArrowRight, Camera } from "lucide-react";
import { Reveal } from "./Reveal";
import { Parallax } from "./Parallax";
import { IMG } from "./images";

const Tile = ({
  src,
  alt,
  className,
  speed = 0.08,
  delay = 0,
}: {
  src: string;
  alt: string;
  className: string;
  speed?: number;
  delay?: number;
}) => (
  <Reveal variant="mask" className={className} delay={delay}>
    <Parallax speed={speed} className="h-full w-full">
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-card group">
        <img
          src={src}
          alt={alt}
          loading="eager"
          className="h-full w-full object-cover img-zoom"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent opacity-60" />
      </div>
    </Parallax>
  </Reveal>
);

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Soft floating decor */}
      <div aria-hidden className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-peach/40 blur-3xl animate-float-slow" />
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl animate-float" />

      <div className="container relative">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-5 relative z-10">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                <Camera size={14} className="text-primary" />
                Indian event photographer · Est. 2017
              </span>
            </Reveal>

            <h1 className="mt-6 font-display text-[14vw] sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-balance">
              <Reveal as="span" className="block">Stories told</Reveal>
              <Reveal as="span" className="block italic text-primary" delay={120}>in light.</Reveal>
              <Reveal as="span" className="block" delay={240}>and stillness.</Reveal>
            </h1>

            <Reveal delay={380}>
              <p className="mt-7 max-w-md text-base md:text-lg text-muted-foreground text-pretty">
                Cinematic photography for Indian weddings, birthday celebrations,
                baby showers and corporate events — capturing moments that feel
                lived‑in and timeless.
              </p>
            </Reveal>

            <Reveal delay={520}>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background pl-6 pr-2 py-2 text-sm tracking-wide hover:bg-primary transition-colors duration-500"
                >
                  View Portfolio
                  <span className="grid place-items-center h-9 w-9 rounded-full bg-background text-foreground transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowRight size={16} />
                  </span>
                </a>
                <a
                  href="#contact"
                  className="link-underline text-sm tracking-wide text-foreground/90"
                >
                  Contact Now →
                </a>
              </div>
            </Reveal>

            <Reveal delay={680}>
              <div className="mt-12 flex items-center gap-5 text-xs text-muted-foreground">
                <div className="flex -space-x-2">
                  {[IMG.client1, IMG.client2, IMG.client3].map((s) => (
                    <img key={s} src={s} alt="" className="h-8 w-8 rounded-full object-cover border-2 border-background" />
                  ))}
                </div>
                <span>Loved by 350+ couples & brands across India</span>
              </div>
            </Reveal>
          </div>

          {/* Bento */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 md:gap-4 h-[520px] sm:h-[620px] lg:h-[640px]">
              <Tile src={IMG.heroCouple} alt="Indian wedding couple portrait" className="col-span-4 row-span-4" speed={0.1} />
              <Tile src={IMG.heroBride} alt="Bride detail" className="col-span-2 row-span-3" speed={-0.06} delay={80} />
              <Tile src={IMG.heroDecor} alt="Floral decor" className="col-span-2 row-span-3" speed={0.18} delay={160} />
              <Tile src={IMG.heroBaby} alt="Baby shower candid" className="col-span-2 row-span-2" speed={-0.1} delay={220} />
              <Tile src={IMG.heroCorporate} alt="Corporate event" className="col-span-2 row-span-2" speed={0.08} delay={280} />
              <Tile src={IMG.heroBirthday} alt="Birthday celebration" className="col-span-2 row-span-2" speed={-0.14} delay={340} />
            </div>

            {/* Floating badge */}
            <Reveal delay={700}>
              <div className="absolute -bottom-6 -left-4 md:-left-10 hidden sm:flex items-center gap-3 rounded-full bg-background/90 backdrop-blur px-5 py-3 shadow-warm border border-border/60 animate-float">
                <span className="grid place-items-center h-9 w-9 rounded-full bg-primary text-primary-foreground font-display text-lg">★</span>
                <div className="text-xs leading-tight">
                  <div className="font-medium text-foreground">Award‑winning</div>
                  <div className="text-muted-foreground">Wedding Sutra Featured</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
