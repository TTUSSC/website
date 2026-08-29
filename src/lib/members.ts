import { getCollection, type CollectionEntry } from 'astro:content';

// Formal/financial-style numerals (壹貳參...), matching the old site's
// hardcoded year labels (e.g. `14` -> `第拾肆屆`, `10` -> `第拾屆`).
const DIGITS = ['', '壹', '貳', '參', '肆', '伍', '陸', '柒', '捌', '玖'];

function chineseNumeral(n: number): string {
	if (n < 10) return DIGITS[n];
	const tens = Math.floor(n / 10);
	const ones = n % 10;
	const tensPart = tens === 1 ? '拾' : `${DIGITS[tens]}拾`;
	return ones === 0 ? tensPart : `${tensPart}${DIGITS[ones]}`;
}

/** Formats a year id like `14` as `第拾肆屆` using formal Chinese numerals. */
export function yearLabel(year: string): string {
	return `第${chineseNumeral(Number(year))}屆`;
}

/**
 * Groups all member entries by year (derived from the entry id's leading
 * path segment), sorted newest-first across years and by `order` within
 * each year.
 */
export async function groupMembersByYear() {
	const members = await getCollection('members');
	const byYear = new Map<string, CollectionEntry<'members'>[]>();
	for (const entry of members) {
		const [year] = entry.id.split('/');
		if (!byYear.has(year)) byYear.set(year, []);
		byYear.get(year)!.push(entry);
	}
	const allYears = [...byYear.keys()].sort((a, b) => Number(b) - Number(a));
	for (const entries of byYear.values()) {
		entries.sort((a, b) => a.data.order - b.data.order);
	}
	return { byYear, allYears };
}
