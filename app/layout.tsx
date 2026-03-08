import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techyayosolutions.github.io/ClaudeAgent"),
  title: "TechYayo Solutions | Agencia de Tecnología",
  description:
    "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
  openGraph: {
    title: "TechYayo Solutions | Agencia de Tecnología",
    description:
      "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
    url: "https://techyayosolutions.github.io/ClaudeAgent",
    siteName: "TechYayo Solutions",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TechYayo Solutions | Agencia de Tecnología",
    description:
      "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TechYayo Solutions",
  url: "https://techyayosolutions.github.io/ClaudeAgent",
  description:
    "Soluciones tecnológicas a medida: desarrollo de software, consultoría, e-commerce, SaaS y más.",
  sameAs: [
    "https://github.com/TechYayoSolutions",
    "https://linkedin.com/company/techyayo-solutions",
    "https://twitter.com/TechYayoSolutions",
    "https://instagram.com/techyayosolutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-accent focus:text-black focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Saltar al contenido principal
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {/* Google Analytics — reemplaza G-XXXXXXXXXX con tu Measurement ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');`}
        </Script>
      </body>
    </html>
  );
}
