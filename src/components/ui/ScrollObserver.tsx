"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    // Pequeño delay para que React termine de pintar el nuevo contenido en el DOM
    const timeoutId = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              obs.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "0px", threshold: 0.1 }
      );

      // Observar todos los elementos animados, incluyendo los que ya tienen in-view
      // para no romper los ya visibles
      const elements = document.querySelectorAll(".animate-fade-up");
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeoutId);
    // Se re-ejecuta en cada cambio de ruta (pathname)
  }, [pathname]);

  return null;
}
