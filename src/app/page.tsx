import Hero from '@/components/sections/Hero';
import TrustBand from '@/components/sections/TrustBand';
import ProductsSection from '@/components/sections/ProductsSection';
import CustomDev from '@/components/sections/CustomDev';
import Cases from '@/components/sections/Cases';
import Process from '@/components/sections/Process';
import ClientArea from '@/components/sections/ClientArea';
import CtaBanner from '@/components/sections/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBand />
      <div className="section-divider"></div>
      <ProductsSection />
      <div className="section-divider"></div>
      <CustomDev />
      <Cases />
      <div className="section-divider"></div>
      <Process />
      <div className="section-divider"></div>
      <ClientArea />
      <CtaBanner />
      
      {/* Toast notification component for form submissions */}
      <div className="toast" id="toast">
        <span className="toast-icon">✅</span>
        <span className="toast-text"></span>
      </div>
    </>
  );
}
