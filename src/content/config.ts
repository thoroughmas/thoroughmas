import { defineCollection, z } from 'astro:content';
import { formatTag } from '../utils/formatTags'; 

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        seoTitle: z.string().optional(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.array(z.string())
            .optional()
            .transform(tags => tags?.map(formatTag)), // Transform tags here
        coverImage: image()
            .refine((img) => img.width >= 960, {
                message: 'Cover image must be at least 960 pixels wide!'
            })
            .optional()
    }),
});

export const collections = { blog };