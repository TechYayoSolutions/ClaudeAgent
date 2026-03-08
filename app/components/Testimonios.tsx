import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import { testimonios } from "@/data/testimonios";

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto"
    >
      <SectionHeading
        titulo="Lo que dicen nuestros clientes"
        subtitulo="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonios.map((testimonio) => (
          <TestimonialCard key={testimonio.nombre} {...testimonio} />
        ))}
      </div>
    </section>
  );
}
