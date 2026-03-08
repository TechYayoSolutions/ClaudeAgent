export interface Testimonio {
  cita: string;
  nombre: string;
  empresa: string;
  cargo: string;
}

export const testimonios: Testimonio[] = [
  {
    cita: "TechYayo Solutions transformó por completo nuestra presencia digital. Su equipo entregó un sistema que superó todas nuestras expectativas.",
    nombre: "María González",
    empresa: "Retail Plus",
    cargo: "Directora de Operaciones",
  },
  {
    cita: "La consultoría tecnológica que recibimos nos permitió reducir costos operativos en un 40%. Son verdaderos expertos en lo que hacen.",
    nombre: "Carlos Ramírez",
    empresa: "LogiTech Corp",
    cargo: "CEO",
  },
  {
    cita: "Nuestra tienda en línea pasó de 100 a 5,000 pedidos mensuales gracias a la plataforma que desarrollaron. Increíble trabajo.",
    nombre: "Ana Martínez",
    empresa: "Moda Urbana",
    cargo: "Fundadora",
  },
  {
    cita: "El equipo de TechYayo entendió nuestras necesidades desde el primer día. La app móvil que crearon es intuitiva y potente.",
    nombre: "Roberto Silva",
    empresa: "HealthTrack",
    cargo: "CTO",
  },
];
