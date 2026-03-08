# CLAUDE.md

Este archivo proporciona orientación para asistentes de IA que trabajen con el repositorio ClaudeAgent.

## Descripción del Proyecto

**TechYayo Solutions** — Landing page profesional para una agencia de tecnología. Construida con Next.js (App Router), TypeScript y Tailwind CSS v4 con tema oscuro profesional. Todo el contenido está en español.

## Estructura del Repositorio

```
ClaudeAgent/
├── app/
│   ├── layout.tsx                 # Layout raíz: lang="es", metadata SEO
│   ├── page.tsx                   # Página principal, compone todas las secciones
│   ├── globals.css                # Tailwind v4 + tema oscuro (variables CSS)
│   └── components/
│       ├── Header.tsx             # Navbar fija con menú hamburguesa móvil (client)
│       ├── Hero.tsx               # Banner principal con CTA
│       ├── Servicios.tsx          # Grid de servicios
│       ├── SobreNosotros.tsx      # Sobre la empresa + estadísticas
│       ├── Testimonios.tsx        # Tarjetas de testimonios
│       ├── Precios.tsx            # Planes de precios (3 tiers)
│       ├── FAQ.tsx                # Preguntas frecuentes con acordeón (client)
│       ├── Contacto.tsx           # Formulario de contacto con validación (client)
│       ├── Footer.tsx             # Pie de página
│       ├── SectionHeading.tsx     # Encabezado reutilizable de sección
│       ├── ServiceCard.tsx        # Tarjeta de servicio con icono
│       ├── PricingCard.tsx        # Tarjeta de plan de precios
│       ├── TestimonialCard.tsx    # Tarjeta de testimonio
│       └── AccordionItem.tsx      # Item de acordeón (client)
├── data/
│   ├── servicios.ts               # Contenido de servicios
│   ├── testimonios.ts             # Contenido de testimonios
│   ├── precios.ts                 # Contenido de planes
│   └── faq.ts                     # Preguntas y respuestas
├── public/                        # Archivos estáticos
├── package.json
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── CLAUDE.md                      # Este archivo
└── README.md
```

## Configuración del Entorno de Desarrollo

- **Runtime**: Node.js (v18+)
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4 (configuración en `globals.css` con `@theme inline`)
- **Iconos**: lucide-react

### Instalación

```bash
npm install
```

## Comandos Comunes

```bash
npm run dev        # Servidor de desarrollo en http://localhost:3000
npm run build      # Build de producción
npm start          # Servir build de producción
npm run lint       # Ejecutar ESLint
```

## Arquitectura y Convenciones

### Componentes

- **Server Components** por defecto (la mayoría de secciones)
- **`"use client"`** solo cuando hay interactividad: Header (menú móvil), FAQ (acordeón), Contacto (formulario), AccordionItem
- Los datos estáticos viven en `data/` separados de los componentes
- Los componentes reutilizables (cards, headings) reciben props tipadas con interfaces TypeScript

### Tema oscuro

La paleta de colores está definida como variables CSS en `globals.css` y expuesta a Tailwind via `@theme inline`:

| Clase Tailwind | Color | Uso |
|---|---|---|
| `bg-background` | `#0A0A0F` | Fondo principal |
| `bg-bg-secondary` | `#12121A` | Tarjetas y superficies |
| `bg-bg-tertiary` | `#1A1A2E` | Hover states |
| `text-foreground` | `#F0F0F5` | Texto principal |
| `text-text-secondary` | `#A0A0B8` | Texto secundario |
| `text-accent` / `bg-accent` | `#00D4FF` | Acento cyan |
| `bg-accent-alt` | `#7B2FFF` | Acento violeta (gradientes) |
| `border-border` | `#2A2A3E` | Bordes |

### Navegación

- Smooth scroll nativo via `html { scroll-behavior: smooth; }`
- Cada sección usa `scroll-mt-20` para compensar la navbar fija
- Links de navegación son anchors: `#servicios`, `#nosotros`, `#testimonios`, `#precios`, `#faq`, `#contacto`

### Formulario de contacto

- Validación client-side (nombre, email, mensaje requeridos)
- No tiene backend configurado — placeholder listo para integrar Formspree, API route, etc.

## Estilo de Código y Convenciones

- Código y nombres de variables/funciones en inglés para keywords, pero contenido visible en español
- Props de componentes tipadas con interfaces TypeScript
- Nombres de componentes y archivos en PascalCase
- Datos estáticos exportados como arrays tipados desde `data/`

### Convenciones de Git

- **Rama principal**: `main`
- Mensajes de commit concisos y descriptivos
- Tiempo presente en mensajes de commit

## Pruebas

Aún no se ha configurado un framework de pruebas.

## CI/CD

Aún no se han configurado pipelines de CI/CD.

## Solución de Problemas

- **Error de Google Fonts en build**: El entorno no tiene acceso externo a Google Fonts. Se usa fuente del sistema como fallback. Si necesitas Geist, descárgala localmente y usa `next/font/local`.
