// Ten answers the article gives to "why a cloud?", in the order it gives them. `quote` is
// copied verbatim from the article (test-asserted); `p` is the paragraph it comes from.
export const REASONS = [
  { id: 'easy', who: 'The authors', short: 'Easy to draw', quote: 'clouds are easy to draw', p: 2, marker: 'black' },
  { id: 'obscure', who: 'The authors', short: 'Hides what you don’t know', quote: 'You can use it to obscure what you don\'t know', p: 2, marker: 'red' },
  { id: 'rain', who: 'The authors', short: 'Rainmaker', quote: 'optimistic symbols of cash waiting to flow', p: 2, marker: 'green' },
  { id: 'heaven', who: 'The authors', short: 'Heaven on a whiteboard', quote: 'a whiteboard vision of heaven on earth', p: 2, marker: 'blue' },
  { id: 'dragon', who: 'Margaret Wertheim', short: 'No clear boundaries', quote: 'a great ill-defined fuzz with no clear boundaries and distinctions', p: 3, marker: 'blue' },
  { id: 'unreality', who: 'Jon Lebkowsky', short: 'Cloaks the chaos', quote: 'a dark unreality where the volume of interconnections is beyond the imaginable', p: 4, marker: 'red' },
  { id: 'altostratus', who: 'John Chambers', short: 'Altostratus, not cumulus', quote: 'It\'s much more altostratus - intense, rapid', p: 5, marker: 'black' },
  { id: 'amoeba', who: 'Vint Cerf', short: 'No fixed topology', quote: 'We always drew networks as amoeba-like things because they had no fixed topology', p: 7, marker: 'green' },
  { id: 'placeholder', who: 'Bob Taylor', short: 'A stand-in for the rest', quote: 'Some used cloudlike sketches to represent the Internet itself while focusing on other things', p: 8, marker: 'blue' },
  { id: 'numinous', who: 'William Gibson', short: 'Useful for its vagueness', quote: 'the cloud\'s main usefulness lies in its vagueness', p: 10, marker: 'red' },
];

export const VOICES = [
  { name: 'Margaret Wertheim', role: 'author, The Pearly Gates of Cyberspace', p: 3 },
  { name: 'Jon Lebkowsky', role: 'Well veteran; online community director, WholeFoods.com', p: 4 },
  { name: 'John Chambers', role: 'CEO, Cisco Systems', p: 5 },
  { name: 'Vint Cerf', role: 'cocreator of TCP/IP', p: 7 },
  { name: 'Bob Taylor', role: 'Net architect', p: 8 },
  { name: 'William Gibson', role: 'novelist; coined “cyberspace” in Neuromancer', p: [9, 10] },
];
