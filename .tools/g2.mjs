import sharp from 'sharp';
const { data, info } = await sharp(process.argv[2]).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, C = info.channels;
const lum = (x, y) => { const i = (y * W + x) * C; return Math.min(data[i], data[i+1], data[i+2]); };
const runs = (arr) => { const out=[]; let s=null; arr.forEach((v,i)=>{ if(v&&s===null)s=i; if(!v&&s!==null){out.push([s,i-1]);s=null;} }); if(s!==null)out.push([s,arr.length-1]); return out; };
const rowW = []; for (let y=0;y<H;y++){let n=0;for(let x=0;x<W;x++) n+= lum(x,y)>232; rowW.push(n/W>0.6);}
console.log('rows', JSON.stringify(runs(rowW)));
for (const [a,b] of [[0,316],[322,652],[662,1023]]) {
  const col=[]; for(let x=0;x<W;x++){let n=0;for(let y=a+20;y<b-20;y++) n+= lum(x,y)>232; col.push(n/(b-a-40)>0.85);}
  console.log(a,b,JSON.stringify(runs(col)));
}
