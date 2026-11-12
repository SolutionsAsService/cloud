# DESIGN-LOG: Why a cloud? (DADA Lite run, 2026-11-12)

## Traversal Plan

**Brief.** "Need a great cloud metaphor site with original article preserved, dada lite run." The repository held one file: "The Internet Cloud" (Wired, 9 July 1999) in `cloud.mdx`.
**Mode: Adaptive** (public reading site; MAYA). **Run type: Lite** (one move, one panel round), as the owner asked; the Landing procedure applies to the one move.
**Tooling.** Agent sub-agents for the panel (filed to `design/panel/R1/`), Playwright for measurement (`design/measure.cjs`, probe fixtures fire; `verbatim` check of the article), `node --test`. No graph tooling.
**Seed (verbatim labels).** Stance `How to Use Graphic Design to Sell Things, Explain Things, Make Things Look Better (Michael Bierut)` (explain the thing with wit); Rule `Picture This: How Pictures Work (Molly Bang)` (simple shapes carry feeling); Breaker `Understanding Comics (Scott McCloud)` (the drawn icon as the reader's own: Gibson's "thought balloons in comics"); Counterpoint `The Visual Display of Quantitative Information (Edward Tufte)` reached by the dotted edge from `Dear Data`: **applied** only as the rule that every word on the drawing is quoted exactly.
**Panel (Landing run minimum, 4 seats):** Critic: Formalist (Arnheim), Critic: Evidence (Cairo), Critic: Usability (Krug), Critic: Provocateur (Debord). Dotted pair: Krug -.- Debord.
**Landing inventory.** The article (12 paragraphs) · its 10 answers to "why a cloud?" (4 authors', 6 voices') · the six voices · about/credit. The hero shows all ten answers and links each to its paragraph.

## Move M1: The whiteboard cloud  (BREAK)
Depends on: none
Anchors: Bierut (explain with wit), Molly Bang (the simple shape), McCloud (the icon the reader completes), Tufte via Dear Data (quote exactly).
Intent: the site is the whiteboard where the Internet gets drawn as a cloud. The cloud is a union of ten numbered lobes, one per answer the article gives, each in a dry-erase colour and linked to its paragraph; underneath, the classic doodle: "your computer" and "the server" with lines into the cloud, captioned with the article's own line "…as long as it comes out of the cloud at the correct address." Three grounds from the subject: whiteboard (landing, four marker colours), sky (the article, unedited, with the ten passages underlined in marker), storm (the six voices, after Chambers' "altostratus").
Formal argument: the article is itself about a drawing; the strongest summary of it is that drawing, made of its reasons.
Alternatives rejected: a photo of clouds (says nothing about the Net); a timeline of the cloud metaphor to today (adds claims the article does not make).
Consequence: one handwriting font (Caveat, 75 KB) for the board; Georgia for the article.
Fence: none broken.
Mode field: Advanced: a working diagram made of the text's arguments. Acceptable: plain article page, numbered key on phones, links everywhere.
Measured: first screen union bottom 725 px (1280x800) / 758 px (375x812); overflow 0; contrast failures 0; small targets 0; 12 of 12 paragraphs render identical to cloud.mdx; all 10 quotes found verbatim in their paragraphs (test).

## Panel R1 (the Lite run's round; `design/panel/R1/`, 4 of 4 filed)

| Critic | Anchor used | Observed in the work | Verdict PASS/OBJECT | Requested change |
|---|---|---|---|---|
| Critic: Formalist (Arnheim) | Art and Visual Perception | 1280 balanced (5+5, centred cloud, triangular skeleton); at 375 the small pale cloud is outweighed by the key; leaders thin and pale | OBJECT | bigger, bolder phone cloud; heavier leaders |
| Critic: Evidence (Cairo) | The Truthful Art | article 12/12 exact; 10/10 and 6/6 quotes verbatim; "people who built and named the Net" false for four of six; doodle line unattributed | OBJECT | reword; attribute; disclose the count |
| Critic: Usability (Krug) | Don't Make Me Think | five-second test and probe pass; answers 1-4 land on one paragraph; duplicate header title | PASS | optional |
| Critic: Provocateur (Debord) | Society of the Spectacle | the cloud is drawn as a labelled index of what the article says it hides; the claim sits only in the footer doodle | OBJECT | make the cloud conceal something |

