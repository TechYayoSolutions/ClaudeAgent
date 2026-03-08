import Header from "./components/Header";
import Hero from "./components/Hero";
import Servicios from "./components/Servicios";
import SobreNosotros from "./components/SobreNosotros";
import Testimonios from "./components/Testimonios";
import Precios from "./components/Precios";
import FAQ from "./components/FAQ";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Servicios />
        <SobreNosotros />
        <Testimonios />
        <Precios />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
