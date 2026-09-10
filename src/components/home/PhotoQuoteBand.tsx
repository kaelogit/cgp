import Image from 'next/image';

export function PhotoQuoteBand() {
  return (
    <section className="relative overflow-hidden py-24 text-white md:py-32">
      <Image
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[var(--cap-blue)]/85" />
      <div className="container-wide relative max-w-4xl">
        <p className="font-display text-3xl leading-tight tracking-[0.03em] md:text-5xl">
          “Opportunity is not a slogan. It is funding, policy, and people willing to act.”
        </p>
        <p className="mt-8 text-sm font-semibold tracking-[0.14em] text-[var(--cap-gold)] uppercase">
          Center for American Progress
        </p>
      </div>
    </section>
  );
}
