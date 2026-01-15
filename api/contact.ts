import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type ErrorResponse = {
  ok: false;
  error: string;
};

type SuccessResponse = {
  ok: true;
  message: string;
};

const EMAIL_REGEX =
  /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@(?:[a-z0-9-]{1,63}\.)+[a-z0-9-]{2,63}$/i;

const CORS_HEADERS: Record<string, string> = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function setCorsHeaders(res: VercelResponse): void {
  Object.entries(CORS_HEADERS).forEach(([key, value]) => {
    res.setHeader(key, value);
  });
}

function jsonError(
  res: VercelResponse,
  status: number,
  message: string
): VercelResponse<ErrorResponse> {
  return res.status(status).json({ ok: false, error: message });
}

function jsonSuccess(
  res: VercelResponse,
  message: string
): VercelResponse<SuccessResponse> {
  return res.status(200).json({ ok: true, message });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") {
    return null;
  }
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

function parseRequestBody(
  req: VercelRequest
): { ok: true; value: unknown } | { ok: false; error: string } {
  const body = req.body;

  if (body === undefined || body === null) {
    return { ok: false, error: "Missing request body" };
  }

  if (typeof body === "string") {
    const trimmed = body.trim();
    if (!trimmed) {
      return { ok: false, error: "Missing request body" };
    }
    try {
      return { ok: true, value: JSON.parse(trimmed) };
    } catch {
      return { ok: false, error: "Invalid JSON body" };
    }
  }

  if (Buffer.isBuffer(body)) {
    const text = body.toString("utf8").trim();
    if (!text) {
      return { ok: false, error: "Missing request body" };
    }
    try {
      return { ok: true, value: JSON.parse(text) };
    } catch {
      return { ok: false, error: "Invalid JSON body" };
    }
  }

  return { ok: true, value: body };
}

function validateContactPayload(
  value: unknown
): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!isRecord(value)) {
    return { ok: false, error: "Invalid request body" };
  }

  const name = getTrimmedString(value.name);
  if (!name) {
    return { ok: false, error: "Name is required" };
  }

  const email = getTrimmedString(value.email);
  if (!email) {
    return { ok: false, error: "Email is required" };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: "Email is invalid" };
  }

  const subject = getTrimmedString(value.subject);
  if (!subject) {
    return { ok: false, error: "Subject is required" };
  }

  const message = getTrimmedString(value.message);
  if (!message) {
    return { ok: false, error: "Message is required" };
  }

  return { ok: true, data: { name, email, subject, message } };
}

function escapeHtml(input: string): string {
  return input.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#39;";
      default:
        return char;
    }
  });
}

function sanitizeHeader(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildEmailText(payload: ContactPayload): string {
  return `Name: ${payload.name}\nEmail: ${payload.email}\nSubject: ${payload.subject}\n\nMessage:\n${payload.message}`;
}

function buildEmailHtml(payload: ContactPayload): string {
  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const subject = escapeHtml(payload.subject);
  const message = escapeHtml(payload.message).replace(/\r?\n/g, "<br />");

  return [
    "<h2>New Contact Form Submission</h2>",
    `<p><strong>Name:</strong> ${name}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`,
    `<p><strong>Subject:</strong> ${subject}</p>`,
    "<hr />",
    "<p><strong>Message:</strong></p>",
    `<p>${message}</p>`,
  ].join("");
}

function getEnvConfig():
  | { ok: true; apiKey: string; toEmail: string; fromEmail: string }
  | { ok: false; error: string; missing: string[] } {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();
  const missing: string[] = [];

  if (!apiKey) {
    missing.push("RESEND_API_KEY");
  }
  if (!toEmail) {
    missing.push("CONTACT_TO_EMAIL");
  }
  if (!fromEmail) {
    missing.push("CONTACT_FROM_EMAIL");
  }

  if (missing.length > 0) {
    return {
      ok: false,
      missing,
      error: `Missing required server configuration: ${missing.join(", ")}.`,
    };
  }

  return { ok: true, apiKey, toEmail, fromEmail };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return jsonError(res, 405, "Method Not Allowed");
  }

  try {
    const parsed = parseRequestBody(req);
    if (!parsed.ok) {
      return jsonError(res, 400, parsed.error);
    }

    const validation = validateContactPayload(parsed.value);
    if (!validation.ok) {
      return jsonError(res, 400, validation.error);
    }

    const env = getEnvConfig();
    if (!env.ok) {
      console.error("Missing env vars:", { missing: env.missing });
      return jsonError(res, 500, env.error);
    }

    const payload = validation.data;
    const safeSubject = sanitizeHeader(payload.subject);
    const emailSubject =
      safeSubject.length > 0
        ? `[Portfolio Contact] ${safeSubject}`
        : "[Portfolio Contact] New Message";

    const resend = new Resend(env.apiKey);

    try {
      const { error } = await resend.emails.send({
        from: env.fromEmail,
        to: env.toEmail,
        replyTo: payload.email,
        subject: emailSubject,
        text: buildEmailText(payload),
        html: buildEmailHtml(payload),
      });

      if (error) {
        console.error("Resend API error:", error);
        return jsonError(res, 502, "Failed to send email");
      }
    } catch (err) {
      console.error("Resend request failed:", err);
      return jsonError(res, 502, "Failed to send email");
    }

    return jsonSuccess(res, "Email sent successfully");
  } catch (err: unknown) {
    console.error("Contact API error:", err);
    return jsonError(res, 500, "Internal server error");
  }
}
