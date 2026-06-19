"use client";

import { useEffect } from "react";

export default function ScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-fade-up');
    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return null;
}
