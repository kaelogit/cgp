import { CYCLE_YEAR, GRANTS_TOTAL, MAX_AWARD } from '@/lib/site';

const items = [
  `CAP Grants · ${GRANTS_TOTAL.toLowerCase()} in new resources`,
  `CAP ${CYCLE_YEAR} · funding ${MAX_AWARD.toLowerCase()} for individuals, groups, orgs & projects`,
  'Grants — not loans',
  'Coordinator assigned within 24 hours',
  'Open nationwide · adults 18+',
  'Community · business · education · housing · medical',
];

export function LiveTicker() {
  const line = items.join('   ·   ');
  return (
    <div className="overflow-hidden border-y border-[var(--cap-line)] bg-[var(--cap-gold)] py-3">
      <div className="cap-ticker flex whitespace-nowrap font-display text-sm tracking-[0.12em] text-[var(--cap-blue)] uppercase">
        <span className="inline-block px-8">{line}</span>
        <span className="inline-block px-8" aria-hidden>
          {line}
        </span>
      </div>
    </div>
  );
}
