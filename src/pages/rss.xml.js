import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked'; // This helps convert markdown to HTML

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: "Thomas Midena's blog",
		description: "Generally genuinely enthusiastic",
		site: context.site,
		items: await Promise.all(
            posts.map(async (post) => {
                // Convert markdown content to HTML
                const content = await marked.parse(post.body);
                
                return {
                    link: `/${post.slug}/`,
                    title: post.data.title,
                    description: post.data.description,
                    pubDate: post.data.pubDate,
                    content, // Full post content
                    categories: post.data.tags || [], // Add tags as categories
                    author: SITE_TITLE, // Or your preferred author name
                }
            })
        ),
        customData: `
            <language>en-us</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        `,
    });
}