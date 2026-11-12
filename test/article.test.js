import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { loadArticle } from '../lib/article.js';
import { REASONS } from '../lib/reasons.js';

const a = loadArticle();

test('the article is parsed without losing or changing a character', () => {
  const rebuilt = '```text\n\n' + a.headLines.join('\n') + '\n\n' + a.paragraphs.join('\n\n');
  const original = readFileSync('cloud.mdx', 'utf8').replace(/\n```\s*$/, '');
  assert.equal(rebuilt.replace(/\s+/g, ' ').trim(), original.replace(/\s+/g, ' ').trim());
});

test('every quote on the site appears verbatim in the paragraph it links to', () => {
  for (const r of REASONS) assert.ok(a.paragraphs[r.p].includes(r.quote), r.id);
  assert.equal(REASONS.length, 10);
});
