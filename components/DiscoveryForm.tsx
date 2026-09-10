"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "oceanic-agentic-ai-consultant@jayson-ai-holland.com";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "business", label: "Business", type: "text", required: false },
] as const;

export default function DiscoveryForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    business: "",
    process: "",
    current: "",
    frequency: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const update = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const openMailto = () => {
    const subject = `Automation build: ${values.process || "new project"}`;
    const body = [
      `Name: ${values.name}`,
      `Business: ${values.business || "—"}`,
      "",
      `Process to automate: ${values.process}`,
      `What currently happens: ${values.current}`,
      `How often it happens: ${values.frequency}`,
    ].join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      // Backend isn't set up yet, or the request failed — fall back to
      // opening the visitor's email client so the enquiry still gets sent.
      openMailto();
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="glass-panel mt-10 rounded-3xl p-7 text-left">
      <div className="grid gap-4 sm:grid-cols-3">
        {FIELDS.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="font-mono text-[10px] tracking-widest text-muted uppercase"
            >
              {field.label}
              {field.required ? " *" : ""}
            </label>
            <input
              id={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name]}
              onChange={update(field.name)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-starlight outline-none focus:border-volt"
            />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <label
          htmlFor="process"
          className="font-mono text-[10px] tracking-widest text-muted uppercase"
        >
          What process would you like to automate? *
        </label>
        <input
          id="process"
          type="text"
          required
          value={values.process}
          onChange={update("process")}
          placeholder="e.g. following up with new leads"
          className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-starlight outline-none placeholder:text-muted/50 focus:border-volt"
        />
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="current"
            className="font-mono text-[10px] tracking-widest text-muted uppercase"
          >
            What currently happens?
          </label>
          <textarea
            id="current"
            rows={3}
            value={values.current}
            onChange={update("current")}
            placeholder="e.g. I check my inbox and reply manually"
            className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-starlight outline-none placeholder:text-muted/50 focus:border-volt"
          />
        </div>
        <div>
          <label
            htmlFor="frequency"
            className="font-mono text-[10px] tracking-widest text-muted uppercase"
          >
            How often does it happen?
          </label>
          <input
            id="frequency"
            type="text"
            value={values.frequency}
            onChange={update("frequency")}
            placeholder="e.g. 10-15 times a day"
            className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-starlight outline-none placeholder:text-muted/50 focus:border-volt"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="pop-button glow-cta mt-6 w-full rounded-full bg-gradient-to-r from-volt to-punch px-8 py-4 font-display text-sm font-semibold text-white shadow-lg sm:w-auto disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Start a build"}
      </button>

      <p className="mt-3 font-mono text-[11px] text-muted">
        {status === "sent" &&
          "Sent — I'll reply within a day or two."}
        {status === "error" &&
          "This should automatically open your email app with everything pre-filled — just hit send."}
        {status === "idle" && "Sent straight to my inbox — no email client needed."}
        {status === "sending" && "Sending…"}
      </p>
    </form>
  );
}
