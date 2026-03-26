import Link from "next/link";

export const metadata = {
  title: "Thank You — Angie & Alex",
};

export default function ThankYouPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-40">
      <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-6">
        We received your RSVP
      </p>

      <h1 className="font-heading font-light text-6xl md:text-7xl text-charcoal mb-6">
        Thank You
      </h1>

      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-linen" />
        <span className="text-linen text-sm">✦</span>
        <div className="h-px w-12 bg-linen" />
      </div>

      <p className="max-w-md text-stone text-sm leading-[1.9]">
        Your response has been recorded. We are so grateful you took a moment
        to let us know, and we cannot wait to celebrate with you in Peru.
      </p>

      <p className="mt-4 max-w-md text-stone text-sm leading-[1.9]">
        More details about the event will be on their way to you soon.
      </p>

      <Link
        href="/"
        className="mt-12 inline-block border border-charcoal text-charcoal px-10 py-3 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300"
      >
        Back to Home
      </Link>
    </section>
  );
}
