"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import AccordionItem from "./AccordionItem";
import { preguntas } from "@/data/faq";

export default function FAQ() {
  const [indiceAbierto, setIndiceAbierto] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-20 py-24 px-4 max-w-3xl mx-auto">
      <SectionHeading
        titulo="Preguntas Frecuentes"
        subtitulo="Respuestas a las dudas más comunes sobre nuestros servicios."
      />
      <div className="space-y-4">
        {preguntas.map((pregunta, i) => (
          <AccordionItem
            key={pregunta.pregunta}
            pregunta={pregunta.pregunta}
            respuesta={pregunta.respuesta}
            abierto={indiceAbierto === i}
            onToggle={() =>
              setIndiceAbierto(indiceAbierto === i ? null : i)
            }
          />
        ))}
      </div>
    </section>
  );
}
