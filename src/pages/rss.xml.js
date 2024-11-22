import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';
import { getImage } from 'astro:assets';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';
    
    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                // Create renderer for each post
                const renderer = new marked.Renderer();
                
                // Handle images with direct URLs
                renderer.image = (href, title, text) => {
                    // Ensure href is a string and not empty
                    const imgHref = String(href || '');
                    if (!imgHref) return '';
                    
                    const imgTitle = String(title || '');
                    const imgText = String(text || '');
                    
                    try {
                        // If it's already a full URL, use it as is
                        if (imgHref.match(/^https?:\/\//)) {
                            return `<img src="${imgHref}" alt="${imgText}" title="${imgTitle}" />`;
                        }
                        
                        // For local images, use the direct URL path
                        // Remove any leading ./ from the path
                        const cleanHref = imgHref.replace(/^\.\//, '');
                        
                        // Use the optimized image URL pattern from the site
                        const imageUrl = `${siteUrl}/_astro/${cleanHref}`;
                        
                        return `<img src="${imageUrl}" alt="${imgText}" title="${imgTitle}" />`;
                    } catch (error) {
                        console.warn('Error processing image:', error);
                        return '';
                    }
                };

                // Parse the content
                const content = await marked.parse(post.body, { 
                    renderer,
                    mangle: false,
                    headerIds: false
                });
                
                // Handle cover image
                let coverImageHtml = '';
                if (post.data.coverImage && post.data.coverImage.src) {
                    try {
                        // For cover images, use the full optimized URL
                        const coverImageUrl = `${siteUrl}/_astro/${post.data.coverImage.src}`;
                        coverImageHtml = `<img src="${coverImageUrl}" alt="${post.data.title}" class="cover-image" />`;
                    } catch (error) {
                        console.warn('Error processing cover image:', error);
                    }
                }

                const fullContent = `
                    <div class="post-content">
                        ${coverImageHtml}
                        ${content}
                    </div>
                `;

                return {
                    link: `${siteUrl}/blog/${post.slug}/`,
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