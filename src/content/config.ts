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
            .transform(tags => tags?.map(formatTag)),
        coverImage: z.union([image(), z.null()])
            .optional()
            .refine((img) => img ? img.width >= 960 : true, {
                message: 'Cover image must be at least 960 pixels wide!'
            })
    }),
});

export const collections = { blog };