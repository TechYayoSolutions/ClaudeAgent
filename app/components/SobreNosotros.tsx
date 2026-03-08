import { Target, Users, Zap } from "lucide-react";
import SectionHeading from "./SectionHeading";
import AnimateOnScroll from "./AnimateOnScroll";

const stats = [
  { icono: Target, valor: "50+", label: "Proyectos entregados" },
  { icono: Users, valor: "30+", label: "Clientes satisfechos" },
  { icono: Zap, valor: "5+", label: "Años de experiencia" },
];

export default function SobreNosotros() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-20 py-24 px-4 max-w-7xl mx-auto"
    >
      <AnimateOnScroll>
        <SectionHeading titulo="Sobre Nosotros" />
      </AnimateOnScroll>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <AnimateOnScroll>
          <div>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              En <span className="text-accent font-semibold">TechYayo Solutions</span>,
              somos un equipo apasionado por la tecnología y la innovación. Nos
              especializamos en crear soluciones digitales que impulsan el
              crecimiento de empresas de todos los tamaños.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Desde startups hasta grandes corporaciones, trabajamos codo a codo
              con nuestros clientes para entender sus desafíos y entregar
              productos que generan impacto real.
            </p>
            <p className="text-text-secondary text-lg leading-relaxed">
              Nuestra filosofía es simple: código limpio, comunicación
              transparente y resultados medibles.
            </p>
          </div>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 150}>
              <div className="bg-bg-secondary border border-border rounded-xl p-6 text-center">
                <stat.icono className="w-8 h-8 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold mb-1">{stat.valor}</p>
                <p className="text-text-secondary text-sm">{stat.label}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
