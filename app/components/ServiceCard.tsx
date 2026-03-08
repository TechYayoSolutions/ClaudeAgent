import {
  Code,
  Lightbulb,
  ShoppingCart,
  Cloud,
  Smartphone,
  Bot,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code,
  Lightbulb,
  ShoppingCart,
  Cloud,
  Smartphone,
  Bot,
};

interface ServiceCardProps {
  icono: string;
  titulo: string;
  descripcion: string;
}

export default function ServiceCard({
  icono,
  titulo,
  descripcion,
}: ServiceCardProps) {
  const Icon = iconMap[icono] || Code;

  return (
    <div className="bg-bg-secondary border border-border rounded-xl p-6 hover:border-accent/50 transition-colors duration-300 group">
      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{titulo}</h3>
      <p className="text-text-secondary leading-relaxed">{descripcion}</p>
    </div>
  );
}
