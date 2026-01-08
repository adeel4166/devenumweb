import { google } from "googleapis";
import { NextRequest } from "next/server";

const auth = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);

auth.setCredentials({
  refresh_token: process.env.REFRESH_TOKEN,
});

async function verifyRecaptcha(token: string) {
  const res = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    }
  );
  return res.json();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const captcha = await verifyRecaptcha(body.recaptchaToken);
    if (!captcha.success) {
      return Response.json({ error: "Bot detected" }, { status: 400 });
    }

    const gmail = google.gmail({ version: "v1", auth });

    const html = `
      <h2>New Contact Request</h2>
      <p><b>Name:</b> ${body.firstName} ${body.lastName}</p>
      <p><b>Email:</b> ${body.email}</p>
      <p><b>Phone:</b> ${body.phone}</p>
      <p><b>Services:</b> ${body.services.join(", ")}</p>
      <p><b>Message:</b> ${body.message}</p>
    `;

    const raw = Buffer.from(
      `From: "Devenum" <devenum01@gmail.com>
To: devenum01@gmail.com
Subject: New Contact Form Submission
MIME-Version: 1.0
Content-Type: text/html; charset=utf-8

${html}`
    )
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    await gmail.users.messages.send({
      userId: "me",
      requestBody: { raw },
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("EMAIL ERROR:", err);
    return Response.json({ error: "Email failed" }, { status: 500 });
  }
}
