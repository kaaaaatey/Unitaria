// The pitch deck. Every fact comes from the World Bible; the section framing comes from Katey's deck notes (3 Oct 2026).
// Anything not yet canon is written as {{Placeholder label}} and renders as a visible gap (see components/pitch/Rich.astro).

export type Layer = { title: string; official: string; actual: string; safe?: string };

export const hook = {
  heart: 'If you had everything you ever wanted, would you still want the truth?',
  logline: 'Sixteen-year-old Ro has spent her life wondering if there’s something wrong with her. When the golden Compass glitches as it places her into a House at the Academy, the system that tells everyone else who they are has no answer for her. Determined to prove there is something inside her, Ro sets out to find her purpose — only to discover that the truth about the system could cost her the first place she’s ever felt she belongs.',
  book: 'Book One: {{Book One title}}',
  series: 'Series title: {{Series title (Unitaria?)}}',
};

export const worldDoors: { title: string; text: string }[] = [
  { title: 'The Academy', text: 'The seat of government and the world’s favourite television show share one name, so criticising one feels like attacking the other.' },
  { title: 'The Exhibition', text: 'The world’s grand celebration of youth, born of the Director’s love of the old World’s Fairs and London’s Great Exhibition of 1851. Eleven weeks, ten realms, one Grand Final, and every sixteen-year-old receives an offer.' },
  { title: 'The Realms', text: 'One landmass, three Continuents, ten realms. Every culture on every doorstep.' },
  { title: 'The LiFE Band', text: 'Your life on your wrist, with no screens. It projects your day, your tasks and your points, and it knows you.' },
  { title: 'The Points', text: 'Money is gone. Every right is free, and points reward doing good.' },
  { title: 'Realignment and Rehoming', text: 'A fresh start somewhere that truly speaks to your soul. Rehoming is always a choice.' },
];

export const rights = ['A home', 'Good food', 'Clothing', 'Healthcare', 'Learning', 'Travel', 'A living wage in any career'];

export const ledger: { gift: string; cost: string }[] = [
  { gift: 'No money; points for doing good', cost: 'Goodness becomes a performance and a leaderboard' },
  { gift: 'The band: convenience, no screens', cost: 'Constant surveillance, emotional nudging, and Recalibrate coming' },
  { gift: 'The School of Life: find your passion', cost: 'Your whole childhood is the exam, and the data decides your path' },
  { gift: 'Rehoming is always a choice', cost: 'Choice architecture: nudged by points, stigma and recommendations' },
  { gift: 'Thanksmas gratitude and lanterns', cost: 'Grateful people don’t ask who caused it' },
  { gift: 'A humble Director who offers to step down', cost: 'A cult of devotion that keeps him there' },
];

export const girl = {
  name: 'Ro',
  facts: [
    { label: 'Her name', text: 'Ro, short for Rosalia. She hates her full name, and nobody uses it except the Director, who always calls her Rosalia.' },
    { label: 'Who', text: 'Sixteen in 2077, born in 2061, after the world was remade. She lives on the crescents in Neuropa, the capital.' },
    { label: 'Her family', text: 'Nonna, who remembers the world before. A mum who knows the family safe exists and has no interest in what’s inside. A younger brother. A dad who is mostly absent, because he works for the Director and is one of the Seven. Grandpapa Harry died recently.' },
    { label: 'Her wound', text: 'Everyone around her seems so happy and content, except her. Parentified by an absent dad and a checked-out mum, she wonders whether she isn’t just unhappy, but bad.' },
    { label: 'Her place in the system', text: 'She tried every single job, not to get ahead but to find a passion, and without realising racked up a ridiculous number of points. The girl with no passion is chosen as one of the forty Golden Prospects of the Grand Academy.' },
    { label: 'What makes her different', text: 'Her band was quietly altered by Harry, so it lags and can’t read her excitement. The system that serves everyone their passion can’t see hers. When she touches the golden Compass, it goes haywire for one second, live, in front of the world. It has never happened before.' },
    { label: 'Her danger', text: 'Her readings are normal. Her curiosity is not.' },
    { label: 'Her house', text: '{{Her house}}' },
    { label: 'The people around her', text: 'Mum: {{Mum’s name}}. Dad: {{Dad’s name}}. Brother: {{Brother’s name}}. Best friends: Nell (Renella) and Sam (Samson, always Sammy to her). Chosen family: {{Her chosen family}}.' },
    { label: 'The romance', text: 'Team Spark or Team Anchor, both genuinely right for her. The Spark is Jase, her Orion nemesis, who meets the girl she is becoming and makes her feel alive. The Anchor is Sam, her oldest friend, who knew her before she had to prove herself and makes her feel known.' },
    { label: 'The choice she has to make', text: '{{Her choice in Book One}}' },
  ],
  bookOne: [
    { label: 'Where it opens', text: 'The end of August 2076, just before her Academy year begins, with the reveal that her points are the fourth highest in the realm: the last of the four places, so the girl with no passion only just makes it in.' },
    { label: 'The clock', text: 'The Academy year from September 2076, then eleven weeks of Exhibition season from the 50th Reconnection Day on 7 May 2077, her dad’s fiftieth birthday. The book ends during the Grand Final.' },
    { label: 'The threat, hidden as an advert', text: 'Recalibrate, a gentle mood-ring update, is announced in passing at the start. It quietly adds mapping and location sharing.' },
    { label: 'The climax', text: 'Recalibrate rolls out to every band at once during the Grand Final, at the moment her difference is most likely to be exposed.' },
    { label: 'The structure', text: '{{Book One structure}}' },
    { label: 'The ending', text: '{{Book One ending}}' },
    { label: 'The feeling on the last page', text: 'Enraged, awakened, needing to know more, satisfied but shaken, and “it’s ON.”' },
  ],
};

