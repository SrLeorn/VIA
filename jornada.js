(function(root){'use strict';
const THEMES=[
['Floresta','O primeiro passo abre uma clareira.','#72e6a2','#07130e',['sprout','tree','stone','butterfly']],
['Jardim','O cuidado ganha espaço para florescer.','#94e4a0','#0a150f',['flower','leaf','bee','tree']],
['Lago e rio','Encontre um ritmo que caiba no seu dia.','#61dccc','#071617',['reed','wave','dragonfly','fish']],
['Oceano','Seu caminho vai encontrando novos horizontes.','#62c8ee','#07121c',['shell','fish','coral','wave']],
['Praia e dunas','Uma pausa também faz parte do percurso.','#a8d7d0','#101718',['shell','palm','sun','dune']],
['Deserto','Um pequeno passo ainda é um passo.','#e8c480','#19140c',['cactus','dune','sun','stone']],
['Cânions e montanhas','Olhe para tudo o que já atravessou.','#e7a98c','#19120f',['mountain','bridge','stone','pine']],
['Vila','Você está construindo sua própria rotina.','#e5b592','#181211',['house','lamp','bridge','tree']],
['Cidade iluminada','Há muitos jeitos de seguir em frente.','#d3b0df','#15111c',['building','lamp','window','cloud']],
['Céu','Respire. Ainda há muito para descobrir.','#b6b8ed','#10121e',['cloud','moon','bird','star']],
['Alta atmosfera','Novas perspectivas, o mesmo cuidado com você.','#9ac7ed','#0c121f',['horizon','star','satellite','moon']],
['Espaço','Seu primeiro grande ciclo. Um universo de próximos passos.','#b59af0','#100d1d',['planet','ufo','alien','comet']]
];
const MARKS=[30,60,90,120,150,180,210,240,270,300,330,366];
const SHAPES={
sprout:'M32 55V31 M32 36C8 37 10 15 10 15C32 12 33 29 32 36 M32 29C32 8 54 10 54 10C56 28 40 33 32 29',
tree:'M32 57V38 M12 39Q1 29 17 22Q9 7 29 8Q39 0 45 16Q65 14 56 32Q65 46 42 45Q28 54 12 39',
pine:'M32 4L17 24H24L10 40H24L17 49H47L40 40H54L40 24H47Z M32 49V59',
stone:'M7 47L14 29L34 19L52 28L59 47Z M14 29L32 37L34 19 M32 37L51 47',
butterfly:'M32 24V51 M30 24L22 16 M34 24L42 16 M30 30C7 2 0 46 25 40C7 59 36 63 30 30 M34 30C57 2 64 46 39 40C57 59 28 63 34 30',
flower:'M32 56V37 M32 48Q48 32 53 42Q48 53 32 52 M29 17C16 0 6 20 22 27C1 31 16 48 29 34C34 55 50 43 40 30C63 30 52 10 39 19C45 0 25 1 29 17 M27 26A6 6 0 1 0 39 26A6 6 0 1 0 27 26',
leaf:'M12 53Q-1 10 55 7Q60 53 12 53 M12 53L45 19 M24 40L20 26 M34 29L45 31',
bee:'M21 26C3 1 40 2 33 24 M35 26C41 0 62 21 45 30 M15 35Q28 15 48 32Q56 45 42 52Q24 59 15 35 M25 28L31 53 M35 26L43 50 M48 32L58 27',
wave:'M3 25Q10 13 19 25T37 25T55 25 M3 39Q10 27 19 39T37 39T55 39 M3 53Q10 41 19 53T37 53T55 53',
reed:'M17 57V19 M14 9V24H20V9Z M37 57V11 M34 3V19H40V3Z M17 49Q7 35 3 37 M37 47Q46 28 56 26',
dragonfly:'M32 11V55 M27 9A5 5 0 1 0 37 9A5 5 0 1 0 27 9 M31 23Q-1 2 4 24Q9 32 31 27 M33 23Q65 2 60 24Q55 32 33 27 M31 32Q3 28 8 45Q17 49 31 35 M33 32Q61 28 56 45Q47 49 33 35',
fish:'M10 32Q31 6 50 30L62 20V45L50 35Q29 57 10 32 M21 28L22 28 M37 19Q31 32 37 44',
shell:'M29 55Q-4 36 9 18Q17 7 27 16Q33 0 41 14Q61 6 59 28Q64 42 37 55Z M29 52L16 22 M33 51V18 M37 51L49 22',
coral:'M32 58V24 M32 39Q11 43 11 19 M11 30Q1 29 3 15 M32 46Q54 47 53 24 M53 35Q64 31 60 18 M32 28Q21 28 22 8 M32 24Q43 25 42 7',
palm:'M30 60Q43 35 31 18 M31 18Q6 -1 4 22Q17 11 31 18 M31 18Q45 -1 60 19Q44 10 31 18 M31 18Q7 20 11 39Q19 24 31 18 M31 18Q48 20 53 36 M26 60H46',
sun:'M21 31A11 11 0 1 0 43 31A11 11 0 1 0 21 31 M32 5V12 M32 50V58 M5 31H12 M51 31H59 M12 11L17 17 M48 47L54 53 M49 13L54 8 M11 51L17 45',
dune:'M2 51Q19 13 38 37Q49 48 62 36 M2 57H62 M22 41Q37 11 59 31',
cactus:'M27 58V12Q32 1 38 12V58 M27 40H13Q6 40 6 32V23Q10 17 14 23V31H27 M38 32H49V15Q54 9 58 15V31Q58 41 48 41H38',
mountain:'M2 54L22 14L36 36L46 20L63 54Z M15 28L22 32L28 26 M41 30L47 35L51 29',
bridge:'M2 27H62 M2 37H62 M9 22V43 M22 22V43 M42 22V43 M55 22V43 M4 55Q14 43 24 55T44 55T62 55',
house:'M7 29L31 9L58 29 M14 27V57H51V27 M26 57V39H39V57 M21 31H24 M42 30H46',
lamp:'M31 58V21 M18 21H45L40 7H24Z M26 3H37 M25 58H38 M12 32L7 38 M50 32L55 38',
building:'M7 59V21H28V59 M29 59V5H54V59 M1 59H63 M14 29H20 M14 40H20 M14 50H20 M37 14H45 M37 26H45 M37 38H45 M37 49H45',
window:'M12 10H52V56H12Z M32 10V56 M12 33H52 M8 59H56',
cloud:'M12 45Q-2 34 12 26Q8 9 27 16Q38 1 48 23Q65 22 60 38Q58 47 43 45Z',
moon:'M45 7Q13 10 19 35Q25 54 52 45Q33 65 14 46Q-2 23 21 9Q33 3 45 7Z',
bird:'M3 34Q18 17 32 35Q48 17 62 34 M9 48Q18 38 27 48',
star:'M32 5L39 23L59 25L44 38L49 57L32 46L15 57L20 38L5 25L25 23Z',
horizon:'M0 49Q32 10 64 49 M0 57Q32 20 64 57 M9 17L11 17 M52 8L54 8 M37 3L39 3',
satellite:'M24 25L40 18L48 37L31 45Z M19 21L4 28L13 49L27 43 M43 14L57 8L64 27L52 33 M18 57L27 49 M14 48Q9 59 22 62',
planet:'M14 27A20 20 0 1 0 51 17 M16 28A20 20 0 0 1 51 17 M6 43Q-3 37 22 23Q51 7 61 17Q69 26 38 43Q13 56 6 43 M13 34Q30 37 53 19',
ufo:'M6 33Q31 16 59 33Q33 56 6 33Z M19 27Q32 2 46 26 M16 34L18 34 M29 37L31 37 M43 35L45 35 M23 49L18 59 M40 49L45 59',
alien:'M32 6Q4 4 10 30Q13 47 32 59Q51 47 54 30Q60 4 32 6Z M17 25Q32 24 29 38Q17 36 17 25 M47 25Q32 24 35 38Q47 36 47 25 M27 47H37',
comet:'M5 42A12 12 0 1 0 29 42A12 12 0 1 0 5 42 M16 26L42 3 M29 33L59 8 M33 46L61 20',
egg:'M31 6C18 6 8 29 8 40C8 63 55 63 55 40C55 28 43 6 31 6Z M11 30L20 24L29 31L39 24L51 30 M10 43H54',
pumpkin:'M32 16Q-1 8 5 37Q8 60 32 53Q56 60 60 37Q66 8 32 16 M31 16Q24 0 42 4 M32 18V51 M22 18Q10 33 23 52 M42 18Q54 33 41 52',
gift:'M7 28H57V58H7Z M3 19H61V29H3Z M32 19V58 M31 18Q4 21 14 7Q25 1 31 18 M33 18Q61 21 51 7Q40 1 33 18',
firework:'M32 24V4 M21 28L7 12 M42 28L58 12 M18 39H2 M46 39H63 M22 49L9 62 M41 49L53 62 M32 51V63 M29 38A3 3 0 1 0 35 38A3 3 0 1 0 29 38',
flags:'M1 12Q32 26 63 12 M6 15L10 31L21 20 M26 22L32 40L38 22 M44 20L55 31L59 15',
chest:'M7 30V55H57V30 M7 30Q6 9 20 9H44Q59 9 57 30Z M7 31H57 M14 12V54 M50 12V54 M27 27H37V39H27Z M32 33V35',
check:'M16 33L27 44L49 20'};

const H=35556;const coords=n=>({x:240+108*Math.sin(n*Math.PI/5),y:H-180-n*96});
const themeIndex=n=>Math.min(11,Math.max(0,Math.floor((Math.max(1,n)-1)/30)));
function mix(a,b,t){const c=s=>[1,3,5].map(i=>parseInt(s.slice(i,i+2),16));return '#'+c(a).map((v,i)=>Math.round(v+(c(b)[i]-v)*t).toString(16).padStart(2,'0')).join('')}
function palette(n){const i=themeIndex(n),k=(i+1)*30;if(i===11)return THEMES[i];const t=Math.max(0,Math.min(1,(n-(k-5))/10));return[THEMES[i][0],THEMES[i][1],mix(THEMES[i][2],THEMES[i+1][2],t),mix(THEMES[i][3],THEMES[i+1][3],t),THEMES[i][4]]}
function color(n){const k=Math.max(0,Math.min(11,Math.floor((n-1)/30))),b=k*30;if(k>0&&n<b+6)return mix(THEMES[k-1][2],THEMES[k][2],(n-b+5)/10);return palette(n)[2]}

Object.assign(SHAPES,ViaScenery.extra);

const marks=MARKS.slice();
function grant(state,position){const next=Math.max(0,Math.min(366,Math.trunc(position)));return{...state,position:next,awards:[...new Set([...(state.awards||[]),...marks.filter(n=>n>state.position&&n<=next)])].sort((a,b)=>a-b)}}
function retreat(state,absentDays){return{...state,position:Math.max(0,state.position-Math.floor(Math.max(0,absentDays)/7)),awards:[...(state.awards||[])]}}
function svg(state){const position=state.position||0,won=new Set(state.awards||[]),scene=ViaScenery.render({coords,color,themeIndex,shapes:SHAPES});let nodes='',route='',stops='';
for(let n=366;n>=0;n-=3)stops+=`<stop offset="${coords(n).y/H*100}%" stop-color="${themeIndex(n)>0&&n<themeIndex(n)*30+6?mix(THEMES[themeIndex(n)-1][3],THEMES[themeIndex(n)][3],(n-themeIndex(n)*30+5)/10):palette(n)[3]}"/>`;
for(let n=0;n<366;n++){const a=coords(n),b=coords(n+1),m=coords(n+.5);route+=`<path d="M${a.x} ${a.y}Q${m.x} ${m.y} ${b.x} ${b.y}" stroke="${color(n+1)}" opacity="${n<position?.95:.46}"/>`}
for(let n=1;n<=366;n++){const p=coords(n),monthly=marks.includes(n),earned=won.has(n),r=monthly?27:n%7===0?21:15;nodes+=`<g class="via-step" data-step="${n}" ${monthly?'role="button" tabindex="0"':''} aria-label="${n} passos${monthly?earned?', baú aberto, ver brasão':', baú fechado':''}" style="color:${color(n)}"><circle cx="${p.x}" cy="${p.y}" r="${r}" fill="#0a1715" stroke="currentColor" stroke-dasharray="1 4" stroke-linecap="round"/>${monthly?`<use href="#scene-${earned?'chestOpen':'chest'}" x="${p.x-22}" y="${p.y-24}" width="44" height="44"/><text x="${p.x}" y="${p.y+43}" text-anchor="middle" fill="currentColor" font-size="11">${n}</text>`:`<text x="${p.x}" y="${p.y+4}" text-anchor="middle" fill="currentColor" font-size="11">${n}</text>`}</g>`}
const start=coords(0);let checks='';for(let i=0;i<36;i++)checks+=`<rect x="${180+i%12*10}" y="${start.y+20+Math.floor(i/12)*10}" width="10" height="10" fill="${(i%12+Math.floor(i/12))%2?'#173a28':'#a4efbf'}"/>`;
return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 ${H}" aria-label="Jornada VIA, 366 passos" style="display:block;width:100%;height:auto;font-family:system-ui"><defs>${scene.defs}<linearGradient id="via-bg" x2="0" y2="100%">${stops}</linearGradient></defs><rect width="480" height="${H}" fill="url(#via-bg)"/><g pointer-events="none">${scene.body}</g><g fill="none" stroke-width="3.5" stroke-dasharray=".2 10" stroke-linecap="round">${route}</g>${nodes}${checks}<text x="240" y="${start.y+80}" fill="#a4efbf" text-anchor="middle" font-size="18" letter-spacing="4">INÍCIO</text><g id="via-current" pointer-events="none" transform="translate(${coords(position).x} ${coords(position).y})"><circle r="23" fill="none" stroke="#d2ffe1" stroke-width="2"/><circle r="5" fill="#d2ffe1"/></g></svg>`}
function mount(container,state,{assetBase='./assets/brasoes',onSelect}={}){
 container.innerHTML=svg(state);
 const select=n=>{if(!marks.includes(n))return;const earned=(state.awards||[]).includes(n);const reward={milestone:n,theme:THEMES[themeIndex(n)][0],earned,image:earned?`${assetBase}/brasao-${n}.png`:null};if(onSelect){onSelect(reward);return}
 const dialog=document.createElement('dialog');dialog.className='via-crest-dialog';const title=document.createElement('h2');title.textContent=earned?`${n} passos · ${reward.theme}`:'Este baú espera por você';dialog.append(title);
 if(earned){const image=document.createElement('img');image.src=reward.image;image.alt=`Brasão ${reward.theme}, ${n} passos`;dialog.append(image)}
 const copy=document.createElement('p');copy.textContent=earned?'Esta conquista é sua e permanece guardada, mesmo quando o caminho recomeça.':`Ao alcançar ${n} passos, você recebe o brasão deste capítulo.`;dialog.append(copy);const close=document.createElement('button');close.textContent='Fechar';close.onclick=()=>dialog.close();dialog.append(close);dialog.addEventListener('close',()=>dialog.remove());document.body.append(dialog);dialog.showModal();close.focus()};
 container.onclick=e=>{const t=e.target.closest('[data-step]');if(t)select(+t.dataset.step)};container.onkeydown=e=>{const t=e.target.closest('[data-step]');if(t&&(e.key==='Enter'||e.key===' ')){e.preventDefault();select(+t.dataset.step)}};
 return{scrollToPoint(){const p=coords(state.position||0);container.parentElement.scrollTo({top:p.y*container.clientWidth/480-container.parentElement.clientHeight*.65,behavior:'auto'})}};
}
root.ViaJourney={THEMES,marks,SHAPES,coords,color,themeIndex,H,svg,mount,grant,retreat};if(typeof module!=='undefined')module.exports=root.ViaJourney;
})(typeof globalThis!=='undefined'?globalThis:this);
