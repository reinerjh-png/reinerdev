"use client";

import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      aria-label="Volver arriba"
      className="fixed bottom-8 right-8 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl z-50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'rgba(37, 99, 235, 0.8)',
        border: '1px solid rgba(59, 130, 246, 0.4)',
        boxShadow: '0 4px 20px rgba(37, 99, 235, 0.3)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'all' : 'none',
      }}
    >
      ↑
    </button>
  );
}
