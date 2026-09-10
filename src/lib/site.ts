const DEFAULT_SITE_URL = 'https://capgrantprogram.com';

function normalizeSiteUrl(raw: string | undefined): string {
  const value = raw?.trim();
  if (value) {
    try {
      const host = new URL(value.replace(/\/$/, '')).hostname.toLowerCase();
      if (host.endsWith('.vercel.app')) return DEFAULT_SITE_URL;
      return value.replace(/\/$/, '');
    } catch {
      return DEFAULT_SITE_URL;
    }
  }
  return DEFAULT_SITE_URL;
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const LOGO_PATH = '/logo.png';
export const LOGO_URL = `${SITE_URL}${LOGO_PATH}`;

export const SITE_DOMAIN = (() => {
  try {
    return new URL(SITE_URL).hostname;
  } catch {
    return 'capgrantprogram.com';
  }
})();

/** Short public brand mark */
export const SHORT_NAME = 'CAP';
/** Legal / full organization name */
export const FULL_NAME = 'Center for American Progress';
/** Program line used in headlines */
export const PROGRAM_NAME = 'CAP Grants';
export const BRAND_NAME = SHORT_NAME;
export const LEGAL_NAME = FULL_NAME;

/** Public support + verify desk — not a personal coordinator inbox */
export const CONTACT_EMAIL = 'support@capgrantprogram.com';
export const SUPPORT_EMAIL = CONTACT_EMAIL;

/** Application receipts only */
export const APPLY_FROM_EMAIL = 'apply@capgrantprogram.com';
export const APPLY_FROM_NAME = 'CAP Applications';

export const RESPONSE_HOURS = 24;

/**
 * Default coordinator assigned after apply.
 * Support/verify stay on support@ — Jordan writes from this address.
 */
export const COORDINATOR_NAME = 'Jordan Hale';
export const COORDINATOR_TITLE = 'CAP Grants Coordinator';
export const COORDINATOR_EMAIL = 'jordanhale@capgrantprogram.com';

export function applicantResponseBadge(hours = RESPONSE_HOURS): string {
  return `A coordinator is assigned to your file within ${hours} hours of applying`;
}

export function applicantContactWithin(hours = RESPONSE_HOURS): string {
  return `After you apply, a CAP grants coordinator is assigned to your file and contacts you by email within ${hours} hours.`;
}

export const APPLICANT_CONTACT_MONITOR =
  'Check your inbox and spam folder. Reply on the email thread from your assigned coordinator.';

export function absoluteSiteUrl(path = ''): string {
  if (!path) return SITE_URL;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}

export const ORG_BLURB =
  'Center for American Progress (CAP) advances opportunity through research, policy, community programs, and direct grant support. CAP Grants has provided over $2.5 billion in new resources — with CAP 2026 funding of up to $2.5 million for individuals, groups, organizations, and projects.';

export const ELIGIBILITY_OPEN =
  'Open to adults 18 and older across the United States — individuals may apply for themselves, and groups, organizations, and project teams may apply for collective work. There is no income cap, no means test, and no requirement that you be in financial crisis.';

export const HELP_AREAS_SHORT =
  'Community projects, small business growth, education, housing stability, medical costs, and civic initiatives — for individuals, groups, organizations, and projects.';

export const GRANTS_TOTAL = 'Over $2.5 billion';
export const MAX_AWARD = 'Up to $2,500,000';
export const CYCLE_YEAR = '2026';

/** 2025 charitable contribution mix (organizational transparency) */
export const FUNDING_MIX_2025 =
  'In 2025, the Center for American Progress received 95.7 percent of its charitable contributions from individuals and foundations, 2.1 percent from labor unions, and less than 2.2 percent from corporations. Foreign government funding comprised 0.2 percent of these categories.';
