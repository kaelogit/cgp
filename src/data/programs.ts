export type CapProgram = {
  slug: string;
  title: string;
  summary: string;
  details: string;
  who: string;
  accent?: 'red' | 'gold' | 'teal' | 'accent';
};

export const CAP_PROGRAMS: CapProgram[] = [
  {
    slug: 'community',
    title: 'Community projects',
    summary: 'Neighborhood and civic initiatives that strengthen local opportunity.',
    who: 'Individuals, community groups, nonprofit partners, and teams leading local projects.',
    details:
      'CAP supports community-led work — from neighborhood revitalization to public-space improvements and local service programs. Describe the project, who benefits, and how a CAP grant would be used. Awards are grants, not loans.',
    accent: 'red',
  },
  {
    slug: 'business',
    title: 'Small business growth',
    summary: 'Capital for founders and operators expanding American enterprise.',
    who: 'Entrepreneurs, independent operators, and growing small businesses.',
    details:
      'CAP Grants can fund equipment, inventory, storefront improvements, staffing start-up costs, and expansion plans. Tell us what stage you are in and how the funds unlock growth. This is grant support — not a business loan.',
    accent: 'accent',
  },
  {
    slug: 'education',
    title: 'Education & skills',
    summary: 'Tuition, training, credentials, and tools for the next step.',
    who: 'Students, career changers, educators, and adults investing in skills.',
    details:
      'Support for tuition, certification, books, tools, and related costs. CAP awards are grants — not student loans. Explain the program and how completing it advances your goals.',
    accent: 'gold',
  },
  {
    slug: 'housing',
    title: 'Housing stability',
    summary: 'Support toward home purchase, repairs, or keeping stable housing.',
    who: 'Households working toward ownership or protecting the home they have.',
    details:
      'CAP reviews housing-related grant requests for purchase costs, critical repairs, and stability needs. Describe the situation and how a one-time grant would help. Awards are grants, not mortgages.',
    accent: 'teal',
  },
  {
    slug: 'medical',
    title: 'Medical costs',
    summary: 'Treatment, hospital, pharmacy, and related care expenses.',
    who: 'Individuals and families with medical costs that remain unpaid.',
    details:
      'CAP Grants can help with hospital bills, ongoing treatment, prescriptions, and recovery costs. Explain the care needed and how the award would be applied. Selected awards are grants, not medical loans.',
    accent: 'red',
  },
  {
    slug: 'civic',
    title: 'Civic & policy engagement',
    summary: 'Projects that expand participation and informed public life.',
    who: 'Individuals, organizers, educators, and teams building civic capacity.',
    details:
      'CAP funds civic education, voter engagement infrastructure, and public-interest projects aligned with opportunity and progress. Outline goals, audience, and measurable outcomes.',
    accent: 'accent',
  },
  {
    slug: 'seniors',
    title: 'Seniors & retirees',
    summary: 'Practical support for older adults and retired households.',
    who: 'Seniors and retirees with medical, housing, or personal goals.',
    details:
      'Older adults may apply for medical, housing, utilities, or general grant support. Applications are reviewed individually. Awards are grants, not loans.',
    accent: 'gold',
  },
  {
    slug: 'general',
    title: 'General grants',
    summary: 'When your goal spans categories — or does not fit a single box.',
    who: 'Anyone 18 or older with a clear purpose and a plain explanation.',
    details:
      'If your request crosses programs — or is unique — apply here. Write what you want to fund, what you have already arranged, and how a CAP grant would be used. Completeness matters more than perfect wording.',
    accent: 'teal',
  },
];

/** Alias for pages that still import GRANT_PROGRAMS */
export const GRANT_PROGRAMS = CAP_PROGRAMS;
export type GrantProgram = CapProgram;
