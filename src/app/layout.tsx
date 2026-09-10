import './globals.css';
import { ReactNode } from 'react';
import type { Viewport } from 'next';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { createMetadata } from '@/lib/metadata';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationJsonLd, websiteJsonLd } from '@/lib/jsonld';

export const metadata = createMetadata({ path: '/' });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="icon" href="/favicon.ico?v=cap3" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=cap3" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=cap3" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icon-192.png?v=cap3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon-512.png?v=cap3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=cap3" />
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