export const machine: Layer[] = [
  { title: 'The Academy', official: 'Where the world is governed and the Academy year is broadcast. One guaranteed year of education for every sixteen-year-old.', actual: 'The greatest show on Earth, designed by a man who understands branding better than anyone alive. Bread and circuses, with houses and merch.' },
  { title: 'The Houses', official: 'Polaris, Aurora, Lyra and Orion: the Academy’s four rules for the whole world, chosen by the Compass.', actual: 'Teams to root for and a show nobody can stop watching. The institution decides your direction.' },
  { title: 'The Exhibition', official: 'The World’s Fairs, brought back. “Only this time, there would be no nations. There would be children.” A celebration of youth that finds every child’s potential.', actual: 'A festival that hardened into a judgement in 2051, and a hunt for the young genius who can cure what no one can name.' },
  { title: 'The LiFE Band', official: 'Convenience, no screens, a life assistant that knows you.', actual: 'Secretly a radiation exposure meter, like a nuclear worker’s dosimeter: a number, not a diagnosis. And surveillance built in.', safe: 'Constant surveillance and emotional nudging. And Recalibrate is coming.' },
  { title: 'The Points', official: 'No money, no fines. Every right free; points for doing good.', actual: 'The basics are grey, and colour, flavour and wonder are paid upgrades. The economy parentifies children by design.' },
  { title: 'Realignment', official: 'Compassion, not prison: help for people who are unhappy with their circumstances.', actual: 'People whose readings climb too high are quietly removed to Isola, where new fixes are tested on them.', safe: 'People who seem “not themselves” have a way of disappearing there, so everyone learns to smile.' },
  { title: 'Rehoming', official: 'A permanent fresh start in the realm that suits your soul. Always a choice.', actual: 'Those who respond well are returned to a different realm, so they never tell loved ones anything strange. Nobody seems to come home.', safe: 'Nudged by points, stigma and recommendations. And nobody seems to come home.' },
  { title: 'The Director', official: 'The humble, beloved leader who keeps offering to step down.', actual: 'The keeper of the noble lie, sitting on top of the very company that broke the world.', safe: 'The keeper of a lie at the foundation of the world.' },
];

export const eras: { when: string; title: string; text: string }[] = [
  { when: 'Before 2027', title: 'The world before', text: 'Our world. Nonna is born in 1994; the Director in 2006, heir to a global defence company.' },
  { when: '7 May 2027', title: 'The event', text: 'The Great Reconnecting. The Shake, the Drift and the Settling fuse the continents into one land.' },
  { when: '2027 to 2032', title: 'The immediate aftermath', text: 'Around eighty per cent of the world is lost. Also: community, purpose, belonging and duty.' },
  { when: 'The rebuild years', title: 'The rebuild', text: 'Armies become the Restoration Corp. The world refuses to go “back to normal”.' },
  { when: 'The new order', title: 'Realms, councils, Director', text: 'The public cries out for a leader like him. He offers to lead “while the world finds its feet”.' },
  { when: '2032 to 2051', title: 'The new systems', text: 'Money abolished, then collapsed. Points, bands and the School of Life by about 2035. The first Exhibition in 2037; the first “full” one in 2051.' },
  { when: '2077', title: 'The present day', text: 'The golden jubilee. Fifty years reconnected.' },
];

