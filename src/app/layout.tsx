import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <button className="fixed bottom-8 right-8 w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white text-xl z-50 backdrop-blur opacity-0 pointer-events-none transition-all hover:bg-white/20 hover:-translate-y-1" id="back-to-top" aria-label="Volver arriba">↑</button>
      </body>
    </html>
  );
}
