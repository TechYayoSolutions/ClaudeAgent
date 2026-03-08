import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import AnimateOnScroll from "./AnimateOnScroll";
import { servicios } from "@/data/servicios";

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto">
      <AnimateOnScroll>
        <SectionHeading
          titulo="Nuestros Servicios"
          subtitulo="Ofrecemos soluciones integrales que cubren todas las necesidades tecnológicas de tu empresa."
        />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, i) => (
          <AnimateOnScroll key={servicio.titulo} delay={i * 100}>
            <ServiceCard {...servicio} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
