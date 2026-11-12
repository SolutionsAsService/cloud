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
