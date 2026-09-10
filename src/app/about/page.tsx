import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import {
  CYCLE_YEAR,
  FULL_NAME,
  GRANTS_TOTAL,
  ORG_BLURB,
  SHORT_NAME,
} from '@/lib/site';

export const metadata = createMetadata({
  title: `About ${SHORT_NAME} — Center for American Progress`,
  description: ORG_BLURB,
  path: '/about',
});

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-[var(--cap-blue)] pt-16 pb-20 text-white">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="container-wide relative max-w-4xl">
          <p className="section-label text-[var(--cap-gold)]">About CAP</p>
          <h1 className="headline-lg mt-4 text-white">
            Center for
            <br />
            American Progress
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">{ORG_BLURB}</p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label">Mission</p>
            <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">
              Opportunity with substance
            </h2>
            <div className="accent-bar mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-[var(--cap-muted)] md:text-base">
              {FULL_NAME} works at the intersection of ideas and action. We publish research, shape
              policy conversations, support community programs, and fund people and projects through
              CAP Grants — because prosperity is more than a headline.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { k: 'Research', v: 'Evidence on wages, mobility, and growth' },
              { k: 'Policy', v: 'Practical ideas for American opportunity' },
              { k: 'Community', v: 'Programs that meet people where they are' },
              { k: 'Grants', v: `${GRANTS_TOTAL} in new resources — and growing` },
            ].map((item) => (
              <div key={item.k} className="border border-[var(--cap-line)] bg-[var(--cap-paper)] p-6">
                <p className="font-display text-xl text-[var(--cap-red)]">{item.k}</p>
                <p
                  className="mt-2 text-sm text-[var(--cap-muted)]"
                  style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 0 }}
                >
                  {item.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--cap-paper)] py-16 md:py-24">
        <div className="container-wide max-w-3xl">
          <p className="section-label">CAP Grants</p>
          <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">
            Direct funding. Real awards.
          </h2>
          <div className="accent-bar mt-5" />
          <p className="mt-6 text-sm leading-relaxed text-[var(--cap-muted)] md:text-base">
            CAP Grants is not the only thing we do — but it is one of the most concrete. The program
            has provided nearly $60 million in new resources. CAP {CYCLE_YEAR} provides funding of up
            to USD 1 million per project. Awards are grants, not loans.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/grants" className="btn-primary">
              Explore CAP Grants
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/apply" className="btn-outline">
              Apply
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
