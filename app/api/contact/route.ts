import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Origini consentite
const ALLOWED_ORIGINS = [
  "https://logic-way.it",
  "https://www.logic-way.it",
  "http://localhost:3000",
];

// Limiti input
const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;

// Rate limiting in-memory: max 5 richieste per IP ogni 15 minuti
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minuti

// Pulizia periodica della mappa per evitare memory leak
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap) {
    if (now > entry.resetTime) rateLimitMap.delete(key);
  }
}, 60 * 1000);

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Sanitizza input per prevenire XSS nell'email HTML
function sanitize(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Validazione email lato server
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    // Verifica Origin
    const origin = req.headers.get("origin");
    if (!origin || !ALLOWED_ORIGINS.includes(origin)) {
      return NextResponse.json(
        { error: "Richiesta non autorizzata." },
        { status: 403 }
      );
    }

    // Verifica Content-Type
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type non valido." },
        { status: 415 }
      );
    }

    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || req.ip || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Troppe richieste. Riprova tra qualche minuto." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { nome, cognome, email, messaggio } = body;

    // Verifica tipi
    if (
      typeof nome !== "string" ||
      typeof cognome !== "string" ||
      typeof email !== "string" ||
      typeof messaggio !== "string"
    ) {
      return NextResponse.json({ error: "Dati non validi" }, { status: 400 });
    }

    // Trim e verifica presenza
    const trimNome = nome.trim();
    const trimCognome = cognome.trim();
    const trimEmail = email.trim();
    const trimMessaggio = messaggio.trim();

    if (!trimNome || !trimCognome || !trimEmail || !trimMessaggio) {
      return NextResponse.json({ error: "Dati mancanti" }, { status: 400 });
    }

    // Verifica lunghezze
    if (trimNome.length > MAX_NAME_LENGTH || trimCognome.length > MAX_NAME_LENGTH) {
      return NextResponse.json({ error: "Nome o cognome troppo lungo (max 100 caratteri)" }, { status: 400 });
    }
    if (trimEmail.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json({ error: "Email troppo lunga" }, { status: 400 });
    }
    if (trimMessaggio.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json({ error: "Messaggio troppo lungo (max 5000 caratteri)" }, { status: 400 });
    }

    if (!isValidEmail(trimEmail)) {
      return NextResponse.json({ error: "Email non valida" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const safeNome = sanitize(trimNome);
    const safeCognome = sanitize(trimCognome);
    const safeEmail = sanitize(trimEmail);
    const safeMessaggio = sanitize(trimMessaggio);

    await transporter.sendMail({
      from: `"LogicWay" <${process.env.SMTP_FROM}>`,
      to: process.env.SMTP_TO,
      subject: "Nuovo messaggio dal sito LogicWay",
      text: `${trimMessaggio}\n\nDa: ${trimNome} ${trimCognome} - ${trimEmail}`,
      html: `<p>${safeMessaggio}</p><p>Da: ${safeNome} ${safeCognome} - ${safeEmail}</p>`,
      replyTo: trimEmail,
    });

    return NextResponse.json({ message: "Email inviata!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
  }
}
