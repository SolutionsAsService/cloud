import Link from 'next/link';
import { loadArticle } from '../../lib/article.js';
import { REASONS } from '../../lib/reasons.js';

export const metadata = { title: 'The Internet Cloud (1999)', description: '“The Internet Cloud” by Jessie Holliday Scanlon and Brad Wieners, Wired, 9 July 1999, reproduced word for word.' };

const COLORS = { black: 'var(--m-black)', blue: 'var(--m-blue)', red: 'var(--m-red)', green: 'var(--m-green)' };

// Wrap each reason's quoted phrase in a <mark>; the text itself is untouched.
function withMarks(text, index) {
  const hits = REASONS.map((r, n) => ({ ...r, n: n + 1 })).filter(r => r.p === index).map(r => ({ r, at: text.indexOf(r.quote) })).filter(h => h.at >= 0).sort((a, b) => a.at - b.at);
  const out = [];
  let i = 0;
  for (const { r, at } of hits) {
    if (at < i) continue;
    out.push(text.slice(i, at));
    out.push(<mark key={r.id} className="r" style={{ '--hl': COLORS[r.marker] }} title={`Answer ${r.n}: ${r.short}`}>{r.quote}</mark>);
    i = at + r.quote.length;
  }
  out.push(text.slice(i));
  return out;
}

export default function ArticlePage() {
  const a = loadArticle();
  return (
    <main className="sky">
      <article className="paper">
        <p className="kicker"><Link href="/">Why a cloud?</Link> · the original article</p>
        <h1>{a.title}</h1>
        <p className="meta">{a.byline}</p>
        <p className="raw-head">{a.headLines.slice(2).join(' · ')}</p>
        {a.paragraphs.map((p, i) => (
          <p key={i} id={`p${i + 1}`} className="para">
            <a className="pn" href={`#p${i + 1}`} aria-label={`Paragraph ${i + 1}`}>{i + 1}</a>
            {withMarks(p, i)}
          </p>
        ))}
        <p className="note">
          Reproduced exactly as it appears in this repository’s <code>cloud.mdx</code>; the highlights mark the ten answers drawn on
          the <Link href="/">whiteboard</Link> and add no words.
        </p>
      </article>
    </main>
  );
}
