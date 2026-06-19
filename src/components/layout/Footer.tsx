import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/15 py-16 bg-[#050810] relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
              <Image src="/assets/logo-reinerdev.webp" alt="ReinerDev" width={42} height={42} className="object-contain" />
              <span className="font-display text-xl font-extrabold tracking-tight">Reiner<span className="text-blue-400">Dev</span></span>
            </Link>
            <p className="text-[15px] text-slate-400 leading-relaxed mb-8 max-w-sm">Software y soluciones digitales para empresas que buscan automatizar, escalar y crecer.</p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-blue-500/15 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/30 transition-all" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-blue-500/15 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/30 transition-all" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-blue-500/15 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:bg-white/10 hover:border-blue-500/30 transition-all" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Productos SaaS</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/productos/dental" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sistema Odontológico</Link></li>
              <li><Link href="/productos/restaurant" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sistema para Restaurantes</Link></li>
              <li><Link href="/productos/gym" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sistema para Gimnasios</Link></li>
              <li><Link href="/productos/pharmacy" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sistema Farmacéutico</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Servicios</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/#desarrollo" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Desarrollo Web</Link></li>
              <li><Link href="/#desarrollo" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sistemas Empresariales</Link></li>
              <li><Link href="/#desarrollo" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Automatizaciones</Link></li>
              <li><Link href="/#desarrollo" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Integraciones de API</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="flex flex-col gap-3.5">
              <li><Link href="/#nosotros" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Sobre nosotros</Link></li>
              <li><Link href="/#casos" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Casos de éxito</Link></li>
              <li><Link href="/#contacto" className="text-sm text-slate-400 hover:text-blue-400 transition-colors">Contacto</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© 2026 ReinerDev. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Política de Privacidad</a>
            <a href="#" className="text-sm text-slate-500 hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
