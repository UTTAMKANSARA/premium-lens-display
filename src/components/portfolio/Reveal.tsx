import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "section" | "li" | "h1" | "h2" | "h3" | "p";
  variant?: "fade" | "mask";
}

export const Reveal = ({ children, className = "", delay = 0, as: Tag = "div", variant = "fade" }: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    // Reveal immediately if already in view on mount (avoids stuck hidden state)
    const rect = node.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px 10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const base = variant === "mask" ? "reveal-mask" : "reveal";
  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  const props = {
    ref: (node: HTMLElement | null) => {
      ref.current = node;
    },
    className: `${base} ${visible ? "is-visible" : ""} ${className}`,
    style,
  };

  switch (Tag) {
    case "span":
      return <span {...props}>{children}</span>;
    case "section":
      return <section {...props}>{children}</section>;
    case "li":
      return <li {...props}>{children}</li>;
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "p":
      return <p {...props}>{children}</p>;
    default:
      return <div {...props}>{children}</div>;
  }
};
