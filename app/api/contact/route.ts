import { NextResponse } from "next/server";

const CONTACT_EMAIL = "oceanic-agentic-ai-consultant@jayson-ai-holland.com";

type ContactPayload = {
  name: string;
  email: string;
  business: string;
  process: string;
  current: string;
  frequency: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email sending isn't configured yet." },
      { status: 500 },
    );
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, business, process: processDesc, current, frequency } =
    payload;

  if (!name || !email || !processDesc) {
    return NextResponse.json(
      { error: "Name, email, and process are required." },
      { status: 400 },
    );
  }

  const subject = `Automation build: ${processDesc || "new project"}`;
  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Business: ${business || "—"}`,
    "",
    `Process to automate: ${processDesc}`,
    `What currently happens: ${current || "—"}`,
    `How often it happens: ${frequency || "—"}`,
  ].join("\n");

  const htmlBody = `
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Business:</strong> ${escapeHtml(business || "—")}</p>
    <p><strong>Process to automate:</strong> ${escapeHtml(processDesc)}</p>
    <p><strong>What currently happens:</strong> ${escapeHtml(current || "—")}</p>
    <p><strong>How often it happens:</strong> ${escapeHtml(frequency || "—")}</p>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Jayson AI Holland <oceanic-agentic-ai-consultant@jayson-ai-holland.com>",
      to: [CONTACT_EMAIL],
      reply_to: email,
      subject,
      text: textBody,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", errText);
    return NextResponse.json(
      { error: "Failed to send. Try again or email directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
