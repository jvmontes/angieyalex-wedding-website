import RsvpForm from "./RsvpForm";

export const metadata = {
  title: "RSVP — Angie & Alex",
};

export default function RsvpPage() {
  return (
    <section className="max-w-lg mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-terracotta mb-3">
          You&apos;re invited
        </p>
        <h1 className="font-heading font-light text-5xl md:text-6xl text-charcoal mb-5">
          Will You Join Us?
        </h1>
        <div className="flex items-center justify-center gap-3">
          <div className="h-px w-10 bg-linen" />
          <span className="text-linen text-sm">✦</span>
          <div className="h-px w-10 bg-linen" />
        </div>
        <p className="mt-5 text-stone text-sm leading-[1.9]">
          We&apos;d love to know if you can join us<br />
          (but don&apos;t worry, it&apos;s not final!)
        </p>
      </div>

      <RsvpForm />
    </section>
  );
}
