import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const { nome, cognome, email, messaggio } = await req.json();

    if (!nome || !cognome || !email || !messaggio) {
      return NextResponse.json({ error: "Dati mancanti" }, { status: 400 });
    }

    // Configura il trasportatore SMTP con il tuo dominio Plesk
    const transporter = nodemailer.createTransport({
      host: "mail.tuodominio.it", // sostituisci con il tuo server SMTP
      port: 587,                   // 465 se usi SSL
      secure: false,               // true se port 465
      auth: {
        user: "info@tuodominio.it",  // la mail del tuo dominio
        pass: "PASSWORD_SMTP",       // la password SMTP
      },
    });

    await transporter.sendMail({
      from: `"LogicWay" <info@tuodominio.it>`, // mittente del dominio
      to: "info@tuodominio.it",                // email che riceve i messaggi
      subject: "Nuovo messaggio dal sito LogicWay",
      text: messaggio,
      html: `<p>${messaggio}</p><p>Da: ${nome} ${cognome} - ${email}</p>`,
      replyTo: email,  // l’utente diventa reply-to
    });

    return NextResponse.json({ message: "Email inviata!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Errore invio email" }, { status: 500 });
  }
}
