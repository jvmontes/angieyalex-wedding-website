import Link from "next/link";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;
  const validCode = process.env.NEXT_PUBLIC_RSVP_CODE;
  const hasValidCode = Boolean(code && validCode && code === validCode);

  return (
    <>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36 overflow-hidden bg-cream-dark">
        {/* Decorative top border */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-tan to-transparent" />

        {/* Placeholder hero image */}
        <div className="absolute inset-0 -z-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://placehold.co/1400x700/e8ddd0/c4b09a?text=+"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/60 via-cream-dark/40 to-cream-dark/80" />
        </div>

        {/* Eyebrow */}
        <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
          Together with their families
        </p>

        {/* Names */}
        <h1 className="font-heading text-6xl md:text-8xl text-warm-brown leading-none mb-4">
          Angie
          <span className="block text-3xl md:text-4xl text-muted-brown font-normal italic my-3">
            &amp;
          </span>
          Alex
        </h1>

        {/* Date & Location */}
        <div className="mt-6 space-y-1">
          <p className="text-base md:text-lg tracking-widest uppercase text-muted-brown">
            [Month DD, YYYY]
          </p>
          <p className="text-sm tracking-widest text-terracotta uppercase">
            [Venue Name] &nbsp;·&nbsp; [City], Peru
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="h-px w-16 bg-tan" />
          <span className="text-tan text-lg">✦</span>
          <div className="h-px w-16 bg-tan" />
        </div>

        {/* Welcome message */}
        <p className="max-w-prose text-base md:text-lg text-muted-brown leading-relaxed">
          We are overjoyed to invite you to share in the celebration of our
          love. Surrounded by the beauty of Peru, we will begin our journey
          together as husband and wife — and we could not imagine this day
          without you.
        </p>

        {/* RSVP Button — only shown with a valid ?code= param */}
        {hasValidCode && (
          <Link
            href={`/rsvp?code=${encodeURIComponent(code!)}`}
            className="mt-10 inline-block bg-sage text-cream px-10 py-3 text-sm tracking-widest uppercase hover:bg-sage-light transition-colors rounded-sm"
          >
            RSVP
          </Link>
        )}
      </section>

      {/* Details section */}
      <section className="max-w-2xl mx-auto px-6 py-20 text-center space-y-12">
        <div>
          <h2 className="font-heading text-3xl text-warm-brown mb-3">
            Ceremony &amp; Reception
          </h2>
          <p className="text-muted-brown leading-relaxed">
            [Venue Name]
            <br />
            [Street Address], [City], Peru
          </p>
          <p className="text-sm text-terracotta mt-2 tracking-wider">
            [Time] — Ceremony &nbsp;·&nbsp; [Time] — Reception
          </p>
        </div>

        <div className="h-px bg-tan" />

        <div>
          <h2 className="font-heading text-3xl text-warm-brown mb-3">
            Getting There
          </h2>
          <p className="text-muted-brown leading-relaxed">
            More details about travel, accommodation, and the local area will
            be shared soon. Please check back closer to the date.
          </p>
        </div>
      </section>
    </>
  );
}
