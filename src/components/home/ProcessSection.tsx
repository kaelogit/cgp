import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    n: '01',
    title: 'Apply online',
    text: 'Submit your CAP Grants application with a clear purpose and budget outline.',
  },
  {
    n: '02',
    title: 'Coordinator assigned',
    text: 'Within 24 hours, a CAP grants coordinator is assigned and contacts you by email.',
  },
  {
    n: '03',
    title: 'Review & verification',
    text: 'Your file is reviewed. Additional verification may be requested when needed.',
  },
  {
    n: '04',
    title: 'Award decision',
    text: 'Selected applicants receive grant awards — not loans — for approved use.',
  },
];

export function ProcessSection() {
  return (
    <section className="bg-[var(--cap-paper)] py-20 md:py-28">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="section-label">Process</p>
          <h2 className="headline-lg mt-4 text-[var(--cap-blue)]">How CAP Grants work</h2>
          <div className="accent-bar mt-5" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <article key={step.n} className="bg-white p-7">
              <p className="font-display text-3xl text-[var(--cap-red)]">{step.n}</p>
              <h3 className="mt-4 text-xl text-[var(--cap-blue)]">{step.title}</h3>
              <p
                className="mt-3 text-sm leading-relaxed text-[var(--cap-muted)]"
                style={{ fontFamily: 'var(--font-sans)', textTransform: 'none', letterSpacing: 0 }}
              >
                {step.text}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/how-it-works" className="btn-navy">
            Full process guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