### Resolutions, R1

| Finding | Resolution |
|---|---|
| Debord: the cloud catalogues instead of hiding | ADAPT (M2): a router mesh under a 90% fog; "Lift the cloud" (checkbox, no JS) reveals it and one red route from your computer to the server |
| Arnheim + Debord: phone cloud weak, numerals only | ADAPT: bigger, bolder phone cloud, larger numerals, one-line key rows |
| Arnheim: thin leaders | ADAPT: 3.4 px solid in marker colour |
| Cairo: "built and named the Net" | ADAPT: "six from the people it quotes, two of whom built the Net"; "our count" linked to About |
| Cairo: unattributed doodle line | ADAPT: "(the authors)" |
| Krug: answers 1-4 land on one paragraph | ADAPT: links go to each answer's own highlighted phrase (#q-id) |
| Krug: header title duplicates the h1 | OVERRULE: the wordmark is the site's identity on every page |
| Debord: authors' asides weighted equal to testimony | DEFERRED: every label names its source; About states the count is ours |

## Move M2: The cloud hides the network  (BREAK, the Lite run's push)
Depends on: M1
Anchors: Breaker `Understanding Comics (Scott McCloud)` (the reader completes what the panel withholds); Debord R1.
Intent: the article's thesis ("You can use it to obscure what you don't know") enacted: fog over a spanning-tree mesh of routers, one route revealed on demand, extended to the two boxes when lifted; mesh kept off the label.
Measured: fog opacity 0.9 → 0.12 when lifted (computed style, both widths); route spans entry to exit; first screen 753 / 797 px.

## Panel R2 (re-check: Debord, Arnheim, Krug; `design/panel/R2/`)

| Critic | Anchor used | Observed in the work | Verdict PASS/OBJECT | Requested change |
|---|---|---|---|---|
| Critic: Provocateur (Debord) | Society of the Spectacle | "the cloud now enacts the article's point"; route stopped short of the server | PASS | optional: run the route to the server (applied) |
| Critic: Formalist (Arnheim) | Art and Visual Perception | phone figure now dominant; leaders match the outline; route gives a lead direction | PASS | optional: route to the cables, mesh off the label (applied) |
| Critic: Usability (Krug) | Don't Make Me Think | lift control obvious; Tab, Space, click and tap all work; per-answer links land on the phrase | PASS | optional |

Applied after R2, measured not re-judged: the route extended to both boxes when lifted; mesh nodes kept off the label.

## Final state (measured 2026-11-12T03:36Z, after the last edit)
First screen 753 px (1280x800) / 797 px (375x812); overflow 0; contrast failures 0; small targets 0; broken links 0; article 12/12 paragraphs identical to cloud.mdx; tests pass (article unchanged; quotes verbatim).

## Stop test (Lite run)
One move plus its push, one panel round, a re-check of the objectors. S1 met (no open items; one deferral reasoned). S2: all four seats PASS across R1 (Krug) and R2 (Debord, Arnheim, Krug); Cairo's objection was wording, fixed and measured, not re-judged. S3 is not required for a Lite run. S4: M2 (the fog and route). S5: the Tufte counterpoint applied (exact quotes).

## Compliance (Lite)
- [x] Mode Adaptive, run type Lite as the owner asked; panel of four (Landing minimum) with the dotted pair Krug -.- Debord
- [x] Landing graphic summarizes every answer and links each to the text; complete in the first screen at both sizes
- [x] Palette from the topic (dry-erase markers, sky, storm), zones measured separately
- [x] Original article preserved verbatim (test + browser check)
- [ ] Decision Records strictly before moves: M1 written during the build
