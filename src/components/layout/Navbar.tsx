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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar" role="navigation" aria-label="Menú principal">
        <div className="container">
          <div className="navbar-inner">
            <Link href="/" className="navbar-logo" aria-label="ReinerDev - Inicio">
              <Image src="/assets/logo-reinerdev.webp" alt="ReinerDev logo" width={42} height={42} />
              <span className="navbar-logo-text">Reiner<span>Dev</span></span>
            </Link>

            <ul className={`navbar-nav hidden lg:flex`} role="menubar">
              <li role="none"><Link href="/" role="menuitem" className="active">Inicio</Link></li>
              <li role="none"><Link href="/#soluciones" role="menuitem">Soluciones</Link></li>
              <li role="none"><Link href="/#productos" role="menuitem">Productos</Link></li>
              <li role="none"><Link href="/#desarrollo" role="menuitem">Desarrollo personalizado</Link></li>
              <li role="none"><Link href="/#nosotros" role="menuitem">Nosotros</Link></li>
              <li role="none"><Link href="/#contacto" role="menuitem">Contacto</Link></li>
            </ul>

            <div className="navbar-actions hidden lg:flex">
              <Link href="/#desarrollo" className="btn btn-secondary btn-sm" id="nav-btn-quote">Cotizar</Link>
              <Link href="?modal=demo" scroll={false} className="btn btn-primary btn-sm" id="nav-btn-demo">Solicitar demo</Link>
            </div>

            <button 
              className="navbar-toggle lg:hidden flex" 
              id="menu-toggle" 
              aria-label="Abrir menú móvil" 
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed top-[72px] left-0 right-0 bg-[#050810]/98 backdrop-blur-xl border-b border-blue-500/15 p-6 z-40 flex flex-col gap-2 transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'} lg:hidden`}>
        <Link href="/" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Inicio</Link>
        <Link href="/#soluciones" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Soluciones</Link>
        <Link href="/#productos" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Productos</Link>
        <Link href="/#desarrollo" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Desarrollo personalizado</Link>
        <Link href="/#nosotros" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</Link>
        <Link href="/#contacto" className="px-4 py-3 text-[15px] font-medium text-slate-400 hover:text-white hover:bg-white/5 hover:border-blue-500/15 border border-transparent rounded-lg transition-all" onClick={() => setIsMobileMenuOpen(false)}>Contacto</Link>
        <div className="flex flex-col gap-3 mt-4">
          <Link href="/#desarrollo" className="btn btn-secondary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>Cotizar</Link>
          <Link href="?modal=demo" scroll={false} className="btn btn-primary w-full justify-center" onClick={() => setIsMobileMenuOpen(false)}>Solicitar demo</Link>
        </div>
      </div>
    </>
  );
}
