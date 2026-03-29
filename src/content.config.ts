import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string().default('밧데리몬스터 max'),
    category: z.enum(['emergency', 'tips', 'maintenance', 'news']),
    tags: z.array(z.string()).default([]),
    readingTime: z.string().optional(),
    featured: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
