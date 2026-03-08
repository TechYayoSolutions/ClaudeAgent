import { Quote } from "lucide-react";

interface TestimonialCardProps {
  cita: string;
  nombre: string;
  empresa: string;
  cargo: string;
}

export default function TestimonialCard({
  cita,
  nombre,
  empresa,
  cargo,
}: TestimonialCardProps) {
  const iniciales = nombre
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-bg-secondary border border-border rounded-xl p-6 flex flex-col">
      <Quote className="w-8 h-8 text-accent/30 mb-4" />
      <p className="text-text-secondary leading-relaxed mb-6 flex-1">
        &ldquo;{cita}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-alt flex items-center justify-center text-sm font-bold text-black">
          {iniciales}
        </div>
        <div>
          <p className="font-semibold text-sm">{nombre}</p>
          <p className="text-text-secondary text-xs">
            {cargo}, {empresa}
          </p>
        </div>
      </div>
    </div>
  );
}
