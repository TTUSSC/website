export const ui = {
	'zh-tw': {
		'nav.home': '首頁',
		'nav.about': '關於',
		'nav.member': '成員',
		'nav.lecture': '社課',
		'nav.event': '活動',
		'nav.sponsor': '贊助我們',
		'site.name': '科學開源服務社',
	},
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.member': 'Members',
		'nav.lecture': 'Lectures',
		'nav.event': 'Events',
		'nav.sponsor': 'Sponsor Us',
		'site.name': 'TTUSSC',
	},
} as const;

export type Lang = keyof typeof ui;

export function getLang(locale: string | undefined): Lang {
	return (locale ?? 'zh-tw') as Lang;
}

export function useTranslations(lang: Lang) {
	return (key: keyof (typeof ui)['zh-tw']) => ui[lang][key] ?? ui['zh-tw'][key];
}
