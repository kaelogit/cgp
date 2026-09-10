import Link from 'next/link';
import { SHORT_NAME, FULL_NAME } from '@/lib/site';

type Props = {
  compact?: boolean;
  light?: boolean;
};

export function Logo({ compact = false, light = false }: Props) {
  const mark = light ? 'text-white' : 'text-[var(--cap-blue)]';
  const sub = light ? 'text-white/70' : 'text-[var(--cap-muted)]';

  return (
    <Link href="/" className="inline-flex items-center gap-3 no-underline" aria-label={`${SHORT_NAME} home`}>
      <span
        className={`font-display inline-flex h-11 min-w-11 items-center justify-center bg-[var(--cap-blue)] px-2.5 text-[1.35rem] leading-none text-white ${
          light ? 'bg-white text-[var(--cap-blue)]' : ''
        }`}
      >
        {SHORT_NAME}
      </span>
      {!compact ? (
        <span className="hidden min-[420px]:flex flex-col leading-tight">
          <span className={`font-display text-[1.05rem] tracking-[0.04em] ${mark}`}>{SHORT_NAME}</span>
          <span className={`text-[10px] font-semibold tracking-[0.08em] uppercase ${sub}`}>
            {FULL_NAME}
          </span>
        </span>
      ) : null}
    </Link>
  );
}
