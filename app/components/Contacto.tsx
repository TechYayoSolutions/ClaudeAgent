"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mvzwgjrd";

interface FormData {
  nombre: string;
  email: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  email?: string;
  mensaje?: string;
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [errores, setErrores] = useState<FormErrors>({});
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [errorEnvio, setErrorEnvio] = useState("");

  function validar(): boolean {
    const nuevosErrores: FormErrors = {};
    if (!formData.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es requerido";
    }
    if (!formData.email.trim()) {
      nuevosErrores.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nuevosErrores.email = "Ingresa un email válido";
    }
    if (!formData.mensaje.trim()) {
      nuevosErrores.mensaje = "El mensaje es requerido";
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validar()) return;

    setEnviando(true);
    setErrorEnvio("");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.email,
          message: formData.mensaje,
        }),
      });

      if (res.ok) {
        setEnviado(true);
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setErrorEnvio("Hubo un error al enviar. Intenta de nuevo.");
      }
    } catch {
      setErrorEnvio("Error de conexión. Verifica tu internet e intenta de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errores[name as keyof FormErrors]) {
      setErrores((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  return (
    <section
      id="contacto"
      className="scroll-mt-20 py-24 px-4 max-w-2xl mx-auto"
    >
      <SectionHeading
        titulo="Contáctanos"
        subtitulo="¿Tienes un proyecto en mente? Escríbenos y te responderemos lo antes posible."
      />

      {enviado ? (
        <div className="bg-bg-secondary border border-accent/30 rounded-xl p-8 text-center">
          <p className="text-xl font-semibold mb-2">
            ¡Mensaje enviado!
          </p>
          <p className="text-text-secondary">
            Gracias por contactarnos. Te responderemos pronto.
          </p>
          <button
            onClick={() => setEnviado(false)}
            className="mt-4 text-accent hover:underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-2">
              Nombre
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full bg-bg-secondary border rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors ${
                errores.nombre ? "border-red-500" : "border-border"
              }`}
              placeholder="Tu nombre"
            />
            {errores.nombre && (
              <p className="text-red-500 text-sm mt-1">{errores.nombre}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-bg-secondary border rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors ${
                errores.email ? "border-red-500" : "border-border"
              }`}
              placeholder="tu@email.com"
            />
            {errores.email && (
              <p className="text-red-500 text-sm mt-1">{errores.email}</p>
            )}
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={5}
              value={formData.mensaje}
              onChange={handleChange}
              className={`w-full bg-bg-secondary border rounded-lg px-4 py-3 text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none ${
                errores.mensaje ? "border-red-500" : "border-border"
              }`}
              placeholder="Cuéntanos sobre tu proyecto..."
            />
            {errores.mensaje && (
              <p className="text-red-500 text-sm mt-1">{errores.mensaje}</p>
            )}
          </div>
          {errorEnvio && (
            <p className="text-red-500 text-sm text-center">{errorEnvio}</p>
          )}
          <button
            type="submit"
            disabled={enviando}
            className="w-full bg-accent text-black font-semibold py-3 rounded-lg hover:bg-accent-hover transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {enviando ? (
              <>
                Enviando...
                <Loader2 className="w-4 h-4 animate-spin" />
              </>
            ) : (
              <>
                Enviar mensaje
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </section>
  );
}