export const truth: { title: string; text: string }[] = [
  { title: 'The Secret', text: 'The world was told an undersea climate catastrophe beyond human control nearly ended everything, and that humanity survived thanks to a divine fix.' },
  { title: 'What happened', text: 'The Director’s family’s defence company ran an AI-controlled weapons test that went rogue, detonating two enormous bombs under the ocean on opposite sides of the globe.' },
  { title: 'The two scars', text: 'Isola, cleaned up for show and used for Realignment. Trovata, the still-contaminated second blast site, where the people who knew too much were sent.' },
  { title: 'How it held', text: 'Severed undersea cables meant nobody could compare notes. The family company controlled what was measured. Scientists who suspected were absorbed, dismissed or moved away.' },
];

export const director = {
  name: 'Benedict Reverington',
  stages: [
    { title: 'Heir', text: 'Born 2006 into an old-money family whose defence company had its hands in everything. He despised the establishment behind his own name.' },
    { title: 'Survivor', text: 'Twenty-one at the Reconnecting. His father died in it.' },
    { title: 'The world’s darling', text: 'He had been speaking out about the old system failing. When the dust settled, the public cried out for a leader like him.' },
    { title: 'Reformer', text: 'He abolished money, built the points, and created the Exhibition out of his love of the World’s Fairs. He actually does a good job.' },
    { title: 'Director', text: 'Seventy-one in 2077. Humble, cheeky, sometimes too honest, and always ready to hand over the reins. The people won’t let him.' },
    { title: 'The turn', text: 'He starts hiding the damage the illnesses do, and chooses to let people suffer rather than tell the truth. Bit by bit, until his own sister disappears.', safe: 'To protect the lie, he starts choosing it over people. Bit by bit, until his own sister disappears.' },
  ],
  log: [
    { decision: 'Naming the show and the seat of government The Academy', era: 'BE' },
    { decision: 'Abolishing money, then introducing the points system', era: 'BE' },
    { decision: 'The first Exhibition, from his love of World’s Fairs (2037)', era: 'BE' },
    { decision: 'Exiling truth-tellers to Trovata', era: 'PE' },
    { decision: 'His sister’s disappearance', era: 'PE' },
    { decision: 'Recalibrate and its location sharing', era: 'PE' },
  ],
  prequel: 'The Director’s prequel, in the spirit of The Ballad of Songbirds and Snakes: {{Prequel logline}}',
};

export const nonna = {
  name: 'Nonna',
  realName: '(real name: {{Nonna’s real name}})',
  phases: [
    { title: 'Before', text: 'Born 1994. Left Italy for the UK at seven, where she met Harry, her lifelong best friend. A few months into a job as PA to the Director’s father.' },
    { title: 'During', text: 'As it happened, the father asked her to back everything up. He died; his directive stayed with her, on an old hard drive. Soon after, she found out she was four months pregnant.' },
    { title: 'After', text: 'Presumed dead, she took a new identity, deactivated her band and wore it as a ruse. A sweet old Nonna, hiding in plain sight in the Director’s own city.' },
    { title: 'Now', text: 'She nags about recipes and hums the kneading song: “palms up and down, round and round.” The way she kneads dough is the way you unlock the family safe.' },
  ],
  companion: 'Young Nonna and Harry’s love story through the end of the world, told partly through her journal.',
};

export const seven = [
  'They were born with the new world, on 7 May 2027.',
  'Orphaned as babies, they were raised by the Academy, part wards, part siblings, part inner circle.',
  'Now they are fifty, living symbols at the centre of the jubilee.',
  'And one of them is her father.',
];

