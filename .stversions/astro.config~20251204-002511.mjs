import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { autoNewTabExternalLinks } from './src/autoNewTabExternalLinks';
import partytown from '@astrojs/partytown';
import nodeAdapter from '@astrojs/node';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

export default defineConfig({
	site: 'https://thomid.me',
	integrations: [mdx(), sitemap(), partytown(), react(), markdoc(), keystatic()],
	adapter: nodeAdapter({ mode: 'ssr' }),
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
		resolve: {
			alias: {
				'@src': new URL('./src', import.meta.url).pathname
			}
		}
	}
});
