# Critic: Evidence (Cairo), R1

**Anchor used:** Cairo, How Charts Lie ("charts lie by what they claim vs. what the data supports"); The Truthful Art (show the source, don't overstate).

**Observed (measured, Playwright, live :3300):**
- Article: 12/12 body paragraphs EXACT vs cloud.mdx after removing the visible paragraph-number link (`<a class="pn">`). Header lines present. Added, not in source: "Why a cloud? · the original article" strip, "Reproduced exactly..." note, paragraph numbers (all flagged as apparatus).
- 10/10 landing quotes in lib/reasons.js appear verbatim in the paragraph they link to (ids are 1-based, p+1; all 30 landing links resolve). 6/6 voices quotes verbatim, links resolve to the right paragraph.
- Landing line "…as long as it comes out of the cloud at the correct address." is verbatim in p8, but it is the authors' narration, not Cerf's, and carries no attribution on the board.
- Counts: 4 authors + 6 named people = 10, true.
- First screen: h1 bottom 144 px (1280x800) / 136 px (375x812); scrollWidth 1280 / 375, no sideways scroll; board bottom 725 / 758 per evidence, inside the fold.

**Findings:**
1. [Claim, major] "6 from the people who built and named the Net" is false for Wertheim (author), Lebkowsky (community director), Chambers (Cisco CEO). Only Cerf and Taylor built it; Gibson named cyberspace, not the Net. The voices-page wording ("a writer, a community builder, a CEO, two architects, the novelist") is accurate; the landing contradicts it.
2. [Minor] "10 answers" is the designer's count, not the article's; the article also offers "can't be pinned down/alive" (p6). Say "ten reasons we picked" or disclose the method on-page.
3. [Minor] Unattributed Cerf-paragraph line may read as Cerf's quote.

**Verdict:** OBJECT (finding 1 only; article fidelity and quotes pass).

**Requested change:** Replace "from the people who built and named the Net" with "six from the people it quotes". Optionally attribute the doodle line to "the authors, on Cerf's point".
