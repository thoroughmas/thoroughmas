import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString() || '';
    
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                // Create renderer for each post
                const renderer = new marked.Renderer();
                
                // Handle images - using post.slug to maintain relative paths
                renderer.image = (href = '', title = '', text = '') => {
                    const imagePath = String(href);
                    
                    // For images in the markdown content, they're relative to the post directory
                    const absoluteUrl = imagePath.startsWith('http') 
                        ? imagePath 
                        : new URL(`blog/${post.slug}/${imagePath}`, siteUrl).toString();
                    
                    return `<img src="${absoluteUrl}" alt="${text}" title="${title}" />`;
                };

                // Parse the content
                const content = await marked.parse(post.body, { 
                    renderer,
                    mangle: false,
                    headerIds: false
                });
                
                // Create the full content with cover image if present
                const fullContent = `
                    <div class="post-content">
                        ${post.data.coverImage ? 
                            `<img src="${new URL(`blog/${post.slug}/${post.data.coverImage.src}`, siteUrl)}" 
                                  alt="${post.data.title}" 
                                  class="cover-image" />` 
                            : ''}
                        ${content}
                    </div>
                `;

                return {
                    link: `${siteUrl}blog/${post.slug}/`,
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