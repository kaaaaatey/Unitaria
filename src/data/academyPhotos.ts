// The Academy concept art, cropped into scenes. Used on Home and on the Academy page.
import greatHall from '../../assets/crops/academy-great-hall.jpg';
import roundTable from '../../assets/crops/academy-round-table.jpg';
import library from '../../assets/crops/academy-library.jpg';
import galleryHall from '../../assets/crops/academy-gallery-hall.jpg';
import seaView from '../../assets/crops/academy-sea-view.jpg';

// Captions from CANON.md (the building). Spans make a magazine-style grid on wide screens.
export const academyGallery = [
  { img: greatHall, title: 'The Great Hall', text: 'Soaring arches, house banners and a towering column of light.', span: 'col-span-2 lg:col-span-4 lg:row-span-2', sizes: '(min-width: 1024px) 760px, 100vw', alt: 'The Great Hall: soaring white arches, tall banners and a glass column of light, with students crossing a polished marble floor.' },
  { img: roundTable, title: 'The round table', text: 'Beneath the star-map dome, flanked by marble statues.', span: 'col-span-2 lg:col-span-2', sizes: '(min-width: 1024px) 380px, 100vw', alt: 'A round table beneath a glass dome etched with a star map, flanked by marble statues, with arches open to the sea.' },
  { img: seaView, title: 'Arches onto the lake', text: 'A distant city of spires across the water.', span: 'col-span-2 lg:col-span-2', sizes: '(min-width: 1024px) 380px, 100vw', alt: 'Tall arched windows opening onto a calm lake at sunset, with a distant city of spires and hovercraft in the sky.' },
  { img: library, title: 'The Grand Library', text: 'Ladders, glowing golden globes and long reading tables.', span: 'col-span-1 lg:col-span-3', sizes: '(min-width: 1024px) 570px, 50vw', alt: 'The Grand Library: wooden stacks with ladders, a glowing golden globe and long reading tables.' },
  { img: galleryHall, title: 'The long gallery', text: 'Golden armillary spheres, and light at every turn.', span: 'col-span-1 lg:col-span-3', sizes: '(min-width: 1024px) 570px, 50vw', alt: 'A long marble gallery with golden armillary spheres, trees in planters and arches of light.' },
];
