import localFont from 'next/font/local';
import Link from 'next/link';
import './globals.css';

const hand = localFont({ src: './fonts/Caveat-wght.woff2', variable: '--font-hand', weight: '400 700', display: 'swap', fallback: ['Comic Sans MS', 'cursive'] });

export const metadata = {
  title: { default: 'Why a cloud? The Internet as everyone draws it', template: '%s · Why a cloud?' },
  description: 'Why does everyone draw the Internet as a cloud? Ten answers from a 1999 Wired article, drawn on a whiteboard, with the original article preserved word for word.',
};

const NAV = [['/article', 'The article'], ['/voices', 'The voices'], ['/about', 'About']];

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={hand.variable}>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-header">
          <Link href="/" className="wordmark" aria-label="Why a cloud? Home">
            <svg viewBox="0 0 40 24" width="34" height="20" aria-hidden="true"><path d="M8 20h24a6 6 0 0 0 0-12 8 8 0 0 0-15-3 6 6 0 0 0-9 6 4.5 4.5 0 0 0 0 9z" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" /></svg>
            <span>Why a cloud?</span>
          </Link>
          <nav aria-label="Sections">{NAV.map(([h, l]) => <Link key={h} href={h}>{l}</Link>)}</nav>
        </header>
        <div id="main">{children}</div>
        <footer className="site-footer">
          <p>Built around “The Internet Cloud” by Jessie Holliday Scanlon and Brad Wieners, <i>Wired</i>, 9 July 1999. The article appears unedited on <Link href="/article">its own page</Link>.</p>
        </footer>
      </body>
    </html>
  );
}
