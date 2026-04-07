import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';
import { createImageMap } from '../utils/imageMap';

export async function GET(context) {
	const posts = await getCollection('blog')
		.then((posts) => posts.filter((post) => post.data.listed !== false))
		.then((posts) => posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()))
		.then((posts) => posts.slice(0, 20));

	const siteUrl = context.site?.toString().replace(/\/$/, '') || '';
	const imageMap = await createImageMap();

	// Create a renderer specifically for RSS content
	const createRssRenderer = () => {
		const renderer = new marked.Renderer();

		renderer.image = (href, title, text) => {
			try {
				const imagePath = typeof href === 'object' ? href.href : href;
				if (!imagePath) return '';

				if (typeof imagePath === 'string' && imagePath.startsWith('http')) {
					return `<img src="${imagePath}" alt="${text || ''}" />`;
				}

				const originalName = imagePath.replace('./', '').split('.')[0];
				const hashedPath = imageMap.get(originalName);
				if (hashedPath) {
					return `<img src="${hashedPath}" alt="${text || ''}" />`;
				}

				const cleanPath = typeof imagePath === 'string' ? imagePath.replace('./', '') : '';
				return `<img src="${siteUrl}/_astro/${cleanPath}" alt="${text || ''}" />`;
			} catch (error) {
				console.error('Error processing image:', error, { href, title, text });
				return '';
			}
		};

		return renderer;
	};

	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => {
			const renderer = createRssRenderer();
			// In Astro 6 Content Layer, post.body still contains the raw markdown string
			const content = marked(post.body || '', {
				renderer,
				mangle: false,
				headerIds: false
			});

			const coverImageHtml = post.data.coverImage?.src ? `<img src="${post.data.coverImage.src}" alt="${post.data.title}" />` : '';

			const fullContent = `
                <div class="post-content">
                    ${coverImageHtml}
                    ${content}
                </div>
            `;

			return {
				title: post.data.title,
				pubDate: post.data.pubDate,
				description: post.data.description || '',
				// Changed post.slug to post.data.slug
				link: `${siteUrl}/posts/${post.data.slug}/`,
				content: fullContent,
				...(post.data.tags && {
					categories: post.data.tags
				}),
				...(post.data.updatedDate && {
					customData: `<updated>${post.data.updatedDate.toUTCString()}</updated>`
				})
			};
		}),
		customData: `
            <language>en-us</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        `
	});
}
