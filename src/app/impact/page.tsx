'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { recipientStories } from '@/data/stories';

const filters = ['All', ...Array.from(new Set(recipientStories.map((s) => s.category)))];

export default function ImpactPage() {
  const [filter, setFilter] = useState('All');
  const list = useMemo(
    () => (filter === 'All' ? recipientStories : recipientStories.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <div className="bg-white">
      <section className="border-b border-[var(--cap-line)] bg-[var(--cap-blue)] pt-16 pb-12 text-white">
        <div className="container-page max-w-3xl">
          <p className="section-label">Stories</p>
          <h1 className="mt-3 text-4xl text-white">Letters from people CAP has helped</h1>
          <p className="mt-4 text-sm leading-relaxed text-white/75">
            Recipient accounts in their own words. Applicants come from every income level — these
            stories reflect a range of goals and situations. Amounts are grants, not loans.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="container-page max-w-3xl">
          <div className="mb-8 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 text-xs font-semibold ${
                  filter === f
                    ? 'bg-[var(--cap-blue)] text-white'
                    : 'border border-[var(--cap-line)] text-[var(--cap-muted)]'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <div className="space-y-12">
            {list.map((s) => (
              <article key={s.name} className="border-t border-[var(--cap-line)] pt-10">
                <p className="text-xs font-semibold tracking-wider text-[var(--cap-accent)] uppercase">
                  {s.category} · {s.amount}
                </p>
                <h2 className="mt-2 text-2xl">{s.name}</h2>
                <p className="mt-1 flex items-center gap-1 text-sm text-[var(--cap-muted)]">
                  <MapPin className="h-3.5 w-3.5" />
                  {s.location}
                </p>
                <p className="mt-4 text-base font-medium text-[var(--cap-blue)]">“{s.quote}”</p>
                {s.story.map((p) => (
                  <p key={p.slice(0, 24)} className="mt-4 text-sm leading-relaxed text-[var(--cap-muted)]">
                    {p}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <Link href="/apply" className="btn-primary mt-12">
            Apply for a grant
          </Link>
        </div>
      </section>
    </div>
  );
}
