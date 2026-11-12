/**
 * Single source of truth for site content.
 * Edit copy, navigation, and per-persona details here — the layout, navbar,
 * footer, home sections, and persona pages all read from this file.
 */

export const site = {
  name: 'Nadia Nathania',
  /** Wordmark shown in the navbar / footer. */
  brand: 'nadidthat*',
  shortName: 'Nadia',
  roles: ['Doctor', 'Designer', 'Illustrator', 'Writer'] as const,
  tagline: 'Doctor · Designer · Writer',
  description:
    'A medical doctor, writer, designer, and illustrator passionate about mental health and providing holistic, purposeful, and personalized solutions.',
  email: 'nadidthat@gmail.com',
  social: {
    linkedin: {
      label: 'Nadia Nathania',
      url: 'https://www.linkedin.com/in/nadia-nathania-398374342',
    },
  },
} as const;

export type PersonaSlug =
  'clinical-work-and-research' | 'illustration-and-design' | 'creative-writing';

export interface WorkItem {
  title: string;
  meta: string;
  description: string;
}

export interface Persona {
  slug: PersonaSlug;
  /** Nav / label, e.g. "Doctor". */
  label: string;
  /** Page eyebrow, e.g. "The Doctor". */
  kicker: string;
  /** One-line summary used in menus and the home about brief. */
  blurb: string;
  /** Category name as it appears in the home "Selected works" list. */
  workCategory: string;
  /** Persona page hero sentence. */
  intro: string;
  /** Persona page body paragraphs. */
  body: string[];
  /** Placeholder selected works for the persona page. */
  works: WorkItem[];
}

export const personas: Persona[] = [
  {
    slug: 'clinical-work-and-research',
    label: 'Clinical Work and Research',
    kicker: 'The Doctor',
    blurb: 'Medical practice grounded in holistic, patient-centered care.',
    workCategory: 'Clinical Work and Research',
    intro:
      'A medical doctor practicing holistic, patient-centered care with a focus on mental health and whole-person wellbeing.',
    body: [
      'Placeholder bio. Nadia approaches medicine as a deeply human practice — listening first, treating the person rather than the symptom, and designing care that fits each patient’s life.',
      'This page is a work in progress. Replace this copy with real clinical experience, areas of focus, publications, and the kind of care patients can expect.',
    ],
    works: [
      {
        title: 'Community Mental Health Initiative',
        meta: 'Clinical · 2024',
        description:
          'Placeholder — a program bringing accessible mental health screening and support to underserved communities.',
      },
      {
        title: 'Whole-Person Care Framework',
        meta: 'Research · 2023',
        description:
          'Placeholder — research into integrating physical and psychological care into a single treatment plan.',
      },
      {
        title: 'Patient Education Series',
        meta: 'Practice · Ongoing',
        description:
          'Placeholder — plain-language resources helping patients understand and take part in their own care.',
      },
    ],
  },
  {
    slug: 'illustration-and-design',
    label: 'Illustration and Design',
    kicker: 'The Designer',
    blurb: 'Illustration and design that make complex ideas feel human.',
    workCategory: 'Illustration and Design',
    intro:
      'A designer and illustrator translating complex, clinical ideas into work that feels warm, clear, and human.',
    body: [
      'Placeholder bio. Nadia designs at the intersection of medicine and empathy — visual systems, illustrations, and interfaces that make hard information approachable.',
      'This page is a work in progress. Replace this copy with real projects, disciplines, tools, and the design philosophy behind the work.',
    ],
    works: [
      {
        title: 'Health Literacy Illustration Set',
        meta: 'Illustration · 2024',
        description:
          'Placeholder — an illustrated library explaining medical concepts to non-specialist audiences.',
      },
      {
        title: 'Clinic Brand & Wayfinding',
        meta: 'Identity · 2023',
        description:
          'Placeholder — a calm, legible visual identity and signage system for a care setting.',
      },
      {
        title: 'Editorial Illustration',
        meta: 'Illustration · Ongoing',
        description:
          'Placeholder — commissioned illustrations accompanying essays on health and mind.',
      },
    ],
  },
  {
    slug: 'creative-writing',
    label: 'Creative Writing',
    kicker: 'The Writer',
    blurb: 'Essays and stories on mind, medicine, and meaning.',
    workCategory: 'Creative Writing',
    intro:
      'A writer exploring the space between mind and medicine — essays, reflections, and stories about being human.',
    body: [
      'Placeholder bio. Nadia writes to make sense of what she sees in the clinic and the world — bringing a doctor’s precision and an artist’s eye to the page.',
      'This page is a work in progress. Replace this copy with real published pieces, themes, and links to selected writing.',
    ],
    works: [
      {
        title: 'On Listening',
        meta: 'Essay · 2024',
        description:
          'Placeholder — an essay on what medicine taught the author about attention and care.',
      },
      {
        title: 'Notes from the Ward',
        meta: 'Series · 2023',
        description: 'Placeholder — short reflective pieces from the front lines of patient care.',
      },
      {
        title: 'Short Fiction',
        meta: 'Fiction · Ongoing',
        description:
          'Placeholder — stories that sit at the meeting point of body, mind, and memory.',
      },
    ],
  },
];

export function getPersona(slug: PersonaSlug): Persona {
  const persona = personas.find((p) => p.slug === slug);
  if (!persona) throw new Error(`Unknown persona: ${slug}`);
  return persona;
}

/** Navigation model consumed by the Navbar (and mobile drawer). */
export interface NavLink {
  label: string;
  href: string;
  /** present → renders as a dropdown of persona links. */
  children?: { label: string; href: string }[];
}

export const navLinks: NavLink[] = [
  { label: 'about me', href: '/#about-me' },
  {
    label: 'selected works',
    href: '/#selected-works',
    // @todo uncomment once persona pages have updated
    // children: personas.map((p) => ({
    //   label: p.label,
    //   href: `/${p.slug}`,
    // })),
  },
  { label: 'contact me', href: '/#contact-me' },
];
