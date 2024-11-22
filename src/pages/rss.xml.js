import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';

    // Debug info
    console.log('Example post data:', {
        id: posts[0].id,
        slug: posts[0].slug,
        coverImage: posts[0].data.coverImage,
        firstImage: posts[0].body.match(/!\[.*?\]\((.*?)\)/)
    });

    // Add this regex to capture images in the markdown content
    const imageRegex = /!\[.*?\]\((.*?)\)/g;

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                // Create renderer for each post
                const renderer = new marked.Renderer();

                // Handle images with proper null checking
                renderer.image = (href, title, text) => {
                    if (!href) return '';

                    try {
                        // If it's already a full URL, use it as is
                        if (typeof href === 'string' && href.startsWith('http')) {
                            return `<img src="${href}" alt="${text || ''}" title="${title || ''}" />`;
                        }

                        // For local images, use the full optimized path
                        const filename = typeof href === 'string' ? href.replace(/^\.\//, '') : '';
                        const imageUrl = `${siteUrl}/_astro/${filename}`;

                        return `<img src="${imageUrl}" alt="${text || ''}" title="${title || ''}" />`;
                    } catch (error) {
                        console.warn('Error processing image:', error, { href, title, text });
                        return '';
                    }
                };

                // Parse the content
                const content = marked(post.body, { 
                    renderer,
                    mangle: false,
                    headerIds: false
                });

                // Handle inline images from markdown
                let inlineImages = [];
                let match;
                while ((match = imageRegex.exec(post.body)) !== null) {
                    const imgSrc = match[1].replace(/^\.\//, ''); // Clean the path
                    inlineImages.push(`${siteUrl}/_astro/${imgSrc}`);
                }

                // Combine cover image and inline images for content
                const allImages = [post.data.coverImage?.src, ...inlineImages].filter(Boolean).map(src => `<img src="${src}" alt="" />`).join('');

                const fullContent = `
                    <div class="post-content">
                        ${allImages}
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