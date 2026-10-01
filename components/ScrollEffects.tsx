"use client";
import { useEffect, useRef } from "react";

// Three small scroll touches: elements fade in as you reach them, the header gets a
// shadow once you scroll, and a thin bar shows how far down the page you are.
// People who prefer reduced motion skip the fade-in.
export default function ScrollEffects() {
  const bar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const header = document.querySelector("header");
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
        header?.classList.toggle("shadow-md", window.scrollY > 8);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    let io: IntersectionObserver | undefined;
    if (!reduce) {
      io = new IntersectionObserver(
        (entries) => entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.remove("rv-hide"); io?.unobserve(e.target); }
        }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
      );
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        if (el.getBoundingClientRect().top > window.innerHeight * 0.92) { el.classList.add("rv-hide"); io?.observe(el); }
      });
    }
    return () => { window.removeEventListener("scroll", onScroll); io?.disconnect(); };
  }, []);
  return <div ref={bar} aria-hidden="true" className="fixed left-0 top-0 z-50 h-[3px] w-full origin-left scale-x-0 bg-gold" />;
}
