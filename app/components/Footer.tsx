import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Precios", href: "#precios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { icono: Github, href: "https://github.com/TechYayoSolutions", label: "GitHub" },
  { icono: Linkedin, href: "https://linkedin.com/company/techyayo-solutions", label: "LinkedIn" },
  { icono: Twitter, href: "https://twitter.com/TechYayoSolutions", label: "Twitter" },
  { icono: Instagram, href: "https://instagram.com/techyayosolutions", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <p className="text-xl font-bold mb-3">
              <span className="text-accent">Tech</span>Yayo
            </p>
            <p className="text-text-secondary text-sm leading-relaxed">
              Soluciones tecnológicas a medida para impulsar tu negocio al
              siguiente nivel.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-semibold mb-3">Navegación</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-semibold mb-3">Síguenos</p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-text-secondary hover:text-accent transition-colors"
                >
                  <social.icono className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-text-secondary text-sm">
          &copy; {new Date().getFullYear()} TechYayo Solutions. Todos los
          derechos reservados.
        </div>
      </div>
    </footer>
  );
}
