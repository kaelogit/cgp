import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import {
  CYCLE_YEAR,
  FULL_NAME,
  GRANTS_TOTAL,
  HELP_AREAS_SHORT,
  MAX_AWARD,
  ORG_BLURB,
  SHORT_NAME,
} from '@/lib/site';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--cap-blue)] text-white">
      <Image
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(115deg, rgba(11,36,102,0.96) 0%, rgba(11,36,102,0.82) 48%, rgba(250,100,87,0.45) 100%)',
        }}
      />
      <div className="container-wide relative grid min-h-[88vh] items-end gap-10 py-20 lg:grid-cols-[1.35fr_0.9fr] lg:items-center lg:py-28">
        <div>
          <p className="section-label text-[var(--cap-gold)]">
            {SHORT_NAME} · {FULL_NAME}
          </p>
          <h1 className="headline-xl mt-5 max-w-3xl text-white">
            Prosperity built
            <br />
            for people.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {ORG_BLURB} {HELP_AREAS_SHORT}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">
              Apply for CAP Grants
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/grants" className="btn-outline-light">
              Explore CAP {CYCLE_YEAR}
            </Link>
          </div>
        </div>
        <aside className="border border-white/20 bg-[var(--cap-black)]/35 p-7 backdrop-blur-sm lg:p-8">
          <p className="font-display text-sm tracking-[0.18em] text-[var(--cap-gold)]">
            CAP Grants {CYCLE_YEAR}
          </p>
          <div className="mt-6 space-y-6">
            <div>
              <p className="font-display text-4xl text-white md:text-5xl">{GRANTS_TOTAL}</p>
              <p className="mt-1 text-sm text-white/70">in new resources provided</p>
            </div>
            <div className="h-px bg-white/20" />
            <div>
              <p className="font-display text-4xl text-[var(--cap-red)] md:text-5xl">{MAX_AWARD}</p>
              <p className="mt-1 text-sm text-white/70">per project under CAP {CYCLE_YEAR}</p>
            </div>
            <div className="h-px bg-white/20" />
            <p className="text-sm leading-relaxed text-white/75">
              Grants — not loans. Awards support individuals, groups, and projects advancing
              opportunity across the United States.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
