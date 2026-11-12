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
          Everyone draws the Internet as a cloud. In 1999 <i>Wired</i> asked why, and the article gives <strong>{REASONS.length} answers</strong> (<a href="/about#count">our count</a>): four from
          the authors, {['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven'][voices] || voices} from the people it quotes, two of whom built the Net.<span className="lede-tail"> Each lobe is one answer; select it to read those exact words in the article.</span>
        </p>
      </div>
      <input type="checkbox" id="lift" className="lift-input" />
      <figure className="board-wrap" style={{ margin: '10px 0 0' }}>
        <label htmlFor="lift" className="lift"><span className="lift-off">Lift the cloud</span><span className="lift-on">Put the cloud back</span></label>
        <WhiteboardCloud size="wide" id="bw" />
        <WhiteboardCloud size="narrow" id="bn" />
        <ol className="key" aria-label="The ten answers">
          {REASONS.map((r, i) => (
            <li key={r.id}><a href={`/article#q-${r.id}`}><b>{i + 1}</b><span>{r.short} <small>{r.who}</small></span></a></li>
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
