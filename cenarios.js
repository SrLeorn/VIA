/* VIA — cenário contínuo, coordenadas estáveis, sem dependências. */
(function(root){
const extra={
grass:'M4 58Q9 35 3 29 M9 58Q22 35 15 22 M17 58Q20 42 30 37 M31 58Q34 24 26 17 M39 58Q39 37 49 26 M48 58Q54 40 61 39',
fern:'M30 59Q26 28 40 5 M30 49Q9 49 9 37Q23 36 30 49 M30 39Q13 37 15 25Q26 24 30 39 M33 28Q22 24 24 13 M30 47Q51 42 54 31Q39 32 30 47 M34 30Q50 27 53 16',
mushroom:'M7 31Q12 4 32 7Q53 5 59 31Z M26 32L23 57Q32 62 42 57L38 32 M18 23h2 M34 15h2 M46 25h2',
frog:'M12 30Q4 9 21 14Q30 8 36 15Q58 8 54 31 M12 30Q31 12 54 31L52 48Q31 57 12 48Z M17 48L4 57H24 M46 48L59 57H40 M19 22h2 M42 22h2 M22 38Q32 45 44 37',
lily:'M31 34L45 13Q14 0 5 24Q-1 47 31 53Q62 52 61 27Q59 14 49 11Z M17 32Q28 17 39 31Q30 48 17 32',
firefly:'M29 28Q19 12 12 23Q10 34 29 32 M33 28Q48 9 53 26Q52 38 33 32 M25 39Q32 29 39 39Q42 54 31 56Q21 53 25 39 M31 28V17 M20 6h1 M49 51h1',
waterfall:'M4 9H54L59 17H13L16 47 M24 18V44 M34 17V49 M44 18V44 M53 18V46 M9 49Q14 40 21 48Q31 42 38 49Q46 39 56 49 M5 56Q32 65 62 54',
dolphin:'M3 40Q15 16 36 19L42 6L43 23Q50 27 55 34L63 32L58 40L63 48L52 44Q35 39 20 39L13 49L14 36Q7 43 3 40 M36 30h1',
whale:'M3 28Q8 7 32 12Q51 12 54 34L63 24L60 43Q52 58 21 52Q1 49 3 28 M12 29h1 M5 40Q18 47 28 44 M27 46L34 58L39 48 M17 9V2 M13 5L10 1 M21 5L25 1',
orca:'M3 39Q9 18 29 18L35 3L39 22Q49 27 53 35L61 28L59 44L50 47Q27 61 8 49Z M16 30Q22 26 25 33Q21 39 16 36Z M9 46Q26 37 42 46 M29 46L37 58',
shark:'M2 34Q15 24 26 25L34 6L37 26L51 31L62 17L58 35L62 48L49 39Q28 49 2 34 M16 32h1 M25 32L24 40 M30 32L29 40 M36 41L41 51',
octopus:'M19 33Q8 6 31 5Q56 5 45 33 M19 31Q3 34 7 50Q12 61 17 46 M23 32Q16 44 24 57Q33 62 31 45 M38 32Q47 53 39 58Q33 61 35 44 M45 31Q60 34 57 51Q51 60 49 44 M25 22h1 M37 22h1',
starfish:'M32 4Q37 22 42 24L61 25L43 38L48 60L31 46L13 60L20 38L2 25L23 23Z M31 25V36 M25 32h13',
seaweed:'M16 60Q2 44 16 33Q28 19 13 5 M30 60Q44 44 30 32Q15 19 31 4 M46 60Q59 47 48 33Q37 19 50 5',
wreck:'M3 38L23 42L26 55L33 45L61 40L52 59H13Z M18 41V10L45 16L18 31 M37 43V8 M38 10L54 32H39 M17 50h2 M43 51h2 M9 38L3 30',
crab:'M18 35Q31 23 46 35L46 49H18Z M18 39L7 31L3 18L10 24L15 16L15 29 M46 39L57 31L61 18L54 24L49 16L49 29 M18 45L7 49 M18 49L10 58 M46 45L57 49 M46 49L54 58 M26 31V23 M38 31V23',
lizard:'M8 8Q42 8 34 30Q22 52 50 58 M34 23L49 13L57 16 M32 27L15 20L10 24 M31 40L47 37L52 41 M32 43L16 48L12 44',
arch:'M4 59V22L17 6L46 5L59 22V59H44V29Q31 10 20 30V59Z M7 20L17 24 M46 14L52 25',
eagle:'M31 30Q17 9 2 16L15 32L4 29L21 43L30 38L31 55L38 42L60 23L46 29L61 13Q45 10 34 30Z',
bench:'M6 26H58V37H6Z M10 41H55 M13 41V56 M51 41V56 M14 26V14 M49 26V14',
balloon:'M8 21Q6 2 32 3Q58 2 56 21Q55 39 39 48H25Q9 38 8 21 M25 48L26 59H39V48 M22 5Q10 25 28 47 M40 5Q52 25 36 47',
rocket:'M21 39Q16 12 32 2Q48 12 43 39Z M21 27L7 45L21 41 M43 27L57 45L43 41 M25 44L32 61L39 44 M26 20A6 6 0 1 0 38 20A6 6 0 1 0 26 20',
chestOpen:'M7 34V58H57V34Z M7 34L5 10Q30 -2 54 10L57 25L7 34 M15 12L17 28 M46 12L48 26 M27 34H37V44H27Z M14 41V57 M50 41V57 M24 26L32 15L40 25'
};
const sets=[['grass','butterfly','tree','pine','fern','mushroom'],['grass','flower','bee','flower','leaf','butterfly'],['reed','lily','frog','reed','firefly','dragonfly'],['fish','dolphin','coral','whale','orca','octopus','shark','starfish','seaweed','wreck'],['shell','crab','palm','grass','dune','bird'],['cactus','stone','lizard','arch','dune','sun'],['mountain','pine','eagle','stone','bridge','fern'],['house','tree','lamp','bridge','flower','bench'],['building','lamp','tree','window','bench','building'],['cloud','bird','balloon','moon','sun','cloud'],['cloud','horizon','bird','moon','star','horizon'],['planet','ufo','alien','rocket','comet','star']];
function render({coords,color,themeIndex,shapes}){
 const all={...shapes,...extra};let defs='',body='';let count=0;
 for(const [name,d]of Object.entries(all))defs+=`<symbol id="scene-${name}" viewBox="0 0 64 64"><path d="${d}" fill="none" stroke="currentColor" stroke-width="1.25" stroke-dasharray=".15 3.3" stroke-linecap="round" stroke-linejoin="round"/></symbol>`;
 const draw=(name,x,y,size,c,opacity=.7,flip=false)=>{count++;body+=`<g data-scenery="${name}" transform="translate(${x} ${y}) scale(${flip?-1:1} 1)"><use href="#scene-${name}" x="${-size/2}" y="${-size/2}" width="${size}" height="${size}" color="${c}" opacity="${opacity}"/></g>`};
 const path=(d,c,alpha=.32,w=1.5)=>body+=`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-dasharray=".2 5" stroke-linecap="round" opacity="${alpha}"/>`;
 // Living clusters at every step, with more layers close to each chapter chest.
 for(let n=1;n<=366;n++){
  const k=themeIndex(n),local=n-k*30,p=coords(n),c=color(n),rich=Math.min(1,local/30);
  const sides=local<6?[n%2]:[0,1];
  for(const side of sides){const x=side?424:56;const sy=p.y+(side?17:-14);const options=sets[k];let name=options[(local+side*3)%options.length];
   if(local<=5&&k>0){draw(sets[k-1][(local+side)%sets[k-1].length],side?453:27,sy-38,59,color(n-3),.65-local*.075,!!side)}
   if(k===0){name=local===1?'grass':local===2?'tree':local<8?['grass','tree','butterfly'][local%3]:['tree','pine','fern','tree','pine'][local%5]}
   if(k===1)name=side?'flower':local%4===0?'bee':'flower';
   draw(name,x,sy,local<5?48:52+rich*19,c,.6+rich*.18,!!side);
   if(local>=10){draw(options[(local*3+side+2)%options.length],side?462:18,sy-37,29+rich*8,c,.38+rich*.2,!!side)}
   if(local>=20){draw(k===0?(side?'pine':'tree'):options[(local+side+1)%options.length],side?390:90,sy+35,k===0?64:31,c,.5,!!side)}
   // Long connected geographic features, placed in the outer banks, never over the steps.
   if([2,3,4].includes(k)){for(let z=0;z<3;z++){const edge=t=>(side?389+z*15:91-z*15)+12*Math.sin(t*Math.PI/7);const a=edge(n-.5),b=edge(n+.5),m=edge(n);path(`M${a} ${p.y+48}Q${m} ${p.y} ${b} ${p.y-48}`,c,.22+z*.035)}}
   if([0,1,5,6,7,8].includes(k)&&local>4){path(`M${side?373:0} ${sy+45}Q${side?417:44} ${sy+23} ${side?480:107} ${sy+46}`,c,.22)}
   if([9,10].includes(k)&&n%3===0)draw('cloud',side?446:34,sy-43,94,c,.27);
   if(k===11&&n%2===0){path(`M${x-30} ${sy-38}l2 0 M${x+26} ${sy+34}l1 0 M${x-21} ${sy+42}l1 0`,c,.8,2)}
  }
  // Authored landmarks rather than only random icons.
  if(n===1){draw('butterfly',83,p.y-30,29,c,.85);draw('grass',38,p.y+14,43,c)}
  if(n===24||n===28||n===30){for(const side of[0,1]){draw('pine',side?463:17,p.y-48,85,c,.48);draw('tree',side?403:77,p.y+26,72,c,.7)}}
  if(n===65||n===73||n===85){draw('waterfall',n%2?428:52,p.y,100,c,.85);draw('frog',n%2?398:82,p.y+49,30,c);draw('lily',n%2?452:28,p.y+57,30,c)}
  if(n===93||n===99||n===113){for(let j=0;j<6;j++)draw('fish',20+(j%3)*28,p.y-30+Math.floor(j/3)*27,23,c,.65)}
  if(n===116){draw('wreck',426,p.y,103,c,.9);for(let j=0;j<3;j++)draw('fish',391+j*22,p.y-45-j*12,21,c);draw('seaweed',462,p.y+46,45,c)}
  if(n===121){draw('wave',46,p.y+22,85,c,.4);draw('shell',421,p.y,37,c);draw('crab',452,p.y-42,36,c)}
  if(k===4&&local>15&&local%3===0){draw('dune',45,p.y,95,c,.6);draw('dune',430,p.y-20,95,c,.6)}
 }
 return{defs,body,count};
}
root.ViaScenery={extra,sets,render};if(typeof module!=='undefined')module.exports=root.ViaScenery;
})(typeof globalThis!=='undefined'?globalThis:this);
