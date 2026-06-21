import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-logo">
              <Image src="/assets/logo-reinerdev.webp" alt="ReinerDev" width={38} height={38} />
              <span className="footer-brand-name">Reiner<span>Dev</span></span>
            </Link>
            <p className="footer-tagline">Software y soluciones digitales para empresas que buscan automatizar procesos y crecer de forma sostenible.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/1EDvQSFkB8/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"/></svg>
              </a>
              <a href="https://www.instagram.com/reiner_jz?igsh=MW0zY2pkY2oxODl6cw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://www.linkedin.com/in/reiner-jairo-jiménez-huaman-9234a9388" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://wa.me/51977480721?text=Hola%20ReinerDev%2C%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Productos</h4>
            <ul className="footer-links">
              <li><Link href="/productos/dental">Sistema Odontológico</Link></li>
              <li><Link href="/productos/restaurant">Sistema Restaurante</Link></li>
              <li><Link href="/productos/gym">Sistema Gimnasio</Link></li>
              <li><Link href="/productos/pharmacy">Sistema Farmacéutico</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-links">
              <li><Link href="/#desarrollo">Aplicaciones web</Link></li>
              <li><Link href="/#desarrollo">Sistemas empresariales</Link></li>
              <li><Link href="/#desarrollo">Automatizaciones</Link></li>
              <li><Link href="/#desarrollo">Integraciones</Link></li>
              <li><Link href="/#desarrollo">Páginas web</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-links">
              <li><Link href="/#contacto">Solicitar demo</Link></li>
              <li><Link href="/#desarrollo">Cotizar proyecto</Link></li>
              <li><Link href="/#clientes">Portal clientes</Link></li>
              <li><a href="mailto:contacto@reinerdev.com">contacto@reinerdev.com</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 ReinerDev. Todos los derechos reservados.</p>
          <div className="footer-legal">
            <span className="cursor-pointer hover:text-white transition-colors">Privacidad</span>
            <span className="cursor-pointer hover:text-white transition-colors">Términos</span>
            <span className="cursor-pointer hover:text-white transition-colors">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
