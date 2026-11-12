import Link from 'next/link';
import { loadArticle } from '../../lib/article.js';
import { REASONS, VOICES } from '../../lib/reasons.js';

export const metadata = { title: 'The six voices', description: 'Wertheim, Lebkowsky, Chambers, Cerf, Taylor and Gibson on why the Internet is drawn as a cloud.' };

export default function Voices() {
  const a = loadArticle();
  return (
    <main className="storm">
      <div className="voices">
        <h1>Six voices in the cloud</h1>
        <p className="lede">The article quotes a writer, a community builder, a CEO, two of the Net’s architects and the novelist who named cyberspace. Each card is their answer, word for word.</p>
        <div className="voice-grid">
          {VOICES.map(v => {
            const r = REASONS.find(x => x.who === v.name);
            const n = REASONS.indexOf(r) + 1;
            return (
              <section key={v.name} className="voice" aria-labelledby={`v-${n}`}>
                <blockquote>“{r.quote}”</blockquote>
                <p className="name" id={`v-${n}`}>{v.name}</p>
                <p className="role">{v.role} · answer {n}: {r.short}</p>
                <Link href={`/article#q-${r.id}`}>Read it in context (paragraph {r.p + 1}) →</Link>
              </section>
            );
          })}
        </div>
        <p className="lede" style={{ marginTop: 28 }}>From “{a.title}”, {a.byline.replace(/^By /, '')}, <i>Wired</i>, 9 July 1999.</p>
      </div>
    </main>
  );
}
