"use client";

import { ChevronDown } from "lucide-react";

interface AccordionItemProps {
  pregunta: string;
  respuesta: string;
  abierto: boolean;
  onToggle: () => void;
}

export default function AccordionItem({
  pregunta,
  respuesta,
  abierto,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-bg-tertiary transition-colors"
      >
        <span className="font-semibold pr-4">{pregunta}</span>
        <ChevronDown
          className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${
            abierto ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          abierto ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="px-5 pb-5 text-text-secondary leading-relaxed">
          {respuesta}
        </p>
      </div>
    </div>
  );
}
