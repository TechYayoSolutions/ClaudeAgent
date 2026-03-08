import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Testimonios from "./components/Testimonios";
import Precios from "./components/Precios";
import FAQ from "./components/FAQ";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import ChatBot from "./components/ChatBot";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Testimonios />
        <Precios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
      <ChatBot />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
