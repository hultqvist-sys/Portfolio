/**
 * Companies shown in the "Some of companies I've worked with..." section.
 *
 * ── HOW TO SWAP IN REAL CONTENT ─────────────────────────────────────────────
 *
 * 1. LONG DESCRIPTION — replace `longBlurb` with your real copy.
 *    Aim for roughly 140-160 characters so the card doesn't overflow.
 *    Delete the `isPlaceholder: true` line once you've written it.
 *
 * 2. EXPANDED IMAGE — drop the file into
 *    `public/assets/images/company images/` and set `expandedImage` to its
 *    path, e.g. '/assets/images/company images/Volvo expanded.png'
 *
 *    While `expandedImage` is null the card expands with a solid
 *    `placeholderColor` background instead, so nothing looks broken.
 *
 * Nothing else needs changing — no component edits required.
 * ────────────────────────────────────────────────────────────────────────────
 */

const LOGO_DIR = '/assets/images/company images'

export const companies = [
  {
    id: 'atlassian',
    name: 'Atlassian',
    logo: `${LOGO_DIR}/Atlassian logo.svg`,
    shortBlurb: 'Learning education and data security.',
    longBlurb:
      'Designed learning and community experiences at Atlassian, leading UX across platform migrations, live training, and scalable event discovery.',
    expandedImage: `${LOGO_DIR}/Atlassian expanded.png`,
    placeholderColor: '#1D3B6E',
  },
  {
    id: 'volvo',
    name: 'Volvo',
    logo: `${LOGO_DIR}/Volvo logo.svg`,
    shortBlurb: 'In-car console UX design and wireless charging',
    longBlurb:
      'Placeholder copy — describe your in-car console work here, covering interaction design for the centre display and the wireless charging experience.',
    isPlaceholder: true,
    expandedImage: null,
    placeholderColor: '#1F3A4D',
  },
  {
    id: 'dell',
    name: 'Dell',
    logo: `${LOGO_DIR}/Dell logo.svg`,
    shortBlurb: 'Cloud networking management tools',
    longBlurb:
      'Placeholder copy — describe your cloud networking work here, covering the management console, monitoring dashboards, and enterprise admin flows.',
    isPlaceholder: true,
    expandedImage: null,
    placeholderColor: '#123A5C',
  },
  {
    id: 'att',
    name: 'AT&T',
    logo: `${LOGO_DIR}/ATT logo.svg`,
    shortBlurb: 'User research for cybersecurity software',
    longBlurb:
      'Placeholder copy — describe your cybersecurity research here, covering the studies you ran, the threat-detection tooling, and what shipped as a result.',
    isPlaceholder: true,
    expandedImage: null,
    placeholderColor: '#0F4C81',
  },
  {
    id: 'extreme',
    name: 'Extreme Networks',
    logo: `${LOGO_DIR}/Extreme networks logo.svg`,
    shortBlurb: 'Building design systems and SAAS solutions',
    longBlurb:
      'Placeholder copy — describe your design systems work here, covering the component library you built, adoption across teams, and the SaaS products it served.',
    isPlaceholder: true,
    expandedImage: null,
    placeholderColor: '#3B2A63',
  },
]
