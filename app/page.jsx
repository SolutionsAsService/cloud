import Link from 'next/link';
import WhiteboardCloud from '../components/WhiteboardCloud.jsx';
import { REASONS } from '../lib/reasons.js';
import { loadArticle } from '../lib/article.js';

export default function Home() {
  const a = loadArticle();
  const voices = new Set(REASONS.map(r => r.who).filter(w => w !== 'The authors')).size;
  return (
    <main className="hero">
      <div className="hero-head">
        <h1>Why a cloud<span className="q">?</span></h1>
        <p className="lede">
          Everyone draws the Internet as a cloud. In 1999 <i>Wired</i> asked why, and got <strong>{REASONS.length} answers</strong>: four from
          the authors, {voices} from the people who built and named the Net. Each lobe is one answer; tap it to read the passage.
        </p>
      </div>
      <figure className="board-wrap" style={{ margin: '10px 0 0' }}>
        <WhiteboardCloud size="wide" id="bw" />
        <WhiteboardCloud size="narrow" id="bn" />
        <ol className="key" aria-label="The ten answers">
          {REASONS.map((r, i) => (
            <li key={r.id}><a href={`/article#p${r.p + 1}`}><b>{i + 1}</b><span>{r.short}<small>{r.who}</small></span></a></li>
          ))}
        </ol>
      </figure>
      <div className="hero-ctas">
        <Link className="button button--primary" href="/article">Read the {a.date.slice(-4)} article →</Link>
        <Link className="button" href="/voices">Hear the six voices</Link>
      </div>
    </main>
  );
}
