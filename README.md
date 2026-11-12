# Why a cloud?

Everyone draws the Internet as a cloud. In 1999 *Wired* asked why. This site draws the answer on a whiteboard: a
cloud made of the ten reasons the article gives, each linked to its passage, with the original article reproduced
word for word.

```sh
npm install
npm run dev     # local
npm run build   # static pages
npm test        # the article is unchanged; every quote is verbatim
```

- `cloud.mdx`: the original article, "The Internet Cloud" by Jessie Holliday Scanlon and Brad Wieners (*Wired*,
  9 July 1999). It is the site's source text and is never edited; the article page renders it exactly.
- `lib/reasons.js`: the ten answers and the six voices, each quote copied exactly from the article.
- `components/WhiteboardCloud.jsx`: the landing drawing (server-rendered SVG).
- `DESIGN-LOG.md`, `design/`: the design run and its critic reports.
