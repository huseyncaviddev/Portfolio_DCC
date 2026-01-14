import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;     // sənin mailin (qəbul edən)
    const fromEmail = process.env.CONTACT_FROM_EMAIL; // göndərən (sonra domain verify edəcəyik)

    if (!apiKey || !toEmail || !fromEmail) {
      return res.status(500).json({ ok: false, error: "Missing server env vars" });
    }

    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return res.status(200).json({ ok: true });
  } catch (err: any) {
    console.error("Contact API error:", err);
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
}
