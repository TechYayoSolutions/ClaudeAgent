import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechYayo Solutions | Agencia de Tecnología",
  description:
    "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
  openGraph: {
    title: "TechYayo Solutions | Agencia de Tecnología",
    description:
      "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
