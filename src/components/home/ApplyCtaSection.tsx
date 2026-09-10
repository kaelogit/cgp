import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CYCLE_YEAR, MAX_AWARD } from '@/lib/site';

export function ApplyCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--cap-blue)] py-20 text-white md:py-28">
      <div
        className="absolute inset-y-0 right-0 w-1/2 bg-[var(--cap-red)] opacity-90 max-md:hidden"
        aria-hidden
      />
      <div className="container-wide relative grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-label text-[var(--cap-gold)]">Apply now</p>
          <h2 className="headline-lg mt-4 text-white">
            Start your CAP
            <br />
            Grants file
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
            CAP {CYCLE_YEAR} provides funding of {MAX_AWARD.toLowerCase()} per project. Awards are
            grants — not loans. Complete applications are reviewed every cycle.
          </p>
        </div>
        <div className="lg:pl-10">
          <div className="border border-white/25 bg-[var(--cap-blue-deep)]/50 p-8 backdrop-blur-sm md:p-10">
            <p className="font-display text-2xl text-white">Ready when you are</p>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Tell us what you need, who benefits, and how the funds will be used. A coordinator
              follows up within 24 hours.
            </p>
            <Link href="/apply" className="btn-primary mt-7 bg-white text-[var(--cap-blue)] hover:bg-[var(--cap-gold)]">
              Apply for a grant
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
