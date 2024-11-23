import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import { marked } from 'marked';
import { createImageMap } from '../utils/imageMap';

export async function GET(context) {
  try {
    const posts = await getCollection('blog');
    const siteUrl = context.site?.toString().replace(/\/$/, '') || '';
    const imageMap = await createImageMap();

    console.log('=== RSS GENERATION DIAGNOSTICS ===');
    console.log('Total Posts:', posts.length);
    console.log('Site URL:', siteUrl);
    console.log('Site Title:', SITE_TITLE);
    console.log('Site Description:', SITE_DESCRIPTION);

    // Detailed logging for each post
    const processedPosts = posts.map((post, index) => {
      console.log(`\nPost ${index + 1} Details:`);
      console.log('Title:', post.data.title);
      console.log('Description:', post.data.description);
      console.log('Pub Date (raw):', post.data.pubDate);
      console.log('Pub Date Type:', typeof post.data.pubDate);
      console.log('Pub Date Instance of Date:', post.data.pubDate instanceof Date);

      // Explicit date conversion with error handling
      let pubDate;
      try {
        pubDate = post.data.pubDate instanceof Date 
          ? post.data.pubDate 
          : new Date(post.data.pubDate);
        console.log('Converted Pub Date:', pubDate.toISOString());
      } catch (dateError) {
        console.error(`Error converting date for post ${index + 1}:`, dateError);
        pubDate = new Date(); // Fallback to current date
      }

      return {
        title: String(post.data.title || 'Untitled Post'),
        description: String(post.data.description || 'No description'),
        pubDate: pubDate,
        link: `${siteUrl}/${post.slug}/`,
      };
    });

    console.log('\n=== Processed Posts ===');
    console.log(JSON.stringify(processedPosts, null, 2));

    return rss({
      title: SITE_TITLE,
      description: SITE_DESCRIPTION,
      site: context.site,
      items: processedPosts,
    });
  } catch (error) {
    console.error('CRITICAL RSS GENERATION ERROR:', error);
    throw error;
  }
}