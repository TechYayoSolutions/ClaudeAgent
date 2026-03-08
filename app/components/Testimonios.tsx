import SectionHeading from "./SectionHeading";
import TestimonialCard from "./TestimonialCard";
import AnimateOnScroll from "./AnimateOnScroll";
import { testimonios } from "@/data/testimonios";

export default function Testimonios() {
  return (
    <section
      id="testimonios"
      className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto"
    >
      <AnimateOnScroll>
        <SectionHeading
          titulo="Lo que dicen nuestros clientes"
          subtitulo="La satisfacción de nuestros clientes es nuestra mejor carta de presentación."
        />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonios.map((testimonio, i) => (
          <AnimateOnScroll key={testimonio.nombre} delay={i * 100}>
            <TestimonialCard {...testimonio} />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
