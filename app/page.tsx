import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────
          HERO — alex-lifting-angie
          Full viewport, text overlaid in the open
          sky at top, RSVP anchored at bottom.
      ───────────────────────────────────────── */}
      <section className="relative h-[92svh] min-h-[600px] md:h-[130svh]">
        <Image
          src="/alex-and-angie-hero.jpg"
          alt="Alex lifting Angie, laughing together on the cliffs of Lima"
          fill
          sizes="100vw"
          className="object-cover [object-position:center_15%] md:[object-position:center_38%]"
          priority
        />
        {/* Soft gradient — darkens top for text, subtle at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/30 pointer-events-none" />

        <div className="relative h-full flex flex-col items-center justify-between py-14 px-6 text-center">
          {/* Names — sits in the open sky */}
          <div>
            <p className="text-[0.85rem] tracking-[0.35em] uppercase text-white/85 mb-5">
              Together with their families
            </p>
            <h1 className="font-heading font-light text-[5.5rem] md:text-[8rem] text-white leading-[0.9] tracking-wide">
              Angie
            </h1>
            <p className="font-script text-5xl md:text-6xl text-white/85 my-1">
              &amp;
            </p>
            <h1 className="font-heading font-light text-[5.5rem] md:text-[8rem] text-white leading-[0.9] tracking-wide">
              Alex
            </h1>
          </div>

          {/* Date + RSVP — anchored at bottom */}
          <div>
            <p className="text-[0.85rem] tracking-[0.3em] uppercase text-white font-semibold mb-6">
              02.13.2027 &nbsp;·&nbsp; Lima, Peru
            </p>
            <Link
              href="/rsvp"
              className="inline-block bg-white text-charcoal px-12 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              Will you join us?
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
