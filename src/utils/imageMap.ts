import { getCollection } from 'astro:content';

export async function createImageMap() {
  const imageMap = new Map();
  
  try {
    const posts = await getCollection('blog');
    
    for (const post of posts) {
      // Get all images from the post's folder
      const images = import.meta.glob('/src/content/blog/**/*.{png,jpg,jpeg,gif,webp}', {
        eager: true,
        import: 'default'
      });

      // Create mappings for each image
      Object.entries(images).forEach(([path, imageModule]: [string, any]) => {
        if (path.includes(post.slug)) {
          const originalName = path.split('/').pop()?.split('.')[0];
          const hashedSrc = imageModule.src;
          if (originalName) {
            imageMap.set(originalName, hashedSrc);
          }
        }
      });
    }
  } catch (error) {
    console.error('Error creating image map:', error);
  }

  return imageMap;
}