import type { Metadata } from 'next';
import {
  absoluteSiteUrl,
  CYCLE_YEAR,
  GRANTS_TOTAL,
  LOGO_PATH,
  LOGO_URL,
  MAX_AWARD,
  PROGRAM_NAME,
  SHORT_NAME,
  SITE_URL,
} from '@/lib/site';

export const DEFAULT_TITLE = 'CAP — Center for American Opportunity | CAP Grants';
export const DEFAULT_DESCRIPTION = `Official Center for American Opportunity site. CAP Grants has provided ${GRANTS_TOTAL.toLowerCase()} in new resources. CAP ${CYCLE_YEAR} funds individuals, groups, organizations, and projects ${MAX_AWARD.toLowerCase()}. Grants — not loans.`;

export function pageUrl(path = '/'): string {
  return absoluteSiteUrl(path || '/');
}

export function createMetadata(options: {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const description = options.description ?? DEFAULT_DESCRIPTION;
  const path = options.path ?? '/';
  const url = pageUrl(path);
  const documentTitle = options.title ?? DEFAULT_TITLE;

  return {
    title: options.title ?? { default: DEFAULT_TITLE, template: `%s | ${SHORT_NAME}` },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    icons: {
      icon: [
        { url: '/favicon.ico?v=cap4', sizes: 'any' },
        { url: '/favicon-16x16.png?v=cap4', type: 'image/png', sizes: '16x16' },
        { url: '/favicon-32x32.png?v=cap4', type: 'image/png', sizes: '32x32' },
        { url: '/icon-192.png?v=cap4', type: 'image/png', sizes: '192x192' },
        { url: '/icon-512.png?v=cap4', type: 'image/png', sizes: '512x512' },
        { url: LOGO_PATH, type: 'image/png' },
      ],
      shortcut: '/favicon.ico?v=cap4',
      apple: [{ url: '/apple-touch-icon.png?v=cap4', sizes: '180x180' }],
    },
    openGraph: {
      title: documentTitle,
      description,
      url,
      siteName: PROGRAM_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: LOGO_URL,
          secureUrl: LOGO_URL,
          width: 807,
          height: 716,
          alt: `${SHORT_NAME} — Center for American Opportunity`,
          type: 'image/png',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: documentTitle,
      description,
      images: [LOGO_URL],
    },
    robots: options.noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    ...(process.env.GOOGLE_SITE_VERIFICATION
      ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
      : {}),
  };
}

export const PUBLIC_ROUTES = [
  '/',
  '/programs',
  '/grants',
  '/eligibility',
  '/awards',
  '/how-it-works',
  '/apply',
  '/about',
  '/impact',
  '/faq',
  '/verify',
  '/security',
  '/contact',
  '/privacy',
  '/terms',
] as const;
