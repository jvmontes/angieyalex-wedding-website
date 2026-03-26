import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Thank You — Angie & Alex",
};

export default function ThankYouPage() {
  return (
    <>
      {/* Photo */}
      <div className="relative h-[55vh] min-h-[360px]">
        <Image
          src="/ColorPalette/angie-and-alex-sitting.jpeg"
          alt="Angie and Alex sitting together on the cliffs, looking out at the ocean"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/60 pointer-events-none" />
      </div>

      {/* Content */}
      <section className="flex flex-col items-center text-center px-6 py-16 md:py-20">
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
    </>
  );
}
