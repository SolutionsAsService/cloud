# R1 evidence (Lite run, single panel round)

Measured 2026-11-12T03:30Z, production build after the last edit. Raw: design/measure-R1.json. Live: http://localhost:3300 (Playwright: `NODE_PATH=$(npm root -g) node script.cjs`). Source: /home/user/cloud (cloud.mdx = the original article; lib/reasons.js; components/WhiteboardCloud.jsx; app/). Decision record: DESIGN-LOG.md.
Screenshots: design/shots/c3_<page>_<width>.png for /, /article, /voices, /about at 1280 and 375.

- Pages: / (whiteboard), /article (the article unedited), /voices (six quoted people), /about (credit, method, colours).
- Landing: h1 "Why a cloud?"; lede "Everyone draws the Internet as a cloud. In 1999 Wired asked why, and got 10 answers: four from the authors, 6 from the people who built and named the Net. Each lobe is one answer; tap it to read the passage." Figure: a marker cloud of 10 numbered lobes (left 1-5, right 6-10) with handwritten annotations (answer + who) on desktop and a numbered key on phones; a "your computer" → cloud → "the server" doodle with the quoted line "…as long as it comes out of the cloud at the correct address." Each lobe links to /article#pN.
- The ten answers and their quotes: lib/reasons.js; each quote is asserted verbatim in its paragraph (test/article.test.js).
- Article page: rendered paragraphs equal cloud.mdx paragraphs character for character (12/12, checked in the browser); the ten quotes are underlined in their marker colour; header lines shown as in the source ("07.09.1999 · Categories · Wire").
- Colours: whiteboard #fbfbf8 with dry-erase black #1d1d1f, blue #1f4fbf, red #c8202f, green #127a3c; sky #e8f1fa / ink #142233; storm #1f2a37 / ink #eef3f8.
- First screen union (h1 + board): bottom 725 px at 1280x800, 758 px at 375x812; no sideways scroll.
- Probes: overflow 0; contrast failures 0; small targets 0; smallest SVG text 21 px (1280), 26 px (375 is the lobe numbers; the key is HTML 13 px); broken links 0; no-JS landing renders 10 lobes.
- Weight: landing HTML 47.7 KB raw; font 75 KB; framework JS ~176 KB gzip.
