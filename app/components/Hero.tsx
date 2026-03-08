import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-alt/20 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Soluciones{" "}
          <span className="bg-gradient-to-r from-accent to-accent-alt bg-clip-text text-transparent">
            tecnológicas
          </span>{" "}
          para tu negocio
        </h1>
        <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transformamos ideas en productos digitales. Desarrollo de software,
          consultoría, e-commerce y más — todo a la medida de tus necesidades.
        </p>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 bg-accent text-black font-semibold px-8 py-4 rounded-lg hover:bg-accent-hover transition-colors text-lg"
        >
          Empezar ahora
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
