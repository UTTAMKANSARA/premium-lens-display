import { useEffect, useRef, useState, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // 0.1 = subtle, 0.5 = strong (negative = opposite)
  className?: string;
}

export const Parallax = ({ children, speed = 0.15, className = "" }: ParallaxProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    let raf = 0;
    const update = () => {
      const node = ref.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const viewport = window.innerHeight;
      // Distance from viewport center, normalized
      const center = rect.top + rect.height / 2 - viewport / 2;
      setOffset(center * -speed);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform: `translate3d(0, ${offset}px, 0)`, willChange: "transform" }}>
      {children}
    </div>
  );
};
