import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local'
	},

	collections: {
		posts: collection({
			label: 'Posts',
			slugField: 'title',
			path: 'src/content/blog/*/index',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Title' } }),
				slug: fields.text({
					label: 'URL Slug',
					description: 'Overrides the default folder-based slug. Important for legacy posts.'
				}),
				seoTitle: fields.text({ label: 'SEO Title' }),
				description: fields.text({
					label: 'Description',
					multiline: true
				}),
				pubDate: fields.date({
					label: 'Published Date',
					validation: { isRequired: true },
					defaultValue: { kind: 'today' }
				}),
				updatedDate: fields.date({ label: 'Updated Date' }),
				tags: fields.array(fields.text({ label: 'Tag' }), {
					label: 'Tags',
					itemLabel: (props) => props.value
				}),
				coverImage: fields.image({
					label: 'Cover Image',
					directory: 'src/content/blog',
					publicPath: './'
				}),
				listed: fields.checkbox({
					label: 'Listed',
					defaultValue: true
				}),
				featured: fields.checkbox({
					label: 'Featured',
					defaultValue: false
				}),
				content: fields.document({
					label: 'Content',
					formatting: true,
					dividers: true,
					links: true,
					images: {
						directory: 'src/content/blog',
						publicPath: './'
					}
				})
			}
		})
	}
});
