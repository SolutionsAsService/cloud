**Critic: Usability (Krug), R1**

**Anchor used:** Five-second test, legibility probe, what is clickable, needless words.

**Observed:** c3__1280.png and c3__375.png, plus a live link dump at both widths. In five seconds the site reads as "Why a cloud?", the Internet cloud with 10 answers. Primary buttons ("Read the 1999 article", "Hear the six voices") sit at y~765 at 1280x800, just inside the fold. Three topics are nameable from the first screen: "Easy to draw", "Cloaks the chaos", "Altostratus, not cumulus". Mark "8 / No fixed topology / Vint Cerf" traces to /article#p8, and every lobe and label has pointer cursor. At 375 the phone key is 13 px HTML, the cloud holds bare numbers, and the "Hear the six voices" button is below the fold (the screenshot cuts at 812).

**Findings:**
1. [minor] Needless words: the header wordmark "Why a cloud?" repeats the h1 directly beneath it on both widths, so the same words appear twice in 80 px.
2. [minor] Clickability depends on the lede sentence "tap it to read the passage." Nothing in the drawing looks pressable (no underline, no arrow), and on desktop the handwritten labels are links with no link cue.
3. [minor] Four marks (1-4) all lead to /article#p3. A user who tries 1, then 2, lands in the same place and is surprised.
4. [minor] At 375 the cloud's numbers are decorative, the real targets are the key rows, and "tap a lobe" misdirects slightly. The lede also says "10 answers" and then "6" as a numeral, an inconsistency.

**Verdict:** PASS. The page passes the five-second test and the legibility probe. What remains is polish, not a defect.

**Requested change:** Drop the duplicate header title on the home page. Change "tap a lobe" to "tap an answer". Optionally add a short "see all" cue so the shared p3 destination is expected.
