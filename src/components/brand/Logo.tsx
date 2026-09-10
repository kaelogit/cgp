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
      className={`inline-flex min-w-0 max-w-full items-center gap-2 no-underline sm:gap-2.5 ${className}`}
      aria-label={`${SHORT_NAME} home`}
    >
      <Image
        src={LOGO_PATH}
        alt={FULL_NAME}
        width={44}
        height={44}
        className="h-10 w-10 shrink-0 object-cover sm:h-11 sm:w-11"
        unoptimized
        priority
      />
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`${compact ? 'text-[11px] sm:text-[13px] xl:text-[15px]' : 'text-[11px] sm:text-[13px] xl:text-[15px]'} font-semibold tracking-tight ${word}`}
        >
          {FULL_NAME}
        </span>
        <span className={`text-[10px] font-medium tracking-wide sm:text-[11px] ${sub}`}>
          Grant Program
        </span>
      </span>
    </Link>
  );
}
