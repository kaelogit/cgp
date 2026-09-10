import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ELIGIBILITY_OPEN } from '@/lib/site';

const points = [
  'Adults 18 and older in the United States',
  'Individuals, households, and project teams',
  'No income cap and no means test',
  'Clear purpose and a complete application',
];

export function EligibilitySection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-label">Eligibility</p>
          <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">Who can apply</h2>
          <div className="accent-bar mt-5" />
          <p className="mt-6 text-base leading-relaxed text-[var(--cap-muted)] md:text-lg">
            {ELIGIBILITY_OPEN}
          </p>
          <Link href="/eligibility" className="btn-outline mt-8">
            Full eligibility details
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ul className="space-y-4 bg-[var(--cap-blue)] p-8 text-white md:p-10">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed md:text-base">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--cap-gold)]" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
