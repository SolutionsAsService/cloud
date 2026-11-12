# R2 evidence: re-check of the R1 fixes (Lite run; objectors plus usability)

Measured 2026-11-12T03:34Z on a production build after the last edit. Raw: design/measure-R2.json. Live: http://localhost:3300 (Playwright `NODE_PATH=$(npm root -g) node script.cjs`). Screenshots: design/shots/R2/ (c5_<page>_<width>.png; c5_lifted_1280.png and c5_lifted_375.png show the landing after pressing "Lift the cloud"). Your R1 report: design/panel/R1/<seat>.md.

Changes since R1:
- Debord F1-F2 (the cloud catalogues what the article says it hides): the cloud now hides something. Inside it is a mesh of 46 routers and their links (26 on phones; a spanning tree plus nearest neighbours), under a white fog at 90% opacity. A "Lift the cloud" control (a native checkbox, no script) thins the fog to 12% and reveals the mesh and one red route: the shortest path from the side where "your computer" plugs in to the side where "the server" does. "Put the cloud back" restores the fog. The doodle's line "…as long as it comes out of the cloud at the correct address." is now attributed "(the authors)" (Cairo F3).
- Debord F3 + Arnheim F1 (phone cloud weak, numerals only): phone cloud enlarged (lobe radius 40→50, ellipse 98x56→104x60), stroke 3→4 px, numerals 22→28 px; key entries now one line each where they fit (name and who inline). The lift control sits above the drawing on phones, not over a lobe.
- Arnheim F2 (thin, pale leaders): leaders 2.2 px at 80% opacity → 3.4 px solid in their marker colour.
- Cairo F1 (false "built and named the Net"): lede now "the article gives 10 answers (our count): four from the authors, six from the people it quotes, two of whom built the Net." About explains the count.
- Krug F3 (answers 1-4 all land on paragraph 3): every answer now links to its own highlighted phrase (/article#q-<id>), which is outlined when targeted.
- First screen union bottom: 753 px at 1280x800, 797 px at 375x812. Overflow 0, contrast failures 0, small targets 0, broken links 0. Article still 12/12 paragraphs identical to cloud.mdx; tests pass.
