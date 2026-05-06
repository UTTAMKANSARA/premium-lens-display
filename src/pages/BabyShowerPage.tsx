import { Link } from "react-router-dom";
import { ArrowLeft, Baby, Camera, Sparkles } from "lucide-react";
import { Reveal } from "@/components/portfolio/Reveal";
import { Parallax } from "@/components/portfolio/Parallax";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { IMG } from "@/components/portfolio/images";

const gallery = [
  { src: IMG.baby1, alt: "Family portrait", aspect: "aspect-[4/5]" },
  { src: IMG.baby2, alt: "Baby candid", aspect: "aspect-square" },
  { src: IMG.baby3, alt: "Shower decorations", aspect: "aspect-[3/4]" },
  { src: IMG.baby4, alt: "Tender moments", aspect: "aspect-[4/5]" },
  { src: IMG.baby5, alt: "Celebration joy", aspect: "aspect-square" },
  { src: IMG.baby6, alt: "Little details", aspect: "aspect-[3/4]" },
];

const highlights = [
  { icon: Baby, label: "60+ stories captured" },
  { icon: Camera, label: "Soft, natural tones" },
  { icon: Sparkles, label: "At-home & venue shoots" },
];

const BabyShowerPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      {/* Hero banner */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end overflow-hidden">
        <img
          src={IMG.catBaby}
          alt="Baby shower photography hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />

        <div className="container relative z-10 pb-16 md:pb-20 text-background">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-background/80 hover:text-background transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight max-w-3xl">
              Baby Shower <em className="italic text-primary">Photography</em>
            </h1>
          </Reveal>
          <Reveal delay={260}>
            <p className="mt-5 max-w-lg text-background/75 text-pretty text-lg">
              Delicate, warm, and wonderfully candid. We capture the glow, the
              laughter, and the tenderness of welcoming new life.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="py-12 border-b border-border/60 bg-cream-deep/50">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 100}>
                <div className="flex items-center gap-3">
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-primary/10 text-primary">
                    <h.icon size={18} />
                  </span>
                  <span className="text-sm tracking-wide text-muted-foreground">{h.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <Reveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="text-xs uppercase tracking-[0.32em] text-primary">Gallery</span>
                <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-tight">
                  Tiny miracles, timeless frames.
                </h2>
              </div>
            </div>
          </Reveal>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-5 space-y-4 md:space-y-5">
            {gallery.map((img, i) => (
              <Reveal key={img.src} variant="mask" delay={i * 70}>
                <Parallax speed={i % 2 === 0 ? 0.04 : -0.04}>
                  <div className="group relative overflow-hidden rounded-2xl shadow-card break-inside-avoid">
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className={`w-full ${img.aspect} object-cover img-zoom`}
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-700" />
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container text-center">
          <Reveal>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight">
              Celebrating a new <em className="italic text-primary">beginning</em>?
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-5 text-background/70 max-w-md mx-auto">
              Let's preserve every precious detail of your baby shower in warm, natural light.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm tracking-wide hover:bg-secondary hover:text-foreground transition-colors duration-500"
              >
                Book a session
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-background/25 px-7 py-3.5 text-sm tracking-wide hover:bg-background/10 transition-colors duration-500"
              >
                <ArrowLeft size={14} />
                Back to Home
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BabyShowerPage;
