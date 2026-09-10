import { CYCLE_YEAR, GRANTS_TOTAL, MAX_AWARD } from '@/lib/site';

const stats = [
  { value: GRANTS_TOTAL, label: 'In CAP Grants resources' },
  { value: MAX_AWARD, label: `Individuals, groups & projects · CAP ${CYCLE_YEAR}` },
  { value: '50 states', label: 'Eligibility nationwide' },
  { value: 'Grants', label: 'Not loans — no repayment' },
];

export function StatsSection() {
  return (
    <section className="bg-[var(--cap-black)] py-16 text-white md:py-20">
      <div className="container-wide grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-l-4 border-[var(--cap-red)] pl-5">
            <p className="font-display text-3xl tracking-[0.02em] text-white md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
