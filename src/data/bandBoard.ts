// Sample task cards for the /band "Read the board" mock-up.
// Tasks and points come from Neuropa's boards in the World Bible; the timers are illustrative.
export type BoardCard = {
  title: string;
  points: number;
  colour: 'gold' | 'green' | 'violet';
  state: 'open' | 'hot' | 'soldout' | 'pledged';
  seconds: number; // starting countdown for the mock-up
};

export const boardCards: BoardCard[] = [
  { title: 'Read-aloud hour at the Grand Library', points: 40, colour: 'gold', state: 'open', seconds: 1468 },
  { title: 'Telescope night guide on the Walk of Innovation', points: 60, colour: 'gold', state: 'hot', seconds: 312 },
  { title: 'Crowd extra for Exhibition broadcasts', points: 80, colour: 'violet', state: 'soldout', seconds: 0 },
  { title: 'Community pledge build: new learning hall wing', points: 200, colour: 'green', state: 'pledged', seconds: 2391 },
];
