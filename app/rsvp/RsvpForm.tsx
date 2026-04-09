"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type AdditionalGuest = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type Attendance = "yes" | "maybe" | "no";

type FormData = {
  attendance: Attendance | "";
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  guests: AdditionalGuest[];
};

const emptyGuest = (): AdditionalGuest => ({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
});

const MAX_GUESTS = 10;

export default function RsvpForm() {
  const router = useRouter();
  const [form, setForm] = useState<FormData>({
    attendance: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    guests: [],
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  function handlePrimaryChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleGuestChange(
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm((prev) => {
      const guests = prev.guests.map((g, i) =>
        i === index ? { ...g, [e.target.name]: e.target.value } : g
      );
      return { ...prev, guests };
    });
  }

  function addGuest() {
    setForm((prev) => ({ ...prev, guests: [...prev.guests, emptyGuest()] }));
  }

  function removeGuest(index: number) {
    setForm((prev) => ({
      ...prev,
      guests: prev.guests.filter((_, i) => i !== index),
    }));
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

      if (!res.ok) throw new Error("Submission failed");

      router.push("/thank-you");
    } catch {
      setError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "w-full border border-linen bg-surface rounded-sm px-4 py-2.5 text-charcoal placeholder-stone-light focus:outline-none focus:border-ocean transition-colors text-sm";
  const labelClass =
    "block text-[0.65rem] tracking-[0.2em] uppercase text-stone mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* ── Attendance selector ── */}
      <div className="flex items-center justify-center gap-0">
        {(["Yes", "Maybe", "No"] as const).map((option, i) => {
          const value = option.toLowerCase() as Attendance;
          const isSelected = form.attendance === value;
          return (
            <label key={option} className="flex items-center cursor-pointer">
              {i > 0 && (
                <span className="flex items-center mx-4 text-linen text-[0.6rem]">
                  <span className="block h-px w-8 bg-linen" />
                  <span className="mx-1.5">◆</span>
                  <span className="block h-px w-8 bg-linen" />
                </span>
              )}
              <input
                type="radio"
                name="attendance"
                value={value}
                checked={isSelected}
                onChange={() => setForm((prev) => ({ ...prev, attendance: value }))}
                className="sr-only"
              />
              <span
                className={`text-[0.95rem] tracking-wide transition-colors ${
                  isSelected ? "text-charcoal font-medium" : "text-stone-light"
                }`}
              >
                {option}
              </span>
            </label>
          );
        })}
      </div>

      {/* ── Primary guest ── */}
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
            onChange={handlePrimaryChange}
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
            onChange={handlePrimaryChange}
            placeholder="Smith"
            className={inputClass}
          />
        </div>
      </div>

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
          onChange={handlePrimaryChange}
          placeholder="you@example.com"
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="address" className={labelClass}>
          Home Address{" "}
          <span className="normal-case tracking-normal text-stone-light font-normal">
            (optional)
          </span>
        </label>
        <input
          id="address"
          name="address"
          type="text"
          value={form.address}
          onChange={handlePrimaryChange}
          placeholder="123 Main St, City, State, ZIP"
          className={inputClass}
        />
      </div>

      {/* ── Additional guests ── */}
      {form.guests.length > 0 && (
        <div className="space-y-4 pt-2">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-linen" />
            <span className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-light">
              Additional Guests
            </span>
            <div className="h-px flex-1 bg-linen" />
          </div>

          {form.guests.map((guest, index) => (
            <div
              key={index}
              className="border border-linen rounded-sm p-4 bg-surface space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.65rem] tracking-[0.2em] uppercase text-stone-light">
                  Guest {index + 1}
                </span>
                <button
                  type="button"
                  onClick={() => removeGuest(index)}
                  className="text-[0.65rem] tracking-wider uppercase text-stone-light hover:text-[#c4936a] transition-colors"
                >
                  Remove
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`guest-firstName-${index}`}
                    className={labelClass}
                  >
                    First Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id={`guest-firstName-${index}`}
                    name="firstName"
                    type="text"
                    required
                    value={guest.firstName}
                    onChange={(e) => handleGuestChange(index, e)}
                    placeholder="John"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`guest-lastName-${index}`}
                    className={labelClass}
                  >
                    Last Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id={`guest-lastName-${index}`}
                    name="lastName"
                    type="text"
                    required
                    value={guest.lastName}
                    onChange={(e) => handleGuestChange(index, e)}
                    placeholder="Smith"
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor={`guest-email-${index}`}
                    className={labelClass}
                  >
                    Email{" "}
                    <span className="normal-case tracking-normal text-stone-light font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id={`guest-email-${index}`}
                    name="email"
                    type="email"
                    value={guest.email}
                    onChange={(e) => handleGuestChange(index, e)}
                    placeholder="guest@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor={`guest-phone-${index}`}
                    className={labelClass}
                  >
                    Phone{" "}
                    <span className="normal-case tracking-normal text-stone-light font-normal">
                      (optional)
                    </span>
                  </label>
                  <input
                    id={`guest-phone-${index}`}
                    name="phone"
                    type="tel"
                    value={guest.phone}
                    onChange={(e) => handleGuestChange(index, e)}
                    placeholder="+1 (555) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Plus-one note ── */}
      <p className="text-center text-stone text-[0.8rem] leading-[1.8]">
        While we wish we could accommodate everyone, space is limited. We&apos;ll
        do our best and will confirm plus ones with guests closer to the
        wedding date.
      </p>

      {/* ── Add guest button ── */}
      {form.guests.length < MAX_GUESTS && (
        <button
          type="button"
          onClick={addGuest}
          className="w-full border border-dashed border-linen text-stone text-[0.7rem] tracking-[0.2em] uppercase py-3.5 rounded-sm hover:border-[#6b6460] hover:text-[#1a1a1a] transition-colors"
        >
          + Add {form.guests.length > 0 ? "Another" : "Guest(s)"}
        </button>
      )}

      {form.guests.length === MAX_GUESTS && (
        <p className="text-center text-[0.65rem] text-stone-light tracking-wider">
          Maximum of {MAX_GUESTS} additional guests reached.
        </p>
      )}

      {/* ── Error ── */}
      {error && (
        <p className="text-sm text-terracotta text-center">{error}</p>
      )}

      {/* ── Submit ── */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-charcoal text-white py-3.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-[#6b6460] disabled:opacity-50 transition-colors"
      >
        {isSubmitting ? "Sending…" : "Send RSVP"}
      </button>
    </form>
  );
}
