import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const lectures = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: 'src/content/lectures',
		// Use the file path (unique by construction) as the entry id instead of
		// the default (which uses `slug` verbatim) — this lets recurring
		// activities reuse the same memorable slug across different semesters.
		generateId: ({ entry }) => entry,
	}),
	schema: z.object({
		date: z.coerce.date(),
		name: z.string(),
		slug: z.string(),
		difficulty: z.number().min(0).max(5),
		lecturer: z.string(),
		location: z.string(),
		tags: z.array(z.string()).default([]),
		type: z.enum(['主線', '支線']),
		timeline: z
			.array(
				z.object({
					time: z.string().optional(),
					event: z.string(),
				}),
			)
			.optional(),
		slide: z.url().optional(),
		slido: z.url().optional(),
		cowrite: z.url().optional(),
		kktix: z.url().optional(),
	}),
});

const members = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: 'src/content/members',
		// Use the file path (unique by construction) as the entry id instead of
		// the default (which uses `slug` verbatim) — this lets recurring
		// activities reuse the same memorable slug across different semesters,
		// and avoids silent collisions if two different filenames slugify to the same string.
		generateId: ({ entry }) => entry,
	}),
	schema: ({ image }) =>
		z.object({
			name: z.string(),
			title: z.string(),
			// Display order within a year — leadership order in the source data
			// isn't derivable from name or filename, so it's carried explicitly.
			order: z.number(),
			image: image().optional(),
			ig: z.string().optional(),
			tags: z.array(z.string()).default([]),
		}),
});

const events = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: 'src/content/events',
		// Use the file path (unique by construction) as the entry id, matching
		// the lectures/members collections' generateId override.
		generateId: ({ entry }) => entry,
	}),
	schema: ({ image }) =>
		z.object({
			date: z.coerce.date(),
			name: z.string(),
			desc: z.string().optional(),
			type: z.enum(['camp', 'community', 'competition', 'lecture', 'others']),
			image: image().optional(),
		}),
});

export const collections = { lectures, members, events };
