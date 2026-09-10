import Link from 'next/link';
import Image from 'next/image';
import { FULL_NAME, LOGO_PATH, SHORT_NAME } from '@/lib/site';

type Props = {
  compact?: boolean;
  light?: boolean;
  className?: string;
};

/** CAP mark + org wordmark with Grant Program subtitle (IDA-style). */
export function Logo({ compact = false, light = false, className = '' }: Props) {
  const word = light ? 'text-white' : 'text-[var(--cap-blue)]';
  const sub = light ? 'text-white/70' : 'text-[var(--cap-muted)]';

  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 items-center gap-2.5 no-underline sm:gap-3 ${className}`}
      aria-label={`${SHORT_NAME} home`}
    >
      <Image
        src={LOGO_PATH}
        alt={FULL_NAME}
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 object-cover"
        unoptimized
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`${compact ? 'text-[12px] sm:text-[13px] xl:text-[15px]' : 'text-[13px] sm:text-[15px]'} font-semibold tracking-tight ${word}`}
        >
          {FULL_NAME}
        </span>
        <span className={`text-[11px] font-medium tracking-wide ${sub}`}>Grant Program</span>
      </span>
    </Link>
  );
}
