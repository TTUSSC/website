import { getCollection, type CollectionEntry } from 'astro:content';

/**
 * Groups all event entries by their `type` field, sorted newest-first
 * within each group. Types with no entries are absent from the map —
 * callers must handle a missing key rather than assuming all 5 enum
 * values are present.
 */
export async function groupEventsByType() {
	const events = await getCollection('events');
	const byType = new Map<string, CollectionEntry<'events'>[]>();
	for (const entry of events) {
		const { type } = entry.data;
		if (!byType.has(type)) byType.set(type, []);
		byType.get(type)!.push(entry);
	}
	for (const entries of byType.values()) {
		entries.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
	}
	return { byType };
}
