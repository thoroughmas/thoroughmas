import { defineCollection, z } from 'astro:content';
import { formatTag } from '../utils/formatTags';

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        seoTitle: z.string().optional(),
        description: z.union([z.string(), z.null()]).default("No description provided."),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string())
            .optional()
            .transform(tags => tags?.map(formatTag)),
        coverImage: z.union([image(), z.null()]).optional(),
        listed: z.boolean().optional().default(true),
        featured: z.boolean().optional().default(false),  // Add explicit type for featured
    }).transform((data) => {
        console.log(`Parsing post: ${data.title}`);
        console.log(`Featured value: ${data.featured}`);
        return data;
    }),
});

export const collections = { blog };