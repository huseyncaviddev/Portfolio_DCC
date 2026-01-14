import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers for production
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: "Missing required fields" });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ ok: false, error: "Invalid email format" });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error("Missing env vars:", {
        hasApiKey: !!apiKey,
        hasToEmail: !!toEmail,
        hasFromEmail: !!fromEmail
      });
      return res.status(500).json({ ok: false, error: "Server configuration error" });
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return res.status(500).json({ ok: false, error: "Failed to send email" });
    }

    return res.status(200).json({ ok: true, message: "Email sent successfully" });
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return res.status(500).json({ ok: false, error: "Internal server error" });
  }
}
