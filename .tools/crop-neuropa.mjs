import sharp from 'sharp';
const src = 'assets/concept-art/neuropa-collage.png';
// [file, left, top, right, bottom]; the top ~56px of each tile holds the collage's own caption, so it is cut off.
const T = 56;
const tiles = [
  ['overview', 2, 0 + T, 538, 315],
  ['broadcast-quarter', 1002, 0 + T, 1534, 315],
  ['walk-of-innovation', 2, 322 + T, 501, 656],
  ['grand-library', 511, 322 + T, 1033, 656],
  ['coffee-houses', 1042, 322 + T, 1534, 656],
  ['speakers-corner', 2, 662 + T, 264, 1022],
  ['square-of-the-seven', 273, 662 + T, 551, 1022],
  ['central-terminal', 560, 662 + T, 931, 1022],
  ['crescents', 941, 662 + T, 1230, 1022],
  ['fashion', 1239, 662 + T, 1534, 1022],
];
for (const [name, l, t, r, b] of tiles) {
  await sharp(src).extract({ left: l, top: t, width: r - l, height: b - t }).jpeg({ quality: 92, mozjpeg: true }).toFile(`assets/crops/neuropa-${name}.jpg`);
}
console.log('ok');
