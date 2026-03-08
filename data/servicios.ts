export interface Servicio {
  icono: string;
  titulo: string;
  descripcion: string;
}

export const servicios: Servicio[] = [
  {
    icono: "Code",
    titulo: "Desarrollo de Software",
    descripcion:
      "Creamos soluciones de software a medida que impulsan tu negocio. Aplicaciones web, APIs y sistemas empresariales con las tecnologías más modernas.",
  },
  {
    icono: "Lightbulb",
    titulo: "Consultoría Tecnológica",
    descripcion:
      "Te asesoramos en la transformación digital de tu empresa. Evaluamos tu infraestructura actual y diseñamos la estrategia tecnológica ideal.",
  },
  {
    icono: "ShoppingCart",
    titulo: "E-Commerce",
    descripcion:
      "Diseñamos y desarrollamos tiendas en línea optimizadas para convertir visitantes en clientes. Integraciones de pago, inventario y logística.",
  },
  {
    icono: "Cloud",
    titulo: "Soluciones SaaS",
    descripcion:
      "Construimos plataformas SaaS escalables y seguras. Desde la arquitectura hasta el despliegue, cubrimos todo el ciclo de vida del producto.",
  },
  {
    icono: "Smartphone",
    titulo: "Aplicaciones Móviles",
    descripcion:
      "Desarrollamos aplicaciones nativas y multiplataforma para iOS y Android que ofrecen experiencias de usuario excepcionales.",
  },
  {
    icono: "Bot",
    titulo: "Automatización e IA",
    descripcion:
      "Implementamos soluciones de inteligencia artificial y automatización para optimizar procesos y reducir costos operativos.",
  },
];
