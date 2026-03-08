import SectionHeading from "./SectionHeading";
import PricingCard from "./PricingCard";
import { planes } from "@/data/precios";

export default function Precios() {
  return (
    <section id="precios" className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto">
      <SectionHeading
        titulo="Planes y Precios"
        subtitulo="Soluciones flexibles que se adaptan al tamaño y necesidades de tu negocio."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {planes.map((plan) => (
          <PricingCard key={plan.nombre} {...plan} />
        ))}
      </div>
    </section>
  );
}
