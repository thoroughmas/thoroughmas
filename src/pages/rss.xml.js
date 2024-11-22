import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';

    // Regex to capture images in the markdown content
    const imageRegex = /!\[.*?\]\((.*?)\)/g;

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                const content = marked(post.body);
                
                // Handle inline images from markdown
                let inlineImages = [];
                let match;
                while ((match = imageRegex.exec(post.body)) !== null) {
                    const imgSrc = match[1].replace(/^\.\//, ''); // Clean the path
                    const fullImageUrl = imgSrc.startsWith('http') 
                        ? imgSrc 
                        : `${siteUrl}/_astro/${imgSrc}`; // Construct full URL
                    inlineImages.push(fullImageUrl);
                }

                // Combine cover image and inline images for content
                const coverImage = post.data.coverImage?.src ? `<img src="${post.data.coverImage.src}" alt="" />` : '';
                const allImages = [coverImage, ...inlineImages].filter(Boolean).map(src => `<img src="${src}" alt="" />`).join('');

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