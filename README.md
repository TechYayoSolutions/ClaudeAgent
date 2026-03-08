# TechYayo Solutions

Landing page profesional para **TechYayo Solutions**, una agencia de tecnología. Construida con Next.js (App Router), TypeScript y Tailwind CSS v4 con tema oscuro.

## Vista previa

Visita la página en: [https://techyayosolutions.github.io/ClaudeAgent/](https://techyayosolutions.github.io/ClaudeAgent/)

## Tech Stack

- **Next.js 16** — App Router con export estático
- **TypeScript** — Tipado estricto
- **Tailwind CSS v4** — Tema oscuro con variables CSS
- **lucide-react** — Iconos

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000/ClaudeAgent](http://localhost:3000/ClaudeAgent) en tu navegador.

## Build de producción

```bash
npm run build
```

Los archivos estáticos se generan en la carpeta `out/`.

## Deploy

El deploy a GitHub Pages es automático mediante GitHub Actions al hacer push a `main`. El workflow se encuentra en `.github/workflows/deploy.yml`.

### Requisitos para activar GitHub Pages

1. Ve a **Settings > Pages** en el repositorio
2. En **Source**, selecciona **GitHub Actions**
3. Haz push o merge a `main` y el deploy se ejecutará automáticamente
