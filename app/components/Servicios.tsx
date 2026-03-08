import SectionHeading from "./SectionHeading";
import ServiceCard from "./ServiceCard";
import { servicios } from "@/data/servicios";

export default function Servicios() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        titulo="Nuestros Servicios"
        subtitulo="Ofrecemos soluciones integrales que cubren todas las necesidades tecnológicas de tu empresa."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio) => (
          <ServiceCard key={servicio.titulo} {...servicio} />
        ))}
      </div>
    </section>
  );
}
