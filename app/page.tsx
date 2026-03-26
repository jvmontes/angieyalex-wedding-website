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
      <section className="relative h-[92vh] min-h-[600px]">
        <Image
          src="/EngagementPhotos/alex-lifting-angie.jpeg"
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
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-white/70 mb-5">
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
            <p className="text-[0.7rem] tracking-[0.3em] uppercase text-white/75 mb-6">
              [Month DD, YYYY] &nbsp;·&nbsp; [City], Peru
            </p>
            <Link
              href="/rsvp"
              className="inline-block bg-white text-charcoal px-12 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-[#1a1a1a] hover:text-white transition-all duration-300"
            >
              RSVP
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          WELCOME — clean white text section
      ───────────────────────────────────────── */}
      <section className="py-24 px-6 text-center max-w-lg mx-auto">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-5">
          13 · 02 · 27
        </p>
        <h2 className="font-heading font-light text-4xl md:text-5xl text-charcoal mb-8 leading-snug">
          An invitation into<br />
          <span className="font-script text-5xl md:text-6xl text-stone">our adventure</span>
        </h2>
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-10 bg-linen" />
          <span className="text-linen text-sm">✦</span>
          <div className="h-px w-10 bg-linen" />
        </div>
        <p className="text-stone leading-[1.9] text-[0.95rem]">
          We are overjoyed to invite you to share in the celebration of
          our love. Surrounded by the beauty of Peru — the cliffs, the
          ocean, the golden light — we will begin this next chapter
          together. And we could not imagine it without you.
        </p>
      </section>

      {/* ─────────────────────────────────────────
          FULL BLEED — angie-and-alex-dip
          The playful, joyful moment. Lots of sky
          — text floats below them.
      ───────────────────────────────────────── */}
      <section className="relative h-[80vh] min-h-[520px]">
        <Image
          src="/EngagementPhotos/angie-and-alex-dip.jpeg"
          alt="Alex dipping Angie on the hilltop at dusk"
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-10 left-0 right-0 text-center px-6">
          <p className="font-heading font-light italic text-3xl md:text-4xl text-white/90 tracking-wide">
            A love worth celebrating
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          DETAILS — ceremony & reception
      ───────────────────────────────────────── */}
      <section className="py-24 px-6 max-w-2xl mx-auto text-center space-y-14">
        <div>
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-4">
            Ceremony
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-3">
            [Venue Name]
          </h3>
          <p className="text-stone text-sm leading-loose tracking-wide">
            [Street Address], [City], Peru
            <br />
            [Time]
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-linen" />
          <span className="text-linen text-sm">✦</span>
          <div className="h-px flex-1 bg-linen" />
        </div>

        <div>
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-4">
            Reception
          </p>
          <h3 className="font-heading text-3xl md:text-4xl text-charcoal mb-3">
            [Venue Name]
          </h3>
          <p className="text-stone text-sm leading-loose tracking-wide">
            [Street Address], [City], Peru
            <br />
            [Time]
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────
          SPLIT — angie-looking-at-alex
          Photo left, intimate text right.
      ───────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-[65vh] md:h-auto min-h-[480px]">
          <Image
            src="/EngagementPhotos/angie-looking-at-alex.jpeg"
            alt="Angie smiling up at Alex at golden hour"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="eager"
            className="object-cover [object-position:center_25%]"
          />
        </div>
        <div className="flex flex-col items-center justify-center px-10 py-16 bg-surface text-center">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-5">
            Lima, Peru
          </p>
          <h2 className="font-heading font-light text-4xl md:text-5xl text-charcoal leading-snug mb-6">
            Where the cliffs<br />meet the sea
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-linen" />
            <span className="text-linen text-sm">✦</span>
            <div className="h-px w-8 bg-linen" />
          </div>
          <p className="text-stone text-sm leading-[1.9] max-w-xs">
            From the moment they met, Angie and Alex have
            shared a life of adventure, laughter, and
            unwavering love — and they are just getting started.
          </p>
        </div>
      </section>

      {/* Desktop-only spacer — clean break between photo sections */}
      <div className="hidden md:block h-24 bg-surface" />

      {/* ─────────────────────────────────────────
          CLOSER — angie-and-alex-kiss
          The emotional finale. Second RSVP CTA.
      ───────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[560px]">
        {/* Mobile: kiss photo */}
        <Image
          src="/EngagementPhotos/angie-and-alex-kiss.jpeg"
          alt="Angie and Alex kissing with the ocean behind them"
          fill
          sizes="100vw"
          className="object-cover object-center md:hidden"
        />
        {/* Desktop: sunset over Lima */}
        <Image
          src="/ColorPalette/sunset.jpeg"
          alt="Sunset over the cliffs of Lima"
          fill
          sizes="100vw"
          className="object-cover object-center hidden md:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
        <div className="absolute bottom-12 left-0 right-0 text-center px-6">
          <p className="font-heading font-light italic text-3xl md:text-4xl text-white/90 mb-6 tracking-wide">
            We can&apos;t wait to see you there
          </p>
          <Link
            href="/rsvp"
            className="inline-block border border-white text-white px-12 py-3.5 text-[0.7rem] tracking-[0.2em] uppercase hover:bg-white hover:text-[#1a1a1a] transition-colors duration-300"
          >
            RSVP
          </Link>
        </div>
      </section>
    </>
  );
}
