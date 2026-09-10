import Link from 'next/link';
import { SHORT_NAME, FULL_NAME } from '@/lib/site';

type Props = {
  compact?: boolean;
  light?: boolean;
};

export function Logo({ compact = false, light = false }: Props) {
  const sub = light ? 'text-white/70' : 'text-[var(--cap-muted)]';
  const markBg = light ? 'bg-white' : 'bg-[var(--cap-blue)]';
  const markText = light ? 'text-[var(--cap-blue)]' : 'text-white';

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-3 no-underline"
      aria-label={`${SHORT_NAME} home`}
    >
      <span
        className={`font-display inline-flex h-11 w-11 shrink-0 items-center justify-center px-0.5 text-[1.85rem] leading-none tracking-[0.02em] ${markBg} ${markText}`}
      >
        {SHORT_NAME}
      </span>
      {!compact ? (
        <span className={`hidden min-[420px]:block text-[11px] font-semibold leading-snug tracking-[0.06em] uppercase ${sub}`}>
          {FULL_NAME}
        </span>
      ) : null}
    </Link>
  );
}