export const stories: { title: string; text: string; genre: string }[] = [
  { title: 'The Director', text: 'The origin of his villain arc, as The Ballad of Songbirds and Snakes is for Snow.', genre: '{{Genre}}' },
  { title: 'Nonna and Harry', text: 'A love story through the end of the world, partly told through her journal.', genre: '{{Genre}}' },
  { title: 'The Seven', text: 'Seven lives, seven stories. Not all of them are loyal.', genre: '{{Genre}}' },
  { title: 'Isola', text: 'Every character’s island journey is its own story, made for an anthology.', genre: 'Anthology' },
  { title: 'Harry', text: 'Never fully explained, on purpose. A black box.', genre: 'Kept a mystery' },
  { title: 'Trovata', text: '{{Trovata as a story}}', genre: '{{Genre}}' },
  { title: 'The first Exhibition', text: '{{The 2037 Exhibition as a story}}', genre: '{{Genre}}' },
  { title: 'The missing sister', text: 'Mentioned only in passing, like a name on a family tapestry. Readers will theorise for years.', genre: '{{Genre}}' },
];

export const clues: { first: string; later: string }[] = [
  { first: 'Nonna nags about recipes: “One of these days these recipes are going to be the most valuable thing you own, my girl.”', later: 'It turns out to be literally true.' },
  { first: 'A lullaby about kneading dough.', later: 'The movements open the family safe.' },
  { first: 'Polaris’s motto, “Seek, and you shall find.”', later: 'The first line of Nonna’s lullaby.' },
  { first: 'Orion’s hidden wall of names, for those who dared too far.', later: 'Those weren’t heroic deaths.' },
  { first: 'Rehoming: lovely, compassionate social mobility.', later: 'Why do people never seem to come home?' },
  { first: 'Nonna’s diary, sold as a cheap stocking filler.', later: 'A cipher manual for instalments still to come.' },
];

export const ipMap: { title: string; items: string[] }[] = [
  { title: 'Books', items: ['The main series', 'The Director’s prequel', 'Nonna’s journal, published as a real in-world book', '{{Number of books in the main series}}'] },
  { title: 'Screen', items: ['Shot in real places, bent through colour, light and practical effects, so fans can visit', '{{TV or film plan}}'] },
  { title: 'Interactive', items: ['The Compass quiz: find your house (live on the site)', 'An in-world LiFE beta advert that doubles as the newsletter sign-up', 'The long cipher, from the first page', '{{Game}}'] },
  { title: 'Things to hold', items: ['House hoodies, pins and mascots', 'The kneading song, a real song like “The Hanging Tree”', '{{Merch range}}'] },
  { title: 'Places', items: ['Harry’s clubhouse as a walk-through attraction', 'Real filming locations', '{{Theme park}}'] },
];

export const whyFirst = [
  'Nonna remembers the world before. Her mum stays silent. She inherits a world she never saw being made.',
  'She lives inside the world’s greatest success story, and she is the one who can’t understand why everyone else seems so happy.',
  'In a world of manufactured contentment, her discontent is the alarm. What looks like dysfunction may be accurate perception.',
  'Her arc runs from “everyone is happy but me” to “nobody actually is.”',
];

export const comps = '{{Comps}}';

