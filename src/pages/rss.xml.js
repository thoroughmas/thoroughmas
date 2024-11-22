import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';

export async function GET(context) {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';

    const renderer = new marked.Renderer();
    renderer.image = (hrefObj, title, text) => {
        const href = hrefObj.href || ''; // Extract href from the object
        console.log('Image href:', href); // Log the href value

        if (!href || typeof href !== 'string') {
            console.warn('Invalid image href:', hrefObj);
            return '';
        }

        if (href.startsWith('http')) {
            return `<img src="${href}" alt="${text || ''}" title="${title || ''}" />`;
        }

        const filename = href.replace(/^\.\//, '');
        const imageUrl = `${siteUrl}/_astro/${filename}`;
        return `<img src="${imageUrl}" alt="${text || ''}" title="${title || ''}" />`;
    };

    return rss({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        site: context.site,
        items: await Promise.all(
            posts.map(async (post) => {
                const content = marked(post.body, { 
                    renderer,
                    mangle: false,
                    headerIds: false
                });

                const coverImageUrl = typeof post.data.coverImage === 'string' 
                    ? `${siteUrl}/_astro/${post.data.coverImage.replace(/^\.\//, '')}`
                    : '';

                const fullContent = `
                    <div class="post-content">
                        ${coverImageUrl ? `<img src="${coverImageUrl}" alt="" />` : ''}
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