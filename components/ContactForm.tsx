"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    messaggio: "",
    privacy: false,
  });
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus(null);
  setIsSubmitting(true);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      setStatus({ type: "success", message: "Messaggio inviato correttamente!" });
      setFormData({ nome: "", cognome: "", email: "", messaggio: "", privacy: false });
    } else {
      setStatus({ type: "error", message: data.error || "Errore nell'invio del messaggio." });
    }
  } catch (err) {
    console.error(err);
    setStatus({ type: "error", message: "Errore imprevisto nell'invio dell'email." });
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="animate-fadeInUp">
      <CardHeader>
        <CardTitle className="text-black select-none drop-shadow-md animate-fadeInUp delay-100">
          Invia un messaggio
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                id: "nome",
                label: "Nome *",
                type: "text",
                value: formData.nome,
              },
              {
                id: "cognome",
                label: "Cognome *",
                type: "text",
                value: formData.cognome,
              },
            ].map(({ id, label, type, value }, i) => (
              <div
                key={id}
                className="animate-fadeInUp"
                style={{ animationDelay: `${150 + i * 100}ms` }}
              >
                <Label htmlFor={id} className="font-medium text-gray-700">
                  {label}
                </Label>
                <Input
                  id={id}
                  name={id}
                  type={type}
                  required
                  value={value}
                  onChange={handleChange}
                  className="mt-1 transition border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 rounded-md duration-300"
                />
              </div>
            ))}
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "350ms" }}>
            <Label htmlFor="email" className="font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-1 transition border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 rounded-md duration-300"
            />
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "400ms" }}>
            <Label htmlFor="messaggio" className="font-medium text-gray-700">
              Messaggio *
            </Label>
            <Textarea
              id="messaggio"
              name="messaggio"
              required
              rows={5}
              value={formData.messaggio}
              onChange={handleChange}
              className="mt-1 transition border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-300 rounded-md duration-300 resize-none"
            />
          </div>

          <div
            className="flex items-start space-x-2 animate-fadeInUp"
            style={{ animationDelay: "450ms" }}
          >
            <Checkbox
              id="privacy"
              checked={formData.privacy}
              onCheckedChange={(checked) =>
                setFormData({ ...formData, privacy: checked as boolean })
              }
              className="transition duration-300"
            />
            <Label
              htmlFor="privacy"
              className="text-sm text-gray-600 leading-relaxed cursor-pointer select-none"
            >
              Dichiaro di aver letto e accettato integralmente le nostre
              condizioni generali, la nostra informativa sulla Privacy e le
              nostre policy sui Cookies.
            </Label>
          </div>

          <Button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold transition duration-300 shadow-md hover:shadow-lg disabled:opacity-60"
            disabled={!formData.privacy || isSubmitting}
          >
            {isSubmitting ? "Invio in corso..." : "Invia"}
          </Button>

          {status && (
            <div
              className={`mt-4 p-3 rounded-md text-sm font-medium ${
                status.type === "success"
                  ? "bg-green-50 text-green-700 border border-green-200"
                  : "bg-red-50 text-red-700 border border-red-200"
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </CardContent>

    </Card>
  );
}
