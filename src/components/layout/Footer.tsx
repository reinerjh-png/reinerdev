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
              <a href="#" aria-label="Facebook" title="Facebook">f</a>
              <a href="#" aria-label="Instagram" title="Instagram">in</a>
              <a href="#" aria-label="LinkedIn" title="LinkedIn">li</a>
              <a href="#" aria-label="WhatsApp" title="WhatsApp">w</a>
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
            <Link href="#">Privacidad</Link>
            <Link href="#">Términos</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
