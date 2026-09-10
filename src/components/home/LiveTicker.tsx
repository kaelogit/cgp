const items = [
  'CAP Grants · nearly $60 million in new resources',
  'CAP 2026 · funding up to $1,000,000 per project',
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
