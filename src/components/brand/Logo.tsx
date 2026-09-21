import Link from 'next/link';
import Image from 'next/image';
import { FULL_NAME, LOGO_FULL_PATH, LOGO_PATH, SHORT_NAME } from '@/lib/site';

type Props = {
  /** full = nav wordmark lockup; mark = short CAP icon (footer / compact) */
  variant?: 'full' | 'mark';
  className?: string;
};

export function Logo({ variant = 'full', className = '' }: Props) {
  if (variant === 'mark') {
    return (
      <Link
        href="/"
        className={`inline-flex shrink-0 no-underline ${className}`}
        aria-label={`${SHORT_NAME} home`}
      >
        <Image
          src={LOGO_PATH}
          alt={FULL_NAME}
          width={132}
          height={117}
          className="h-11 w-auto object-contain"
          unoptimized
          priority
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`inline-flex min-w-0 max-w-full items-center no-underline ${className}`}
      aria-label={`${SHORT_NAME} home`}
    >
      <Image
        src={LOGO_FULL_PATH}
        alt={FULL_NAME}
        width={320}
        height={76}
        className="h-9 w-auto max-w-full object-contain object-left sm:h-10 md:h-11"
        unoptimized
        priority
      />
    </Link>
  );
}
