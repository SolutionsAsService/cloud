import Link from 'next/link';
import { loadArticle } from '../../lib/article.js';

export const metadata = { title: 'About', description: 'What this site is, where the article comes from, and how it was made.' };

export default function About() {
  const a = loadArticle();
  return (
    <main className="page">
      <h1>About</h1>
      <p>This site is a reading of one article: “{a.title}” by Jessie Holliday Scanlon and Brad Wieners, published by <i>Wired</i> on 9 July 1999 (dated {a.date} in the source). The article is reproduced <Link href="/article">word for word</Link> from <code>cloud.mdx</code> in the repository; a test fails if any character of it changes.</p>
      <h2>The whiteboard</h2>
      <p>The front page draws the cloud the way the article says engineers drew it, in dry-erase marker. Its ten lobes are the ten answers the article gives to “why a cloud?”, in the order it gives them. Each quote on the site is copied exactly from the article and links to the paragraph it comes from.</p>
      <h2>Colours</h2>
      <p>Three grounds from the subject: the whiteboard with the four standard dry-erase colours (black, blue, red, green); a sky-blue page for reading the article; and a storm-grey page for the voices, after Chambers’ warning that the Net is “altostratus”, not fair-weather cumulus.</p>
      <h2>Rights</h2>
      <p>The article’s text belongs to its authors and publisher and is kept here unedited, with credit, as the subject of the site.</p>
    </main>
  );
}
