import { Check } from "lucide-react";

interface PricingCardProps {
  nombre: string;
  precio: string;
  periodo: string;
  descripcion: string;
  caracteristicas: string[];
  destacado: boolean;
}

export default function PricingCard({
  nombre,
  precio,
  periodo,
  descripcion,
  caracteristicas,
  destacado,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl p-8 border transition-colors duration-300 ${
        destacado
          ? "border-accent bg-bg-secondary scale-105 shadow-lg shadow-accent/10"
          : "border-border bg-bg-secondary hover:border-accent/30"
      }`}
    >
      {destacado && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-accent to-accent-alt text-white text-sm font-semibold px-4 py-1 rounded-full">
          Popular
        </span>
      )}
      <h3 className="text-xl font-bold mb-2">{nombre}</h3>
      <p className="text-text-secondary text-sm mb-4">{descripcion}</p>
      <div className="mb-6">
        <span className="text-4xl font-bold">{precio}</span>
        <span className="text-text-secondary ml-2 text-sm">/ {periodo}</span>
      </div>
      <ul className="space-y-3 mb-8">
        {caracteristicas.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
            <span className="text-text-secondary">{item}</span>
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className={`block text-center py-3 rounded-lg font-semibold transition-colors duration-300 ${
          destacado
            ? "bg-accent text-black hover:bg-accent-hover"
            : "border border-accent text-accent hover:bg-accent/10"
        }`}
      >
        Contactar
      </a>
    </div>
  );
}
