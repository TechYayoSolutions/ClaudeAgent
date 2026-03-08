export interface PreguntaFrecuente {
  pregunta: string;
  respuesta: string;
}

export const preguntas: PreguntaFrecuente[] = [
  {
    pregunta: "¿Cuánto tiempo toma desarrollar un proyecto?",
    respuesta:
      "El tiempo varía según la complejidad. Una landing page puede estar lista en 1-2 semanas, mientras que una aplicación web completa puede tomar de 2 a 4 meses. Siempre proporcionamos un cronograma detallado antes de iniciar.",
  },
  {
    pregunta: "¿Qué tecnologías utilizan?",
    respuesta:
      "Trabajamos con las tecnologías más modernas del mercado: React, Next.js, Node.js, Python, TypeScript, bases de datos SQL y NoSQL, servicios en la nube (AWS, GCP, Azure) y herramientas de IA.",
  },
  {
    pregunta: "¿Ofrecen soporte después de la entrega?",
    respuesta:
      "Sí, todos nuestros planes incluyen un periodo de soporte post-entrega. Además, ofrecemos planes de mantenimiento continuo para garantizar que tu solución siga funcionando de manera óptima.",
  },
  {
    pregunta: "¿Cómo es el proceso de trabajo?",
    respuesta:
      "Seguimos una metodología ágil: primero entendemos tus necesidades, luego diseñamos la solución, desarrollamos con entregas incrementales, y finalmente realizamos pruebas exhaustivas antes del lanzamiento.",
  },
  {
    pregunta: "¿Pueden trabajar con mi equipo de desarrollo existente?",
    respuesta:
      "Por supuesto. Podemos integrarnos con tu equipo como consultores, liderar el desarrollo, o trabajar en colaboración directa según lo que mejor se adapte a tu situación.",
  },
];
