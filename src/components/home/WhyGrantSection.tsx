import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CYCLE_YEAR, FULL_NAME, MAX_AWARD, SHORT_NAME } from '@/lib/site';

const pillars = [
  {
    title: 'Research & policy',
    text: 'Evidence-driven work that shapes opportunity, wages, and economic mobility.',
  },
  {
    title: 'Community programs',
    text: 'On-the-ground initiatives that turn ideas into local results.',
  },
  {
    title: 'Direct grants',
    text: `CAP Grants ${CYCLE_YEAR} funds individuals, groups, organizations, and projects — ${MAX_AWARD.toLowerCase()} per award.`,
  },
];

export function WhyGrantSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="section-label">What CAP does</p>
          <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">
            More than a grant program.
          </h2>
          <div className="accent-bar mt-5" />
          <p className="mt-6 text-base leading-relaxed text-[var(--cap-muted)] md:text-lg">
            {FULL_NAME} is a national organization. CAP Grants is one of our most direct ways to
            put resources into the hands of individuals, groups, organizations, and projects — but
            it sits alongside research, policy, and community work.
          </p>
        </div>
        <div className="mt-14 grid gap-0 border border-[var(--cap-line)] md:grid-cols-3">
          {pillars.map((item, i) => (
            <article
              key={item.title}
              className={`bg-white p-8 md:p-10 ${i > 0 ? 'border-t border-[var(--cap-line)] md:border-t-0 md:border-l' : ''}`}
            >
              <p className="font-display text-xs tracking-[0.16em] text-[var(--cap-red)]">
                0{i + 1}
              </p>
              <h3 className="mt-4 text-2xl text-[var(--cap-blue)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--cap-muted)] normal-case tracking-normal" style={{ fontFamily: 'var(--font-sans)', textTransform: 'none' }}>
                {item.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/about" className="btn-outline">
            About {SHORT_NAME}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
