export default {
  collections: {
    blog: {
      label: 'Blog Posts',
      path: 'src/content/blog/**',
      format: 'folder',
      schema: {
        title: { label: 'Title', type: 'text' },
        pubDate: { label: 'Date', type: 'date' },
        description: { label: 'Description', type: 'textarea' },
        tags: { label: 'Tags', type: 'array', item: { type: 'text' } },
        listed: { label: 'Listed', type: 'boolean' },
        featured: { label: 'Featured', type: 'boolean' },
      }
    }
  }
}
