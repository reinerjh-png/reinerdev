import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ScrollObserver from "@/components/ui/ScrollObserver";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import DemoModal from "@/components/ui/DemoModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReinerDev — Software SaaS para empresas que buscan crecer",
  description: "Desarrollamos soluciones digitales que ayudan a empresas a automatizar procesos, mejorar su productividad y crecer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
        style={{
          '--font-primary': `var(${inter.variable}), 'Inter', sans-serif`,
          '--font-display': `var(${outfit.variable}), 'Outfit', sans-serif`,
        } as React.CSSProperties}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <WhatsAppFloat />
        <ScrollObserver />
        <DemoModal />
      </body>
    </html>
  );
}
