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
                // Create renderer for each post to have access to post slug
                const renderer = new marked.Renderer();
                renderer.image = (href = '', title = '', text = '') => {
                    // Ensure href is a string and handle the path
                    const imagePath = String(href);
                    const absoluteUrl = imagePath.startsWith('http') 
                        ? imagePath 
                        : `${context.site}/${post.slug}/${imagePath}`;
                    return `<img src="${absoluteUrl}" alt="${text}" title="${title}" />`;
                };

                const content = await marked.parse(post.body, { renderer });
                
                return {
                    link: `/${post.slug}/`,
                    title: post.data.title,
                    description: post.data.description,
                    pubDate: post.data.pubDate,
                    content: `<![CDATA[${content}]]>`,
                    categories: post.data.tags || [],
                    author: SITE_TITLE
                };
            })
        ),
        customData: `
            <language>en-us</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        `
    });
}