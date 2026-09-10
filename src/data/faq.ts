import {
  APPLY_FROM_EMAIL,
  CONTACT_EMAIL,
  COORDINATOR_EMAIL,
  COORDINATOR_NAME,
  CYCLE_YEAR,
  ELIGIBILITY_OPEN,
  FULL_NAME,
  GRANTS_TOTAL,
  HELP_AREAS_SHORT,
  MAX_AWARD,
  RESPONSE_HOURS,
  SHORT_NAME,
  SITE_DOMAIN,
} from '@/lib/site';

export const faqItems = [
  {
    question: 'Is a CAP grant a loan?',
    answer:
      'No. CAP Grants are not loans. If you are selected, you do not repay the award. Applying does not create debt and does not guarantee funds.',
  },
  {
    question: 'Who can apply?',
    answer: `${ELIGIBILITY_OPEN} ${HELP_AREAS_SHORT}`,
  },
  {
    question: 'Do I need to be low income or in financial crisis?',
    answer:
      'No. There is no income cap, no means test, and no requirement that you be in crisis. CAP reviews applications from adults at every income level. What matters is a clear purpose and a complete application.',
  },
  {
    question: `What is CAP Grants ${CYCLE_YEAR}?`,
    answer: `CAP Grants has provided ${GRANTS_TOTAL.toLowerCase()} in new resources. Under CAP ${CYCLE_YEAR}, funding of ${MAX_AWARD.toLowerCase()} per project is available for approved applications. Awards are grants — not loans.`,
  },
  {
    question: 'Is CAP only a grant program?',
    answer: `${FULL_NAME} does more than grants. CAP advances opportunity through research, policy, community programs, and direct grant support. CAP Grants is the direct-funding track for people and projects.`,
  },
  {
    question: 'How much can I receive?',
    answer: `CAP ${CYCLE_YEAR} provides funding of up to USD 1 million per project. Actual award amounts depend on the file, the request, and available resources. Not every application is funded.`,
  },
  {
    question: 'What ca CAP Grants fund?',
    answer: `Community projects, small business growth, education and skills, housing stability, medical costs, civic engagement, seniors support, and general grants when your goal spans categories.`,
  },
  {
    question: 'How fast will I hear back?',
    answer: `After you apply, a CAP grants coordinator is assigned and contacts you by email within ${RESPONSE_HOURS} hours. Check inbox and spam. Reply on that thread.`,
  },
  {
    question: 'How do I know this site is official?',
    answer: `The official site is ${SITE_DOMAIN}. Official emails: ${CONTACT_EMAIL} (support/verify), ${APPLY_FROM_EMAIL} (application receipts), and ${COORDINATOR_EMAIL} (${COORDINATOR_NAME}, assigned after you apply). Contact ${CONTACT_EMAIL} if something looks wrong. Use Verify on this site for confirmation steps.`,
  },
  {
    question: 'Does applying cost money?',
    answer:
      'There is no application fee to submit through this site. Be cautious of anyone asking for payment to “unlock” or “speed up” a CAP file outside official instructions from your coordinator.',
  },
];

export function buildFaqPageJsonLd(items = faqItems) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}
