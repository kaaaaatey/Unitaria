// Content collections. All site copy lives in /content as markdown or MDX,
// so text can change without touching code. Fields that are still open in the
// World Bible are optional: leave them out rather than inventing them.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const layer = z.enum(['public', 'pitch']);

const realms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/realms' }),
  schema: ({ image }) => z.object({
    name: z.string(),
    order: z.number(), // 1–10, as in the World Bible map table
    continuent: z.enum(['Amerope', 'Afriopia', 'Asioralia']),
    fused: z.string(),
    terrain: z.string(),
    duality: z.tuple([z.string(), z.string()]),
    dualityTagline: z.string().optional(),
    north: z.object({ value: z.string(), motto: z.string(), translation: z.string() }),
    profile: z.boolean().default(false), // true once a full realm profile is decided
    // Optional photography for a realm profile: one wide establishing shot, an intro, and its signature places.
    hero: z.object({ image: image(), alt: z.string() }).optional(),
    intro: z.array(z.string()).optional(),
    placesHeading: z.string().optional(),
    places: z.array(z.object({ name: z.string(), tagline: z.string().optional(), text: z.string(), image: image(), alt: z.string() })).optional(),
  }),
});

const named = z.object({ name: z.string(), text: z.string() });
const houses = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/houses' }),
  schema: z.object({
    name: z.enum(['Polaris', 'Aurora', 'Lyra', 'Orion']),
    direction: z.enum(['North', 'East', 'South', 'West']),
    bearing: z.string(), // e.g. 90°N
    rule: z.string(),
    creed: z.string(),
    motto: z.string(),
    mottoTranslation: z.string(),
    element: z.string(),
    season: z.string(),
    colours: z.array(z.string()),
    theme: z.object({ bg: z.string(), fg: z.string(), accent: z.string() }), // lookbook page colours
    mood: z.string().optional(),
    crest: z.string(),
    creature: z.string(),
    mascot: z.object({ name: z.string(), creature: z.string(), description: z.string().optional() }),
    campusAnimals: z.string().optional(),
    relic: z.string().optional(),
    flower: z.string(),
    gemstone: z.string(),
    pin: z.string(),
    best: z.string(),
    worst: z.string(),
    stereotype: z.string(),
    founder: z.string(),
    head: z.string(),
    alumni: z.string(),
    wing: z.string(),
    commonRoom: z.string(),
    signatureSpace: z.string(),
    hall: z.string(),
    welcome: named,
    oath: z.string(),
    chant: z.string(),
    celebration: named,
    secret: z.string(),
    pointsFrom: z.string(),
    event: named,
    rivals: z.string(),
    cause: z.string(),
    nickname: z.string(),
    merch: z.string(),
    youKnow: z.string(),
  }),
});

const fellows = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/fellows' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    order: z.number().default(0),
  }),
});

// Free-form public pages (Home, The World, The Band, Life in Unitaria...).
const pages = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    layer: layer.default('public'),
    eyebrow: z.string().optional(),
    lede: z.string().optional(),
    // Structured sections for designed pages (The Band, Life in Unitaria, Fellows).
    sections: z.array(z.object({
      id: z.string().optional(),
      eyebrow: z.string().optional(),
      heading: z.string(),
      text: z.string().optional(),
      items: z.array(z.object({ title: z.string(), text: z.string(), tag: z.string().optional() })).optional(),
    })).optional(),
  }),
});

// The pitch layer, in Katey's own voice. Spoilers allowed, behind a warning.
const pitch = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/pitch' }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    spoilers: z.boolean().default(false),
  }),
});

// Home page sections, one markdown file each, in order. Copy uses only CANON.md facts.
const home = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/home' }),
  schema: z.object({
    order: z.number(),
    eyebrow: z.string().optional(),
    heading: z.string(),
    subheading: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    timeline: z.array(z.object({ when: z.string(), title: z.string(), text: z.string() })).optional(),
    steps: z.array(z.object({ id: z.string(), when: z.string(), title: z.string(), text: z.string() })).optional(),
    cta: z.object({ label: z.string(), href: z.string(), live: z.boolean().default(false) }).optional(),
  }),
});

// The Compass quiz. Every answer is drawn from house canon (CANON.md); Katey owns the wording.
const houseName = z.enum(['Polaris', 'Aurora', 'Lyra', 'Orion']);
const compass = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/compass' }),
  schema: z.object({
    intro: z.string(),
    lede: z.string().optional(),
    questions: z.array(z.object({
      q: z.string(),
      answers: z.array(z.object({ text: z.string(), house: houseName })).length(4),
    })),
  }),
});

// The House Shop and Exhibition seats: points prices are drafts for Katey.
const item = z.object({ name: z.string(), points: z.number(), text: z.string(), digital: z.boolean().optional() });
const shop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/shop' }),
  schema: z.object({
    heading: z.string(),
    eyebrow: z.string().optional(),
    lede: z.string(),
    houses: z.record(houseName, z.array(item)).optional(),
    academy: z.object({ heading: z.string(), items: z.array(item) }).optional(),
    online: z.array(item).optional(),
    inPerson: z.array(item).optional(),
    finePrint: z.string(),
  }),
});

export const collections = { realms, houses, fellows, pages, pitch, home, compass, shop };
