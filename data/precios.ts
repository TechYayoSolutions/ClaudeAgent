export interface Plan {
  nombre: string;
  precio: string;
  periodo: string;
  descripcion: string;
  caracteristicas: string[];
  destacado: boolean;
}

export const planes: Plan[] = [
  {
    nombre: "Starter",
    precio: "$999",
    periodo: "por proyecto",
    descripcion: "Ideal para pequeñas empresas que inician su presencia digital.",
    caracteristicas: [
      "Landing page profesional",
      "Diseño responsive",
      "SEO básico",
      "Formulario de contacto",
      "1 revisión incluida",
    ],
    destacado: false,
  },
  {
    nombre: "Profesional",
    precio: "$2,999",
    periodo: "por proyecto",
    descripcion:
      "Para empresas que buscan una solución completa y escalable.",
    caracteristicas: [
      "Aplicación web completa",
      "Panel de administración",
      "Integraciones API",
      "Base de datos optimizada",
      "3 meses de soporte",
      "Capacitación incluida",
    ],
    destacado: true,
  },
  {
    nombre: "Enterprise",
    precio: "A medida",
    periodo: "cotización personalizada",
    descripcion:
      "Soluciones personalizadas para grandes organizaciones.",
    caracteristicas: [
      "Arquitectura a medida",
      "Equipo dedicado",
      "SLA garantizado",
      "Soporte 24/7",
      "Consultoría estratégica",
      "Escalabilidad ilimitada",
    ],
    destacado: false,
  },
];
