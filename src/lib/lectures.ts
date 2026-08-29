import { getCollection, type CollectionEntry } from 'astro:content';

/** Formats a semester id like `114-2` as `114 下學期`. */
export function semesterLabel(semester: string): string {
	const [year, term] = semester.split('-');
	return `${year} ${term === '1' ? '上' : '下'}學期`;
}

/**
 * Groups all lecture entries by semester (derived from the entry id's
 * leading path segment), sorted newest-first both across semesters and
 * within each semester's entries.
 */
export async function groupLecturesBySemester() {
	const lectures = await getCollection('lectures');
	const bySemester = new Map<string, CollectionEntry<'lectures'>[]>();
	for (const entry of lectures) {
		const [semester] = entry.id.split('/');
		if (!bySemester.has(semester)) bySemester.set(semester, []);
		bySemester.get(semester)!.push(entry);
	}
	const allSemesters = [...bySemester.keys()].sort().reverse();
	for (const entries of bySemester.values()) {
		entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
	}
	return { bySemester, allSemesters };
}