// Section 02: what Unitaria is. Katey, 3 Oct 2026: "the most important part of the story".
export const essence = {
  line: 'Unitaria is not “the future”. It’s our world, if our culture had fifty more years to evolve.',
  made: [
    { title: 'The Academy', isNot: 'Hogwarts', is: 'Oxford + Stanford + the Olympics + TikTok + a royal institution + reality television + the world’s most prestigious university.' },
    { title: 'The Houses', isNot: 'Hogwarts houses', is: 'College sports teams + Greek life + fandom + varsity culture + social identity.' },
    { title: 'The Exhibition', isNot: 'A dystopian death tournament', is: 'The Olympics + Eurovision + a World’s Fair + America’s Got Talent + university admissions + the Met Gala + reality TV.' },
    { title: 'The Director', isNot: 'A dictator', is: 'A head of state who is also the world’s biggest celebrity. Nobody thinks “God, I hate him.” They think “OH MY GOD, THE DIRECTOR IS HERE.”' },
    { title: 'The LiFE Band', isNot: 'A surveillance ankle monitor', is: 'Apple Watch + the TikTok algorithm + Spotify Wrapped + Google Maps + LinkedIn + Duolingo + your entire digital identity. You wear it voluntarily. You like it. It tells you “You’re doing great.” Until one day: wait, who taught it what great means?' },
    { title: 'The Points', isNot: 'Prison points', is: 'Loyalty points + university applications + social credit + gamification + Uber ratings + achievement badges. People compete for them and show them off: “She’s got 14,000 points, babe, obviously she’s getting into Neuropa.”' },
  ],
  silliness: 'Technology doesn’t remove silliness. It gives silliness a production budget.',
  scene: 'The Director isn’t in a dark throne room. He’s walking through the Academy in sunglasses, in something insanely expensive but somehow effortless. His band flashes, the cameras turn, someone screams “DIRECTOR!” He laughs and waves, the snow leopard mascot appears behind him, and the whole stadium erupts while millions watch at home. Somewhere beneath all of it is a truth that could destroy everything he’s built.',
  want: ['I’d love to go to the Academy.', 'I want to know my house.', 'I want the band.', 'I want to meet the Director.', 'I want to be a Fellow.'],
  turn: 'Gradually: oh. Oh no. I actually understand why everyone stays.',
  rule: 'So the world is never obviously sinister. The romance is romantic, the houses are genuinely exciting, the Exhibition is genuinely spectacular, and Unitaria is genuinely better than our world in some ways. When the cracks appear, the reader doesn’t think “get out!” They think “but I don’t want this world to disappear either.”',
  implicated: 'The reader has to answer the same question as the characters, and stops watching Unitaria. They’re implicated in it.',
};

// The loud modern layer (Edit 2, from Katey's notes on 3 Oct 2026): what living in Unitaria feels like.
export const sightings: { account: string; post: string }[] = [
  { account: 'Director sightings', post: 'He’s doing his community task in Shangokyo today.' },
  { account: 'Academy network', post: 'Director spotted at the Academy.' },
  { account: 'Outfit breakdowns', post: 'Is that the jacket from the 2059 Exhibition?' },
  { account: 'Reaction account', post: 'He offered to resign again. The public said no.' },
  { account: 'The Director', post: 'Happy Reconnection Day!' },
];

export const bandPings: { time: string; text: string }[] = [
  { time: '07:00', text: 'The under-16s daily drop is live. Community tasks near you.' },
  { time: '08:15', text: 'Your one automatic task today: the community kitchen.' },
  { time: '12:30', text: '1,000 points unlocks Italian week on your family menu.' },
  { time: '17:45', text: 'Recalibrate beta: find the underlying issues and tackle them with clarity.' },
  { time: '21:00', text: 'You’re doing great.' },
];

export const teams = [
  { name: 'Polaris', fans: 'Wayfinders', mascot: 'Aris the husky', chant: 'Curious and wise, the ultimate sleuth, / Polaris is the true guiding star of the truth!', bg: '#0e1d33', fg: '#c9d2de' },
  { name: 'Aurora', fans: 'Dawnchasers', mascot: 'Aura the fox, with a light-up tail', chant: 'Cunning like a fox, the spark and the flame, / Aurora’s the wildfire nobody can tame!', bg: '#3b2a5c', fg: '#9fe0c8' },
  { name: 'Lyra', fans: 'Songkeepers', mascot: 'Lyr the swan', chant: 'Loyal and relentless, united here we stand, / Lyra holds the world in the palm of their hands!', bg: '#f4efe8', fg: '#6e4636' },
  { name: 'Orion', fans: 'Trailblazers', mascot: 'Ori the snow leopard', chant: 'Bold, daring and fearless are we, / Orion pushes further than the eye can see!', bg: '#0b0b0b', fg: '#e6cf9a' },
];

export const orion = [
  { label: 'The mascot', text: 'Ori, in an absurdly expensive arena suit, cannonballing onto the stage to music and pyrotechnics. He has his own social account, and nobody knows who’s inside.' },
  { label: 'The kit', text: 'Onyx black hoodies and jackets with flecks of gold, Ori plushies, belt-star pins.' },
  { label: 'The rivals', text: 'Lyra, bold against gentle. Polaris, doers against thinkers.' },
  { label: 'The legends', text: 'The Ascent, a race up the outside of the Academy’s tower. The Climb, the bell rung at midnight by every new member.' },
  { label: 'The alumni', text: 'Leaders, explorers, Restoration Corp commanders and Persovia’s space pioneers.' },
];
