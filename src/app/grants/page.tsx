import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { createMetadata } from '@/lib/metadata';
import {
  CYCLE_YEAR,
  FULL_NAME,
  GRANTS_TOTAL,
  MAX_AWARD,
  SHORT_NAME,
} from '@/lib/site';

export const metadata = createMetadata({
  title: `CAP Grants ${CYCLE_YEAR} — ${MAX_AWARD} for Individuals & Projects`,
  description: `CAP Grants has provided ${GRANTS_TOTAL.toLowerCase()} in new resources. CAP ${CYCLE_YEAR} funds individuals, groups, organizations, and projects ${MAX_AWARD.toLowerCase()}. Grants — not loans.`,
  path: '/grants',
});

const highlights = [
  {
    title: GRANTS_TOTAL,
    text: 'CAP Grants has already put major new resources into individuals, groups, organizations, and projects across the country.',
  },
  {
    title: MAX_AWARD,
    text: `CAP ${CYCLE_YEAR} provides funding of ${MAX_AWARD.toLowerCase()} for approved applications — whether you apply as an individual or for a group, organization, or project.`,
  },
  {
    title: 'Grants, not loans',
    text: 'Selected awards are grants. You do not repay a CAP grant. Applying does not create debt.',
  },
  {
    title: 'Part of a larger mission',
    text: `${FULL_NAME} also advances research, policy, and community programs — grants are one direct path.`,
  },
];

export default function GrantsPage() {
  return (
    <div>
      <section className="bg-[var(--cap-blue)] pt-16 pb-14 text-white">
        <div className="container-wide max-w-4xl">
          <p className="section-label text-[var(--cap-gold)]">CAP Grants</p>
          <h1 className="headline-lg mt-4 text-white">
            Funding that moves
            <br />
            opportunity forward
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
            The CAP Grants program has provided {GRANTS_TOTAL.toLowerCase()} in new resources. CAP{' '}
            {CYCLE_YEAR} provides funding of {MAX_AWARD.toLowerCase()} — for individuals, groups,
            organizations, and projects advancing progress.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/apply" className="btn-primary">
              Apply now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/programs" className="btn-outline-light">
              Browse funding areas
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-wide grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <article key={item.title} className="border-t-4 border-[var(--cap-red)] bg-[var(--cap-paper)] p-8">
              <h2 className="text-2xl text-[var(--cap-blue)]">{item.title}</h2>
              <p
                className="mt-3 text-sm leading-relaxed text-[var(--cap-muted)]"
                style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 0 }}
              >
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--cap-line)] bg-white py-16 md:py-24">
        <div className="container-wide grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label">How awards work</p>
            <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">Clear process. Real review.</h2>
            <div className="accent-bar mt-5" />
            <p className="mt-6 text-sm leading-relaxed text-[var(--cap-muted)] md:text-base">
              Every CAP Grants application is reviewed as a file — purpose, need or project scope,
              and how funds would be used. Not every application is selected. When an award is made,
              it is a grant, not a loan.
            </p>
          </div>
          <ul className="space-y-4 bg-[var(--cap-black)] p-8 text-white">
            {[
              'Submit a complete application online',
              'Coordinator contact within 24 hours',
              'Verification when the file requires it',
              'Award decision communicated by email',
            ].map((line) => (
              <li key={line} className="flex gap-3 text-sm leading-relaxed">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cap-teal)]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="container-wide mt-10">
          <Link href="/how-it-works" className="btn-navy">
            How it works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="bg-[var(--cap-red)] py-16 text-white md:py-20">
        <div className="container-wide flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="headline-lg text-white">Start your {SHORT_NAME} file</h2>
            <p className="mt-3 max-w-xl text-sm text-white/90">
              Applications for CAP {CYCLE_YEAR} are open. Tell us what you need funded — and who
              benefits.
            </p>
          </div>
          <Link
            href="/apply"
            className="btn-primary bg-[var(--cap-blue)] hover:bg-[var(--cap-blue-deep)]"
          >
            Apply for CAP Grants
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
