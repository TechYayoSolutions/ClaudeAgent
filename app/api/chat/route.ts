import Anthropic from "@anthropic-ai/sdk";
import { servicios } from "@/data/servicios";
import { planes } from "@/data/precios";
import { preguntas } from "@/data/faq";

const serviciosText = servicios
  .map((s) => `- ${s.titulo}: ${s.descripcion}`)
  .join("\n");

const planesText = planes
  .map(
    (p) =>
      `- Plan ${p.nombre} (${p.precio} ${p.periodo}): ${p.descripcion}. Incluye: ${p.caracteristicas.join(", ")}.`
  )
  .join("\n");

const faqText = preguntas
  .map((p) => `P: ${p.pregunta}\nR: ${p.respuesta}`)
  .join("\n\n");

const systemPrompt = `Eres el asistente virtual de TechYayo Solutions, una agencia de tecnología profesional. Responde siempre en español, de manera amable, profesional y concisa.

## Información de la empresa

### Servicios que ofrecemos:
${serviciosText}

### Planes y precios:
${planesText}

### Preguntas frecuentes:
${faqText}

### Contacto:
- WhatsApp: +506 7219 9037
- Formulario de contacto en la página web

## Instrucciones:
- Responde solo con información proporcionada aquí. No inventes datos.
- Si no sabes algo, sugiere contactar al equipo por WhatsApp o el formulario de contacto.
- Sé breve y directo en tus respuestas (máximo 2-3 párrafos).
- Si el usuario muestra interés en contratar, recomienda contactar por WhatsApp para una cotización personalizada.`;

// Simple rate limiter
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }
  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json(
      { error: "API key no configurada. Contacta al administrador." },
      { status: 500 }
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Demasiadas solicitudes. Intenta de nuevo en un minuto." },
      { status: 429 }
    );
  }

  let body: { messages?: Array<{ role: string; content: string }> };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const messages = (body.messages || []).slice(-20).map((m) => ({
    role: m.role as "user" | "assistant",
    content: String(m.content).slice(0, 2000),
  }));

  if (messages.length === 0) {
    return Response.json(
      { error: "No se proporcionaron mensajes." },
      { status: 400 }
    );
  }

  try {
    const client = new Anthropic({ apiKey });

    const response = await client.messages.create({
      model: "claude-sonnet-4-20250514",
      max_tokens: 512,
      system: systemPrompt,
      messages,
    });

    const text = response.content
      .filter((block) => block.type === "text")
      .map((block) => block.text)
      .join("");

    return Response.json({ text });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error desconocido";
    return Response.json({ error: message }, { status: 500 });
  }
}
