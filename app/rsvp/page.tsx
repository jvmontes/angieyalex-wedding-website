import { redirect } from "next/navigation";
import RsvpForm from "./RsvpForm";

export const metadata = {
  title: "RSVP — Angie & Alex",
};

export default async function RsvpPage({
  searchParams,
}: {
  searchParams: Promise<{ code?: string }>;
}) {
  const { code } = await searchParams;
  const validCode = process.env.NEXT_PUBLIC_RSVP_CODE;

  if (!code || !validCode || code !== validCode) {
    redirect("/");
  }

  return (
    <section className="max-w-lg mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-3">
          You&apos;re invited
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-warm-brown mb-4">
          RSVP
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-tan" />
          <span className="text-tan">✦</span>
          <div className="h-px w-10 bg-tan" />
        </div>
        <p className="mt-5 text-muted-brown leading-relaxed">
          Please let us know if you&apos;ll be joining us by filling out the
          form below.
        </p>
      </div>

      <RsvpForm />
    </section>
  );
}
