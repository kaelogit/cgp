'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/programs', label: 'Programs' },
  { href: '/grants', label: 'Grants' },
  { href: '/eligibility', label: 'Eligibility' },
  { href: '/impact', label: 'Impact' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/faq', label: 'FAQ' },
  { href: '/verify', label: 'Verify' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[var(--cap-line)] bg-white">
        <div className="container-wide flex h-[4.5rem] items-center justify-between gap-3">
          <div className="min-w-0 flex-1 pr-2">
            <Logo />
          </div>
          <nav className="hidden min-w-0 items-center gap-2 lg:flex xl:gap-3.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`shrink-0 text-[13px] font-semibold tracking-wide whitespace-nowrap xl:text-sm ${
                  isActive(link.href)
                    ? 'text-[var(--cap-red)]'
                    : 'text-[var(--cap-muted)] hover:text-[var(--cap-blue)]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary shrink-0 px-4 py-2.5 xl:px-5">
              Apply
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
          <button
            type="button"
            className="shrink-0 p-1 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <div className="h-1 bg-[var(--cap-blue)]" aria-hidden>
          <div className="h-full w-1/3 bg-[var(--cap-red)]" />
        </div>
      </header>
      {open ? (
        <div className="fixed inset-0 z-40 flex flex-col bg-white pt-[4.75rem] lg:hidden">
          <nav className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block border-b border-[var(--cap-line)] py-4 text-base font-semibold text-[var(--cap-blue)]"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/apply" className="btn-primary mt-6 w-full">
              Apply for a grant
              <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
