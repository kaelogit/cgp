import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CAP_PROGRAMS } from '@/data/programs';

const accentMap = {
  red: 'border-[var(--cap-red)]',
  gold: 'border-[var(--cap-gold)]',
  teal: 'border-[var(--cap-teal)]',
  accent: 'border-[var(--cap-accent)]',
};

export function ProgramsSection() {
  return (
    <section className="bg-[var(--cap-paper)] py-20 md:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="section-label">Funding areas</p>
            <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">Where CAP Grants go</h2>
            <div className="accent-bar mt-5" />
          </div>
          <Link href="/programs" className="btn-navy self-start md:self-auto">
            All programs
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CAP_PROGRAMS.map((program) => (
            <Link
              key={program.slug}
              href={`/programs/${program.slug}`}
              className={`group border-t-4 bg-white p-6 transition-shadow hover:shadow-lg ${accentMap[program.accent || 'red']}`}
            >
              <h3 className="text-xl text-[var(--cap-blue)] group-hover:text-[var(--cap-red)]">
                {program.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed text-[var(--cap-muted)]"
                style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 0 }}
              >
                {program.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-xs font-bold tracking-wider text-[var(--cap-red)] uppercase">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
