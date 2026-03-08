"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const GREETING =
  "¡Hola! Soy el asistente virtual de TechYayo Solutions. Puedo ayudarte con información sobre nuestros servicios, precios y más. ¿Cómo puedo ayudarte?";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: "greeting", role: "assistant", content: GREETING },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function handleSend() {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text,
    };
    const assistantMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      content: "",
    };

    const updatedMessages = [...messages, userMsg];
    setMessages([...updatedMessages, assistantMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = updatedMessages
        .filter((m) => m.id !== "greeting")
        .map((m) => ({ role: m.role, content: m.content }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Error del servidor");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsg.id
            ? { ...m, content: data.text }
            : m
        )
      );
    } catch (err) {
      const errorText =
        err instanceof Error ? err.message : "Error de conexión";
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMsg.id
            ? { ...m, content: `Lo siento, ocurrió un error: ${errorText}` }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Abrir chat de asistencia"
        className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-accent text-black shadow-lg hover:scale-110 transition-transform cursor-pointer"
      >
        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-20" />
        <MessageCircle className="w-7 h-7 relative" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 sm:w-96 h-[500px] max-h-[80vh] flex flex-col rounded-2xl bg-bg-secondary border border-border shadow-2xl max-sm:inset-4 max-sm:w-auto max-sm:h-auto max-sm:bottom-auto max-sm:left-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg-tertiary rounded-t-2xl">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-400" />
          <span className="font-semibold text-foreground text-sm">
            TechYayo Solutions
          </span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          aria-label="Cerrar chat"
          className="text-text-secondary hover:text-foreground transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] px-3 py-2 rounded-xl text-sm whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-accent/20 text-foreground rounded-br-sm"
                  : "bg-bg-tertiary text-foreground rounded-bl-sm"
              }`}
            >
              {msg.content || (
                <span className="typing-dots flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                  <span className="w-1.5 h-1.5 rounded-full bg-text-secondary" />
                </span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            disabled={isLoading}
            className="flex-1 px-3 py-2 rounded-lg bg-bg-tertiary border border-border text-foreground text-sm placeholder:text-text-secondary focus:outline-none focus:border-accent disabled:opacity-50"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            aria-label="Enviar mensaje"
            className="p-2 rounded-lg bg-accent text-black hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
