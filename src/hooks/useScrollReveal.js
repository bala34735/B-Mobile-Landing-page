import { useEffect } from 'react';

const useScrollReveal = (selector = '[data-animate="fade-up"]') => {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.IntersectionObserver) return;

    const elements = Array.from(document.querySelectorAll(selector));
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [selector]);
};

export default useScrollReveal;
