import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';
import { formatTag } from './utils/formatTags';

const blog = defineCollection({
	loader: glob({
		pattern: '**/index.{md,mdx}',
		base: './src/content/blog'
	}),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			slug: z.string(),
			seoTitle: z.string().optional(),
			description: z.union([z.string(), z.null()]).default('No description provided.'),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			tags: z
				.array(z.string())
				.optional()
				.transform((tags) => tags?.map(formatTag)),
			coverImage: z.union([image(), z.null()]).optional(),
			listed: z.boolean().optional().default(true),
			featured: z.boolean().optional().default(false)
		})
});

export const collections = { blog };
