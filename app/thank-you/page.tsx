import Link from "next/link";

export const metadata = {
  title: "Thank You — Angie & Alex",
};

export default function ThankYouPage() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 py-24 md:py-40">
      <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
        We received your RSVP
      </p>

      <h1 className="font-heading text-5xl md:text-6xl text-warm-brown mb-6">
        Thank You
      </h1>

      <div className="flex items-center justify-center gap-3 mb-8">
        <div className="h-px w-12 bg-tan" />
        <span className="text-tan">✦</span>
        <div className="h-px w-12 bg-tan" />
      </div>

      <p className="max-w-md text-muted-brown leading-relaxed text-base md:text-lg">
        Your response has been recorded. We are so grateful you took a moment
        to let us know, and we cannot wait to celebrate with you in Peru.
      </p>

      <p className="mt-4 text-muted-brown leading-relaxed text-base md:text-lg">
        More details about the event will be on their way to you soon.
      </p>

      <Link
        href="/"
        className="mt-12 inline-block border border-sage text-sage px-10 py-3 text-sm tracking-widest uppercase hover:bg-sage hover:text-cream transition-colors rounded-sm"
      >
        Back to Home
      </Link>
    </section>
  );
}
