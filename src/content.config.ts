// Content collections. All site copy lives in /content as markdown or MDX,
// so text can change without touching code. Fields that are still open in the
// World Bible are optional: leave them out rather than inventing them.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const layer = z.enum(['public', 'pitch']);

const realms = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './content/realms' }),
  schema: z.object({
    name: z.string(),
    order: z.number(), // 1–10, as in the World Bible map table
    continuent: z.enum(['Amerope', 'Afriopia', 'Asioralia']),
    fused: z.string(),
    terrain: z.string(),
    duality: z.tuple([z.string(), z.string()]),
    north: z.object({ value: z.string(), motto: z.string(), translation: z.string() }),
    profile: z.boolean().default(false), // true once a full realm profile is decided
  }),
});

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
    mascot: z.object({ name: z.string(), creature: z.string() }),
    colours: z.array(z.string()),
    chant: z.string().optional(),
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
    cta: z.object({ label: z.string(), href: z.string(), live: z.boolean().default(false) }).optional(),
  }),
});

export const collections = { realms, houses, fellows, pages, pitch, home };
