import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                // Create renderer for post
                const renderer = new marked.Renderer();

                // Handle images
                renderer.image = (href, title, text) => {
                    try {
                        // Handle case where href is an object
                        const imagePath = typeof href === 'object' ? href.href : href;
                        
                        if (!imagePath) return '';

                        // If it's already a full URL, use it as is
                        if (typeof imagePath === 'string' && imagePath.startsWith('http')) {
                            return `<img src="${imagePath}" alt="${text || ''}" />`;
                        }

                        // For relative paths, use the site URL and _astro path
                        const cleanPath = typeof imagePath === 'string' ? imagePath.replace('./', '') : '';
                        return `<img src="${siteUrl}/_astro/${cleanPath}" alt="${text || ''}" />`;
                    } catch (error) {
                        console.error('Error processing image:', error, { href, title, text });
                        return '';
                    }
                };

                // Parse the content
                const content = marked(post.body, {
                    renderer,
                    mangle: false,
                    headerIds: false
                });

                // Handle the cover image
                const coverImageHtml = post.data.coverImage?.src 
                    ? `<img src="${post.data.coverImage.src}" alt="${post.data.title}" />`
                    : '';

                const fullContent = `
                    <div class="post-content">
                        ${coverImageHtml}
                        ${content}
                    </div>
                `;

                return {
                    link: `${siteUrl}/${post.slug}/`,
                    title: post.data.title,
                    description: post.data.description,
                    pubDate: post.data.pubDate,
                    content: fullContent,
                    categories: post.data.tags || [],
                    author: SITE_TITLE,
                    customData: post.data.updatedDate
                        ? `<updated>${post.data.updatedDate.toUTCString()}</updated>`
                        : ''
                };
            })
        ),
        customData: `
            <language>en-us</language>
            <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        `
    });
}
