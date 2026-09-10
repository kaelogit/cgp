const DEFAULT_SITE_URL = 'https://capgp.org';

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
    return 'capgp.org';
  }
})();

/** Short public brand mark */
export const SHORT_NAME = 'CAP';
/** Legal / full organization name */
export const FULL_NAME = 'Center for American Prosperity';
/** Program line used in headlines */
export const PROGRAM_NAME = 'CAP Grants';
export const BRAND_NAME = SHORT_NAME;
export const LEGAL_NAME = FULL_NAME;

export const CONTACT_EMAIL = 'support@capgp.org';
export const APPLY_FROM_EMAIL = 'apply@capgp.org';
export const APPLY_FROM_NAME = 'CAP Applications';

export const RESPONSE_HOURS = 24;

export const COORDINATOR_NAME = 'Jordan Hale';
export const COORDINATOR_TITLE = 'CAP Grants Coordinator';

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
  'Center for American Prosperity (CAP) advances opportunity through research, policy, community programs, and direct grant support. CAP Grants has provided nearly $60 million in new resources — with CAP 2026 funding of up to $1 million per project.';

export const ELIGIBILITY_OPEN =
  'Open to adults 18 and older across the United States. There is no income cap, no means test, and no requirement that you be in financial crisis.';

export const HELP_AREAS_SHORT =
  'Community projects, small business growth, education, housing stability, medical costs, and civic initiatives.';

export const GRANTS_TOTAL = 'Nearly $60 million';
export const MAX_AWARD = 'Up to $1,000,000';
export const CYCLE_YEAR = '2026';
