import sharp from 'sharp';
const f = process.argv[2];
const { data, info } = await sharp(f).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = info.channels;
const white = (x, y) => { const i = (y * W + x) * C; return data[i] > 238 && data[i+1] > 238 && data[i+2] > 238; };
console.log(W, H);
// horizontal gutters: rows mostly white
const rows = [];
for (let y = 0; y < H; y++) { let n = 0; for (let x = 0; x < W; x += 2) n += white(x, y); if (n / (W/2) > 0.9) rows.push(y); }
console.log('rows', JSON.stringify(rows));
