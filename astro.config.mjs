import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	site: 'https://thomid.me',
	integrations: [mdx(), sitemap(), partytown()],

	markdown: {
		extendDefaultPlugins: true,
		rehypePlugins: [
			[
				autoNewTabExternalLinks,
				{
					domain: 'https://thomid.me'
				}
			]
		]
	},

	vite: {
		// We merge the Tailwind plugin here
		plugins: [tailwindcss()],

		// And keep your alias settings here
		resolve: {
			alias: {
				'@src': new URL('./src', import.meta.url).pathname
			}
		}
	}
});
