// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale: 'zh-tw',
		locales: ['zh-tw', 'en'],
		routing: {
			prefixDefaultLocale: false,
			fallbackType: 'redirect',
		},
		fallback: {
			en: 'zh-tw',
		},
	},
});
