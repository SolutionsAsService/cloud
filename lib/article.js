// The original article, read verbatim from cloud.mdx at build time. Nothing in it is
// edited: the page renders its header lines and paragraphs exactly as written, and
// test/article.test.js fails if a character changes.
import { readFileSync } from 'node:fs';
import path from 'node:path';

export function loadArticle() {
  const raw = readFileSync(path.join(process.cwd(), 'cloud.mdx'), 'utf8');
  const body = raw.replace(/^```text\n/, '').replace(/\n```\s*$/, '');
  const blocks = body.split(/\n\s*\n/).map(b => b.trim()).filter(Boolean);
  // The first block holds the header lines: title, byline, date, "Categories", section.
  const head = blocks[0].split('\n').map(l => l.trim());
  return {
    raw,
    title: head[0],
    byline: head[1],
    date: head[2],
    section: head[4],
    headLines: head,
    paragraphs: blocks.slice(1),
  };
}
