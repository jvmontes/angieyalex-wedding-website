"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  attending: string;
  guestName: string;
  guestEmail: string;
};

const emptyForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  attending: "",
  guestName: "",
  guestEmail: "",
};

export default function RsvpForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-tan bg-cream rounded-sm px-4 py-2.5 text-warm-brown placeholder-tan focus:outline-none focus:border-muted-brown transition-colors";
  const labelClass = "block text-xs tracking-widest uppercase text-muted-brown mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className={labelClass}>
            First Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={form.firstName}
            onChange={handleChange}
            placeholder="Angie"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lastName" className={labelClass}>
            Last Name <span className="text-terracotta">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={form.lastName}
            onChange={handleChange}
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email <span className="text-terracotta">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      {/* Attending */}
      <div>
        <label htmlFor="attending" className={labelClass}>
          Will you be attending? <span className="text-terracotta">*</span>
        </label>
        <select
          id="attending"
          name="attending"
          required
          value={form.attending}
          onChange={handleChange}
          className={inputClass}
        >
          <option value="" disabled>
            Please select…
          </option>
          <option value="yes">Joyfully accepts</option>
          <option value="no">Regretfully declines</option>
        </select>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 py-2">
        <div className="h-px flex-1 bg-tan" />
        <span className="text-xs tracking-widest uppercase text-muted-brown">
          Guest (optional)
        </span>
        <div className="h-px flex-1 bg-tan" />
      </div>

      {/* Guest name */}
      <div>
        <label htmlFor="guestName" className={labelClass}>
          Guest Name
        </label>
        <input
          id="guestName"
          name="guestName"
          type="text"
          value={form.guestName}
          onChange={handleChange}
          placeholder="Guest full name"
          className={inputClass}
        />
      </div>

      {/* Guest email */}
      <div>
        <label htmlFor="guestEmail" className={labelClass}>
          Guest Email
        </label>
        <input
          id="guestEmail"
          name="guestEmail"
          type="email"
          value={form.guestEmail}
          onChange={handleChange}
          placeholder="guest@example.com"
          className={inputClass}
        />
      </div>

      {/* Error */}
      {error && (
        <p className="text-sm text-terracotta text-center">{error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sage text-cream py-3 text-sm tracking-widest uppercase hover:bg-sage-light disabled:opacity-60 transition-colors rounded-sm mt-2"
      >
        {isSubmitting ? "Sending…" : "Send RSVP"}
      </button>
    </form>
  );
}
