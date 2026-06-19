"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050810]/90 backdrop-blur-xl border-b border-blue-500/15 py-3' : 'py-4'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center justify-between gap-8">
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/assets/logo-reinerdev.webp" alt="ReinerDev" width={42} height={42} className="object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">Reiner<span className="text-blue-400">Dev</span></span>
            </Link>
            
            <ul className="hidden md:flex items-center gap-1">
              <li><Link href="/" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Inicio</Link></li>
              <li><Link href="/#soluciones" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Soluciones</Link></li>
              <li><Link href="/#productos" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Productos</Link></li>
              <li><Link href="/#desarrollo" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Desarrollo personalizado</Link></li>
              <li><Link href="/#nosotros" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Nosotros</Link></li>
              <li><Link href="/#contacto" className="px-3.5 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-white/5 rounded-md transition-all">Contacto</Link></li>
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <Link href="/#cotizacion" className="btn btn-secondary text-sm px-5 py-2.5">Cotizar</Link>
              <button className="btn btn-primary text-sm px-5 py-2.5">Solicitar demo</button>
            </div>

            <button 
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-md hover:bg-white/5 transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menú"
            >
              <span className="block w-5.5 h-0.5 bg-white rounded-sm transition-all"></span>
              <span className="block w-5.5 h-0.5 bg-white rounded-sm transition-all"></span>
              <span className="block w-5.5 h-0.5 bg-white rounded-sm transition-all"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-[70px] left-0 right-0 bg-[#050810]/98 backdrop-blur-xl border-b border-blue-500/15 p-6 z-40 flex flex-col gap-2 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'}`}>
        <Link href="/" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
        <Link href="/#soluciones" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Soluciones</Link>
        <Link href="/#productos" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Productos</Link>
        <Link href="/#desarrollo" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Desarrollo</Link>
        <Link href="/#contacto" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
        <button className="btn btn-primary justify-center w-full mt-2" onClick={() => setIsMobileMenuOpen(false)}>Solicitar demo</button>
      </div>
    </>
  );
}
