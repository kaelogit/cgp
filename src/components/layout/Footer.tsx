import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';
import {
  CONTACT_EMAIL,
  CYCLE_YEAR,
  FULL_NAME,
  MAX_AWARD,
  SHORT_NAME,
  SITE_DOMAIN,
} from '@/lib/site';

const columns = [
  {
    title: 'Explore',
    links: [
      { href: '/about', label: 'About CAP' },
      { href: '/programs', label: 'Programs' },
      { href: '/grants', label: 'CAP Grants' },
      { href: '/impact', label: 'Impact' },
    ],
  },
  {
    title: 'Apply',
    links: [
      { href: '/eligibility', label: 'Eligibility' },
      { href: '/how-it-works', label: 'How it works' },
      { href: '/apply', label: 'Apply now' },
      { href: '/faq', label: 'FAQ' },
    ],
  },
  {
    title: 'Trust',
    links: [
      { href: '/verify', label: 'Verify' },
      { href: '/awards', label: 'Awards' },
      { href: '/security', label: 'Security' },
      { href: '/contact', label: 'Contact' },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--cap-blue)] text-white">
      <div className="container-wide grid gap-12 py-16 md:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo light compact />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/75">
            {FULL_NAME} advances opportunity through research, policy, community programs, and
            direct grant support. CAP Grants {CYCLE_YEAR} funds individuals, groups, organizations,
            and projects — {MAX_AWARD.toLowerCase()}.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-5 inline-block text-sm font-semibold text-[var(--cap-gold)] hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-lg tracking-[0.08em] text-[var(--cap-gold)]">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/75 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="container-wide flex flex-col gap-3 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SHORT_NAME} · {FULL_NAME} · {SITE_DOMAIN}
          </p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
