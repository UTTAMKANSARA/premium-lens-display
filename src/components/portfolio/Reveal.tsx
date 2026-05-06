import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span" | "section" | "li" | "h1" | "h2" | "h3" | "p";
  variant?: "fade" | "mask";
}

export const Reveal = ({
  children,
  className = "",
  delay = 0,
  as: Tag = "div",
  variant = "fade",
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      // Large bottom rootMargin: fires 200px before the element scrolls into view.
      // This gives the 1.1s clip-path transition time to complete before the user
      // actually sees the element. Also handles scroll-restoration timing: even if
      // the browser restores scroll after this observer is set up, the generous
      // margin ensures elements already on-screen are immediately revealed.
      { threshold: 0, rootMargin: "0px 0px 200px 0px" }
    );

    obs.observe(node);

    // Fallback: after scroll restoration settles (≈300 ms), do a manual check.
    // This handles cases where the IntersectionObserver initial callback fires
    // before the browser finishes repositioning the scroll.
    const fallback = setTimeout(() => {
      const rect = node.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top < vh + 200 && rect.bottom > 0) {
        setVisible(true);
        obs.unobserve(node);
      }
    }, 300);

    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const base = variant === "mask" ? "reveal-mask" : "reveal";
  const style: CSSProperties = { transitionDelay: `${delay}ms` };
  const setNode = (node: HTMLElement | null) => {
    ref.current = node;
  };

  const props = {
    className: `${base} ${visible ? "is-visible" : ""} ${className}`,
    style,
  };

  switch (Tag) {
    case "span":
      return <span ref={setNode} {...props}>{children}</span>;
    case "section":
      return <section ref={setNode} {...props}>{children}</section>;
    case "li":
      return <li ref={setNode} {...props}>{children}</li>;
    case "h1":
      return <h1 ref={setNode} {...props}>{children}</h1>;
    case "h2":
      return <h2 ref={setNode} {...props}>{children}</h2>;
    case "h3":
      return <h3 ref={setNode} {...props}>{children}</h3>;
    case "p":
      return <p ref={setNode} {...props}>{children}</p>;
    default:
      return <div ref={setNode} {...props}>{children}</div>;
  }
};
