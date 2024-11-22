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
    // Log the first image reference from the markdown if any
    firstImage: posts[0].body.match(/!\[.*?\]\((.*?)\)/)
});

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
                        
                        // Extract the post directory name from the slug
                        const postDir = post.id.split('/')[0];
                        
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
                const content = await marked.parse(post.body, { 
                    renderer,
                    mangle: false,
                    headerIds: false
                });
                
                // Handle cover image
                let coverImageHtml = '';
                if (post.data.coverImage) {
                    try {
                        const coverImageSrc = typeof post.data.coverImage === 'string' 
                            ? post.data.coverImage.replace(/^\.\//, '')
                            : post.data.coverImage?.src?.replace(/^\.\//, '') || '';
                            
                        if (coverImageSrc) {
                            const coverImageUrl = `${siteUrl}/_astro/${coverImageSrc}`;
                            coverImageHtml = `<img src="${coverImageUrl}" alt="${post.data.title}" class="cover-image" />`;
                        }
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