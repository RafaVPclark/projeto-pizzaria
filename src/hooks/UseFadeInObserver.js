import { useEffect } from "react";

export default function useFadeInObserver() {
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");

    const appearOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    // Cleanup para não vazar memória
    return () => {
      faders.forEach((fader) => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);
}
