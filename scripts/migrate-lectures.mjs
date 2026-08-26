#!/usr/bin/env node
// One-time migration script for the lectures content collection.
// Converts an old .worktrees/main/src/data/lectures/<semester>.js file into
// per-lecture Markdown files under src/content/lectures/<semester>/.
// Usage: node scripts/migrate-lectures.mjs <semester>   (e.g. 114-2)
//
// `slug` is written as a placeholder. A human/AI pass must replace it with
// a real hand-picked English slug before the migrated files are committed.
// This script is deleted once all semesters are migrated (see Task 10).

import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const semester = process.argv[2];
if (!semester) {
	console.error('Usage: node scripts/migrate-lectures.mjs <semester>');
	process.exit(1);
}

const sourcePath = path.resolve(
	`.worktrees/main/src/data/lectures/${semester}.js`,
);
const { semesterData } = await import(sourcePath);

const [rocYear, term] = semester.split('-').map(Number);
// ROC year + 1911 = Gregorian year the fall term (term 1) starts in.
// The spring term (term 2) of the same academic year falls in the
// following Gregorian year.
const calendarYear = term === 1 ? rocYear + 1911 : rocYear + 1912;

function toISODate(mmdd) {
	const [startDate] = mmdd.split('~');
	const [month, day] = startDate.trim().split('/').map(Number);
	return `${calendarYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function parseTimelineItem(itemStr) {
	const match = itemStr.match(/^([\d:~ -]+)\s+(.+)$/);
	if (!match) return { event: itemStr.trim() };
	const [, time, event] = match;
	return { time: time.trim(), event: event.trim() };
}

function yamlString(value) {
	return JSON.stringify(value);
}

const outDir = path.resolve(`src/content/lectures/${semester}`);
await mkdir(outDir, { recursive: true });

for (const [index, lecture] of semesterData.entries()) {
	const date = toISODate(lecture.date);
	const slugPlaceholder = `placeholder-${index + 1}`;

	const lines = [
		`date: ${yamlString(date)}`,
		`name: ${yamlString(lecture.name)}`,
		`slug: ${yamlString(slugPlaceholder)}`,
		`difficulty: ${lecture.difficulty}`,
		`lecturer: ${yamlString(lecture.lecturer)}`,
		`location: ${yamlString(lecture.location)}`,
		`tags: ${JSON.stringify(lecture.tags ?? [])}`,
		`type: ${yamlString(lecture.type)}`,
	];

	if (lecture.timeline?.length) {
		lines.push(
			`timeline: ${JSON.stringify(lecture.timeline.map(parseTimelineItem))}`,
		);
	}
	if (lecture.slide) lines.push(`slide: ${yamlString(lecture.slide)}`);
	if (lecture.slido) lines.push(`slido: ${yamlString(lecture.slido)}`);
	if (lecture.note) lines.push(`cowrite: ${yamlString(lecture.note)}`);
	if (lecture.kktix) lines.push(`kktix: ${yamlString(lecture.kktix)}`);

	const body = lecture.description ? `\n${lecture.description}\n` : '\n';
	const content = `---\n${lines.join('\n')}\n---\n${body}`;

	const filename = `${date}-${slugPlaceholder}.md`;
	await writeFile(path.join(outDir, filename), content, 'utf-8');
}

console.log(
	`Wrote ${semesterData.length} lecture file(s) for semester ${semester} to ${outDir}`,
);
