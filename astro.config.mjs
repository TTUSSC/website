// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://ttussc.org',
	i18n: {
		defaultLocale: 'zh-tw',
		locales: ['zh-tw', 'en'],
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'rewrite',
		},
		fallback: {
			en: 'zh-tw',
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'zh-tw',
				locales: {
					'zh-tw': 'zh-TW',
					en: 'en',
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
