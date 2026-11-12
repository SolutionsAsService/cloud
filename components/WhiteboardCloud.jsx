import Link from 'next/link';
import { REASONS } from '../lib/reasons.js';

// The landing graphic: the cloud as engineers draw it on a whiteboard, made of the ten
// reasons the article gives for drawing it. Each numbered lobe is one reason and links
// to the paragraph it comes from. Drawn as a union of circles: marker-stroked circles,
// then the whiteboard-white interior laid over their inner strokes. Server SVG, no JS.

const MARKER = { black: 'var(--m-black)', blue: 'var(--m-blue)', red: 'var(--m-red)', green: 'var(--m-green)' };

// Screen angles (degrees, clockwise from +x). Left column top to bottom, then right column
// top to bottom; three unlabelled filler lobes close the outline.
const LABELLED = [238, 212, 186, 160, 134, 302, 328, 354, 20, 46];
const FILLERS = [270, 78, 102];

function geometry(size) {
  const wide = size === 'wide';
  const g = wide
    ? { w: 1160, h: 500, cx: 580, cy: 196, rx: 214, ry: 112, r: 70, fr: 64, step: 64 }
    : { w: 343, h: 232, cx: 171, cy: 112, rx: 98, ry: 56, r: 40, fr: 36, step: 0 };
  const at = (deg, rr) => {
    const a = (deg * Math.PI) / 180;
    return { x: g.cx + Math.cos(a) * g.rx, y: g.cy + Math.sin(a) * g.ry, r: rr, deg };
  };
  // Annotation rows: five per side, evenly spaced, so labels never crowd.
  const lobes = LABELLED.map((d, i) => ({ ...at(d, g.r), reason: REASONS[i], n: i + 1, ly: g.cy + ((i % 5) - 2) * g.step }));
  const fillers = FILLERS.map(d => at(d, g.fr));
  return { g, lobes, fillers, wide };
}

const round = v => Math.round(v * 10) / 10;

export default function WhiteboardCloud({ size, id }) {
  const { g, lobes, fillers, wide } = geometry(size);
  const all = [...lobes, ...fillers];
  return (
    <svg className={`board board--${size}`} viewBox={`0 0 ${g.w} ${g.h}`} width={g.w} height={g.h} role="group" aria-labelledby={`${id}-t ${id}-d`}>
      <title id={`${id}-t`}>The Internet cloud, drawn from the article’s ten reasons</title>
      <desc id={`${id}-d`}>
        {'A marker drawing of a cloud between “your computer” and “the server”. Its ten lobes are the reasons the article gives for drawing the Internet as a cloud: ' +
          REASONS.map((r, i) => `${i + 1}, ${r.short} (${r.who})`).join('; ') + '.'}
      </desc>

      {/* The network doodle beneath: you, the cloud, the server. */}
      {wide && (
        <g className="doodle" aria-hidden="true">
          <path className="ink ink--black draw" d={`M ${g.cx - 250} ${g.h - 64} C ${g.cx - 250} ${g.cy + 150}, ${g.cx - 160} ${g.cy + 140}, ${g.cx - 120} ${g.cy + 120}`} />
          <path className="ink ink--black draw" d={`M ${g.cx + 250} ${g.h - 64} C ${g.cx + 250} ${g.cy + 150}, ${g.cx + 160} ${g.cy + 140}, ${g.cx + 120} ${g.cy + 120}`} />
          <rect className="ink ink--black box" x={g.cx - 320} y={g.h - 64} width="140" height="50" rx="6" />
          <text className="hand hand--box" x={g.cx - 250} y={g.h - 32} textAnchor="middle">your computer</text>
          <rect className="ink ink--black box" x={g.cx + 180} y={g.h - 64} width="140" height="50" rx="6" />
          <text className="hand hand--box" x={g.cx + 250} y={g.h - 32} textAnchor="middle">the server</text>
          <text className="hand hand--note" x={g.cx} y={g.cy + g.ry + g.r + 40} textAnchor="middle">“…as long as it comes out of the cloud at the correct address.”</text>
        </g>
      )}

      {/* Union of lobes: stroke every circle, then cover the inner strokes with white. */}
      <g className="cloud">
        {all.map((l, i) => <circle key={`s${i}`} className="lobe-stroke" cx={round(l.x)} cy={round(l.y)} r={l.r} />)}
        {all.map((l, i) => <circle key={`f${i}`} className="lobe-fill" cx={round(l.x)} cy={round(l.y)} r={l.r - 2.6} />)}
        <ellipse className="lobe-fill" cx={g.cx} cy={g.cy} rx={g.rx + 4} ry={g.ry + 4} />
        <text className="cloud-word" x={g.cx} y={g.cy + (wide ? 22 : 12)} textAnchor="middle">the Internet</text>
      </g>

      {lobes.map(l => {
        const left = l.deg > 90 && l.deg < 270;
        // Number sits toward the outer edge of its lobe.
        const a = (l.deg * Math.PI) / 180;
        const nx = l.x + Math.cos(a) * l.r * 0.42, ny = l.y + Math.sin(a) * l.r * 0.42;
        const color = MARKER[l.reason.marker];
        const tx = left ? g.cx - g.rx - g.r - 34 : g.cx + g.rx + g.r + 34;
        return (
          <Link key={l.reason.id} href={`/article#p${l.reason.p + 1}`} className="lobe" aria-label={`${l.n}. ${l.reason.short}, ${l.reason.who}: read the passage`} style={{ '--ink': color }}>
            <circle className="lobe-hit" cx={round(l.x)} cy={round(l.y)} r={l.r} />
            <text className="lobe-n" x={round(nx)} y={round(ny) + (wide ? 10 : 7)} textAnchor="middle">{l.n}</text>
            {wide && (
              <>
                <path className="ink leader" d={`M ${round(l.x + Math.cos(a) * l.r)} ${round(l.y + Math.sin(a) * l.r * 0.9)} Q ${round((tx + l.x) / 2)} ${round(l.ly - 8)}, ${round(tx + (left ? 8 : -8))} ${round(l.ly - 6)}`} />
                <text className="hand hand--reason" x={round(tx)} y={round(l.ly - 4)} textAnchor={left ? 'end' : 'start'}>{l.reason.short}</text>
                <text className="hand hand--who" x={round(tx)} y={round(l.ly + 18)} textAnchor={left ? 'end' : 'start'}>{l.reason.who}</text>
              </>
            )}
          </Link>
        );
      })}
    </svg>
  );
}
