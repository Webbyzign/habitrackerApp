const IC={
book:'<path d="M2 4h6a4 4 0 0 1 4 4v13a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v13a3 3 0 0 1 3-3h7z"/>',
beads:'<circle cx="12" cy="4" r="1.8"/><circle cx="18" cy="8" r="1.8"/><circle cx="18" cy="14" r="1.8"/><circle cx="6" cy="14" r="1.8"/><circle cx="6" cy="8" r="1.8"/><path d="M12 17v5M10 19.5h4"/>',
heart:'<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"/>',
drop:'<path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/>',
pulse:'<path d="M3 12h4l3-8 4 16 3-8h4"/>',
bed:'<path d="M3 19V6M3 15h18v4M21 15v-2.5a3 3 0 0 0-3-3h-8V15"/>',
pen:'<path d="M4 20l1-4L16 5l3 3L8 19z"/><path d="M14 7l3 3"/>',
phoneoff:'<rect x="7" y="2" width="10" height="20" rx="2.5"/><path d="M3 3l18 18"/>',
flame:'<path d="M12 3c1 4 5 5.5 5 10.5a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9.5z"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5"/>',
sunrise:'<path d="M3 19h18M7 19a5 5 0 0 1 10 0M12 6v4M5 12l1.5 1.5M19 12l-1.5 1.5M9 8l3-3 3 3"/>',
sunlow:'<circle cx="12" cy="13" r="4"/><path d="M12 3v3M3 20h18M4.5 9l2 2M19.5 9l-2 2"/>',
sunset:'<path d="M3 19h18M7 19a5 5 0 0 1 10 0M12 5v5M5 12l1.5 1.5M19 12l-1.5 1.5M9 8l3 3 3-3"/>',
moon:'<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z"/>',
kaaba:'<path d="M4 21V10l8-4 8 4v11z"/><path d="M4 13h16M12 6V3"/>',
chart:'<path d="M5 20V11M12 20V4M19 20v-6"/>',
star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
leaf:'<path d="M5 19C5 10 10 5 20 4c0 10-5 15-14 15z"/><path d="M5 19l8-8"/>',
mind:'<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z"/>',
check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',plus:'<path d="M12 5v14M5 12h14"/>',users:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-1a5 5 0 0 1 10 0v1"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14a4.5 4.5 0 0 1 5 4.5V20"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',gem:'<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20M9 3l-2 6 5 12M15 3l2 6-5 12"/>',lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',reset:'<path d="M4 12a8 8 0 1 0 3-6.2M4 4v4h4"/>',close:'<path d="M6 6l12 12M18 6L6 18"/>',alert:'<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.5"/>',chev:'<path d="M9 6l6 6-6 6"/>'};
const I=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${IC[n]||IC.star}</svg>`;
const $=s=>document.querySelector(s),pad=n=>String(n).padStart(2,'0');
const key=d=>`${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}`;
const todayK=key(new Date());let cur=todayK,ask=null,askT,anim=null,missOpen=false;const esc=t=>t.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const CAT={deen:{n:'Deen',c:'var(--lilac)'},body:{n:'Body',c:'var(--jade)'},mind:{n:'Mind',c:'var(--gold)'}};
const PR=[['Fajr',5,12,'sunrise',388],['Dhuhr',12,30,'sun',945],['Asr',15,45,'sunlow',1100],['Maghrib',18,20,'sunset',1180],['Isha',19,40,'moon',1439]];
const fmt=m=>`${pad(Math.floor(m/60)%24)}:${pad(m%60)}`;
const DEF=[
{id:1,name:"Read Qur'an",sub:'10 minutes',ic:'book',cat:'deen'},
{id:2,name:'Morning adhkar',sub:'After Fajr',ic:'beads',cat:'deen'},
{id:3,name:'Give sadaqah',sub:'Even a smile counts',ic:'heart',cat:'deen'},
{id:4,name:'Drink 8 glasses',sub:'Stay hydrated',ic:'drop',cat:'body'},
{id:5,name:'Walk 20 minutes',sub:'Move your body',ic:'pulse',cat:'body'},
{id:6,name:'Sleep before 11',sub:'Rest is worship too',ic:'bed',cat:'body'},
{id:7,name:'Gratitude journal',sub:'Write 3 blessings',ic:'pen',cat:'mind'},
{id:8,name:'Screen-free hour',sub:'Phone down',ic:'phoneoff',cat:'mind'}];
let S={habits:DEF,log:{},salah:{}};
try{const r=localStorage.getItem('mizan2');if(r)S=JSON.parse(r)}catch(e){}
S.jam=S.jam||{};S.fired=S.fired||{};S.cel=S.cel||{};
const save=()=>{try{localStorage.setItem('mizan2',JSON.stringify(S))}catch(e){}};
const lg=(d=cur)=>S.log[d]||(S.log[d]=[]),sl=(d=cur)=>S.salah[d]||(S.salah[d]=[]);
const count=k=>(S.log[k]||[]).length+(S.salah[k]||[]).length;
const total=()=>new Set([...Object.keys(S.log),...Object.keys(S.salah)]).size&&[...new Set([...Object.keys(S.log),...Object.keys(S.salah)])].reduce((a,k)=>a+count(k),0);
function streak(){let d=new Date(),n=0;if(count(key(d))<5)d.setDate(d.getDate()-1);while(count(key(d))>=5){n++;d.setDate(d.getDate()-1)}return n}
function best(){const ks=[...new Set([...Object.keys(S.log),...Object.keys(S.salah)])].filter(k=>count(k)>=5).sort();let b=0,c=0,p=null;ks.forEach(k=>{const t=new Date(k+'T00:00');c=p&&Math.round((t-p)/864e5)===1?c+1:1;b=Math.max(b,c);p=t});return b}
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(toast.t);toast.t=setTimeout(()=>t.classList.remove('show'),1800)}
function rToday(){
 const days=[];for(let i=6;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);days.push(d)}
 $('#strip').innerHTML=days.map(d=>{const k=key(d);return`<button class="day ${k===cur?'sel':''}" data-k="${k}">${'SMTWTFS'[d.getDay()]}<b>${d.getDate()}</b><i class="${count(k)>=5?'on':''}"></i></button>`}).join('');
 const dd=lg();
 const row=h=>`<div class="row ${dd.includes(h.id)?'done':''} ${anim==='h'+h.id?'just':''}" data-id="${h.id}" role="button" tabindex="0" style="--c:${CAT[h.cat].c}"><div class="ic">${I(h.ic)}</div><div class="t"><b>${esc(h.name)}</b><small>${esc(h.sub||CAT[h.cat].n)}</small></div>${h.id>8?`<button class="del ${ask===h.id?'ask':''}" data-del="${h.id}" aria-label="Delete habit">${I('trash')}${ask===h.id?'Delete':''}</button>`:''}<div class="ck">${I('check')}</div></div>`;
 [S.habits.filter(h=>h.cat==='deen'),S.habits.filter(h=>h.cat!=='deen').sort((a,b)=>a.cat<b.cat?-1:1)].forEach((hs,i)=>{$('#p'+i).innerHTML=hs.length?hs.map(row).join(''):'<p class="note">No habits here yet. Tap New habit to add one.</p>';$('#c'+i).textContent=`${hs.filter(h=>dd.includes(h.id)).length}/${hs.length}`});
 $('#streak').textContent=streak()}
function nextP(){const n=new Date(),m=n.getHours()*60+n.getMinutes();let i=PR.findIndex(p=>p[1]*60+p[2]>m),add=0;if(i<0){i=0;add=1440}const df=PR[i][1]*60+PR[i][2]+add-m;return{i,t:`${Math.floor(df/60)}h ${df%60}m`}}
function rSalah(){const sd=sl(),jd=S.jam[cur]||[];
 $('#sc').textContent=`${sd.length}/5`;
 $('#prayers').innerHTML=PR.map((p,i)=>`<button class="row ${sd.includes(i)?'done':''} ${anim==='p'+i?'just':''}" data-i="${i}" style="--c:var(--jade)"><div class="ic">${I(p[3])}</div><div class="t"><b>${p[0]}</b><small>${pad(p[1])}:${pad(p[2])}</small></div>${jd.includes(i)?`<span class="jb">${I('users')}Jama'ah</span>`:''}<div class="ck">${I('check')}</div></button>`).join('');tick()}
const G=[['#27346b','#9b5a8a','#e8967a'],['#16745a','#1f8a6c','#3aa98a'],['#8a4f12','#c27a22','#e4a748'],['#3f1f5e','#b73f55','#ec7d45'],['#0b1736','#1c3270','#3b5aa8']];
const CR='<defs><mask id="cm"><rect width="340" height="150" fill="#fff"/><circle cx="269" cy="37" r="11" fill="#000"/></mask></defs><circle cx="262" cy="44" r="13" fill="#fff2c9" mask="url(#cm)"/>';
const SUN=(y,r,c)=>`<circle cx="262" cy="${y}" r="${r*2.1}" fill="${c}" opacity=".2"/><circle cx="262" cy="${y}" r="${r}" fill="${c}"/>`;
const CEL=[CR,SUN(42,15,'#ffe08a'),SUN(50,14,'#ffd27a'),SUN(84,17,'#ffb36b'),CR];
function phase(){const n=new Date(),m=n.getHours()*60+n.getMinutes(),t=i=>PR[i][1]*60+PR[i][2];return m<t(0)?4:m<t(0)+90?0:m<t(2)?1:m<t(3)?2:m<t(4)?3:4}
function scene(i){const b=$('#bigcard');b.style.background=`linear-gradient(180deg,${G[i][0]},${G[i][1]} 55%,${G[i][2]})`;b.style.setProperty('--bc',G[i][1]);
 let o='',x=7;const rnd=()=>(x=(x*9301+49297)%233280)/233280;
 for(let k=0;k<[12,0,0,6,26][i];k++)o+=`<circle cx="${rnd()*340}" cy="${rnd()*90}" r="${.8+rnd()*1.2}" fill="#fff" opacity="${.35+rnd()*.5}"/>`;
 $('#sky').innerHTML=o+CEL[i]}
let psI=0,psD=todayK;
function openPs(i,d){psI=i;psD=d;const dn=(S.salah[d]||[]).includes(i),jm=(S.jam[d]||[]).includes(i);
 $('#pst').textContent=PR[i][0]+' prayer';$('#psn').textContent=dn?(jm?"Marked: in jama'ah":'Marked: alone'):'How did you pray?';$('#pun').style.display=dn?'':'none';$('#ps').classList.add('open')}
$('#ps').onclick=e=>{if(e.target.id==='ps'){$('#ps').classList.remove('open');return}
 const b=e.target.closest('.choice');if(!b)return;const m=b.dataset.m,d=psD,i=psI,sd=S.salah[d]||(S.salah[d]=[]),jd=S.jam[d]||(S.jam[d]=[]);
 [sd,jd].forEach(a=>{const k=a.indexOf(i);if(k>=0)a.splice(k,1)});
 if(m!=='undo'){sd.push(i);if(m==='jam')jd.push(i)}
 anim=m!=='undo'?'p'+i:null;$('#ps').classList.remove('open');all();anim=null;if(m!=='undo'&&d===todayK&&!celebrate())roast()};
$('#prayers').onclick=e=>{const b=e.target.closest('.row');if(b)openPs(+b.dataset.i,cur)};
$('#miss').onclick=e=>{const k=e.target.closest('.mk');if(k){openPs(+k.dataset.i,todayK);return}const h=e.target.closest('#mt');if(h){missOpen=!missOpen;h.closest('.missc').classList.toggle('open',missOpen)}};
const RO={50:[["Halfway there","Half your list is done. The other half is getting nervous."],["50% done","Your sofa just filed a formal complaint. Keep going."],["Halfway!","You did half. The other half is staring at you."]],75:[["75% done","Show-off. Finish the last bit and take a bow."],["Almost there","Don't ghost your own streak now."],["So close","Three quarters down. The last few tasks are shaking."]]};
function roast(){const tp=S.habits.length+5,dn=(S.log[todayK]||[]).filter(id=>S.habits.some(h=>h.id===id)).length+(S.salah[todayK]||[]).length,pc=dn/tp*100,f=S.fired[todayK]||(S.fired[todayK]=[]);
 const hit=[75,50].find(t=>pc>=t&&!f.includes(t));if(!hit)return;[50,75].forEach(t=>{if(t<=hit&&!f.includes(t))f.push(t)});save();
 const m=RO[hit][Math.floor(Math.random()*3)],el=$('#roast');$('#rp').textContent=hit+'%';{const C=138.2,v=C*hit/100;$('#rrg').style.strokeDasharray=v.toFixed(1)+' '+C;el.style.setProperty('--rc',hit===50?'var(--jade)':'var(--gold)')}$('#rh').textContent=m[0];$('#rm').textContent=m[1];
 el.onclick=()=>el.classList.remove('show');el.classList.remove('show');void el.offsetWidth;el.classList.add('show');clearTimeout(roast.t);roast.t=setTimeout(()=>el.classList.remove('show'),5500)}
function celebrate(){if(count(todayK)<5||S.cel[todayK])return false;S.cel[todayK]=1;save();
 setTimeout(()=>{$('#roast').classList.remove('show');const n=Math.max(streak(),1),t=new Date(),mon=new Date(t);mon.setDate(t.getDate()-((t.getDay()+6)%7));let dn=0;
  $('#scenc').textContent=n===1?"Day one is done. Come back tomorrow to keep it going.":n<7?"You're building a beautiful habit.":"You're on fire! Keep it going.";
  $('#scg').innerHTML=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((nm,i)=>{const d=new Date(mon);d.setDate(mon.getDate()+i);const k=key(d),ok=count(k)>=5;if(ok)dn++;return`<div class="sc-day ${ok?'done':''} ${k===todayK?'today':''}"><span class="sc-dn">${nm}</span><span class="sc-dc">${ok?'✓':d.getDate()}</span></div>`}).join('');
  $('#scb').textContent=dn===7?'✦ Perfect Week':`${dn}/7 days`;
  const el=$('#cel');el.classList.remove('show','out');el.scrollTop=0;void el.offsetWidth;el.classList.add('show');
  const out=$('#scn'),t0=performance.now();out.textContent=0;const step=now=>{const p=Math.min((now-t0)/1100,1);out.textContent=Math.round(n*(1-Math.pow(1-p,4)));if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step);
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)){const sy=['✦','✧','•','●'],co=['#e9b44c','#79ab78','#b0d4a3','#f4d78a','#ffffff'];
   for(let i=0;i<32;i++){const p=document.createElement('span');p.className='sc-conf';p.textContent=sy[i%4];p.style.left=Math.random()*100+'%';p.style.color=co[i%5];p.style.fontSize=(8+Math.random()*12)+'px';p.style.setProperty('--du',(2.4+Math.random()*2)+'s');p.style.setProperty('--dr',(Math.random()*150-75)+'px');p.style.animationDelay=(Math.random()*.6)+'s';el.appendChild(p);p.addEventListener('animationend',()=>p.remove(),{once:true})}}
 },600);
 return true}
const closeCel=()=>{const c=$('#cel');c.classList.add('out');setTimeout(()=>c.classList.remove('show','out'),280)};
$('#scx').onclick=closeCel;
$('#cgo').onclick=closeCel;
$('#rst').onclick=()=>{const n=count(cur);if(!n){toast('Nothing to reset for this day');return}
 const lb=cur===todayK?'today':new Date(cur+'T00:00').toLocaleDateString('en',{day:'numeric',month:'short'});
 $('#rmtxt').textContent=`This will clear ${n} completed ${n===1?'task':'tasks'} for ${lb}. This can't be undone.`;$('#rmod').classList.add('open')};
$('#rcancel').onclick=()=>$('#rmod').classList.remove('open');
$('#rmod').onclick=e=>{if(e.target.id==='rmod')$('#rmod').classList.remove('open')};
$('#rgo').onclick=()=>{S.log[cur]=[];S.salah[cur]=[];S.jam[cur]=[];delete S.fired[cur];delete S.cel[cur];$('#rmod').classList.remove('open');all();toast('Day reset')};
function rMiss(){const n=new Date(),m=n.getHours()*60+n.getMinutes(),sd=S.salah[todayK]||[];
 const L=cur!==todayK?[]:PR.map((p,i)=>({p,i})).filter(x=>m>=x.p[4]&&!sd.includes(x.i));
 if(!L.length){$('#miss').innerHTML='';return}
 const ic=`<div class="ic" style="--c:#d6453d">${I('alert')}</div>`;
 const item=x=>`<div class="mi"><div class="ic" style="--c:#d6453d">${I(x.p[3])}</div><div class="t"><b>${x.p[0]}</b><small>Ended ${fmt(x.p[4])}</small></div><button class="mk" data-i="${x.i}">Mark</button></div>`;
 $('#miss').innerHTML=L.length===1?`<div class="missc"><div class="mh">${ic}<div class="t"><b>You didn't do ${L[0].p[0]} prayer</b><small>Time ended ${fmt(L[0].p[4])}</small></div><button class="mk" data-i="${L[0].i}">Mark now</button></div></div>`
 :`<div class="missc ${missOpen?'open':''}"><button class="mh" id="mt">${ic}<div class="t"><b>You missed ${L.length} prayers</b><small>${L.map(x=>x.p[0]).join(', ')}</small></div><span class="cnt">${L.length}</span><span class="chv2">${I('chev')}</span></button><div class="mb"><div class="mbi">${L.map(item).join('')}</div></div></div>`}
function tick(){const n=nextP(),p=PR[n.i];scene(phase());rMiss();$('#nxt').textContent=p[0]+' next';$('#nxs').textContent=`In ${n.t}`;$('#nxi').innerHTML=I(p[3])}
let anCat='deen';
const ANC={deen:{n:'Deen',c:'var(--lilac)',i:'kaaba'},body:{n:'Body',c:'var(--jade)',i:'pulse'},mind:{n:'Mind',c:'var(--gold)',i:'mind'}};
const DN=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],L7=['S','M','T','W','T','F','S'];
const hab=c=>S.habits.filter(h=>h.cat===c);
const lastDays=n=>{const a=[];for(let i=n-1;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);a.push(d)}return a};
const dnH=(k,hs)=>{const l=S.log[k]||[];return hs.filter(x=>l.includes(x.id)).length};
function sc(c,k){const hs=hab(c);let d=dnH(k,hs),t=hs.length;if(c==='deen'){d+=(S.salah[k]||[]).length;t+=5}return t?d/t:0}
const wav=(c,n,off)=>{let a=0;for(let i=0;i<n;i++){const d=new Date();d.setDate(d.getDate()-i-off);a+=sc(c,key(d))}return a/n};
const hDone=(id,k)=>(S.log[k]||[]).includes(id);
const hst=id=>{let d=new Date(),n=0;if(!hDone(id,key(d)))d.setDate(d.getDate()-1);while(hDone(id,key(d))){n++;d.setDate(d.getDate()-1)}return n};
function ring(p){const C=2*Math.PI*52;return`<div class="ring"><svg viewBox="0 0 132 132"><circle cx="66" cy="66" r="52" class="rtk"/><circle cx="66" cy="66" r="52" class="rpg" style="opacity:${p?1:0}" stroke-dasharray="${(p/100*C).toFixed(1)} ${C.toFixed(1)}"/></svg><div class="rcn"><b>${p}%</b><small>this week</small></div></div>`}
function pDeen(){const hs=hab('deen'),ds=lastDays(7),ks=ds.map(key),avg=Math.round(wav('deen',7,0)*100);let pr=0,jm=0,hd=0;
 ks.forEach(k=>{pr+=(S.salah[k]||[]).length;jm+=(S.jam[k]||[]).length;hd+=dnH(k,hs)});
 const st=(l,v)=>`<div><span>${l}</span><b>${v}</b></div>`;
 let h=`<div class="card arh">${ring(avg)}<div class="ls2">${st('Prayers',pr+'/35')}${st("In jama'ah",(pr?Math.round(jm/pr*100):0)+'%')}${st('Habits',hd+'/'+hs.length*7)}</div></div>`;
 h+=`<div class="gh"><h2>Prayer tracker</h2><span>last 7 days</span></div><div class="card mx"><div class="mxr hd"><span></span>${ds.map(d=>`<span>${L7[d.getDay()]}</span>`).join('')}</div>`
  +PR.map((p,i)=>`<div class="mxr"><span class="pn">${p[0]}</span>${ks.map(k=>`<i class="${(S.salah[k]||[]).includes(i)?'d':''} ${(S.jam[k]||[]).includes(i)?'j':''}"></i>`).join('')}</div>`).join('')
  +`<div class="lg"><i class="d"></i>Prayed<i class="d j"></i>In jama'ah</div></div>`;
 h+=`<div class="gh"><h2>Deen habits</h2><span>last 7 days</span></div><div class="card">`+hs.map(x=>`<div class="hr2"><div class="ic">${I(x.ic)}</div><div class="t"><b>${esc(x.name)}</b><div class="dts">${ks.map(k=>`<i class="${hDone(x.id,k)?'d':''}"></i>`).join('')}</div></div><span class="cnt2">${ks.filter(k=>hDone(x.id,k)).length}/7</span></div>`).join('')+`</div>`;
 return h}
function pBody(){const hs=hab('body'),ds=lastDays(7),ks=ds.map(key),scs=ks.map(k=>sc('body',k)),avg=Math.round(scs.reduce((a,b)=>a+b,0)/7*100),mx=Math.max(...scs),bi=scs.indexOf(mx),perfect=scs.filter(v=>v>=1).length,tot=ks.reduce((a,k)=>a+dnH(k,hs),0);
 let h=`<div class="card"><div class="bh"><div><small>7-day average</small><b class="n">${avg}%</b></div><span class="chip2">Best day: ${mx>0?DN[ds[bi].getDay()]:'none yet'}</span></div><div class="bars2">${scs.map((v,i)=>`<div class="b2"><span class="bv">${Math.round(v*100)||''}</span><div class="bw"><i class="${i===bi&&v>0?'best':''}" style="height:${Math.max(v*100,6)}%;--i:${i}"></i></div><span class="bl">${L7[ds[i].getDay()]}</span></div>`).join('')}</div></div>`;
 h+=`<div class="g3"><div class="card"><b>${tot}</b><small>Done this week</small></div><div class="card"><b>${perfect}/7</b><small>Perfect days</small></div><div class="card"><b>${hs.length}</b><small>Body habits</small></div></div>`;
 h+=`<div class="gh"><h2>Habit consistency</h2><span>last 7 days</span></div><div class="card">`+hs.map(x=>{const n=ks.filter(k=>hDone(x.id,k)).length,p=Math.round(n/7*100);return`<div class="cp"><div class="cph"><div class="ic">${I(x.ic)}</div><div class="t"><b>${esc(x.name)}</b></div><span>${p}%</span></div><div class="cap"><i style="width:${p}%"></i></div></div>`}).join('')+`</div>`;
 return h}
function pMind(){const hs=hab('mind'),ds=lastDays(14),scs=ds.map(d=>sc('mind',key(d))),cur=wav('mind',7,0),dl=Math.round((cur-wav('mind',7,7))*100),avg=Math.round(cur*100);
 const pts=scs.map((v,i)=>[12+i*(296/13),108-v*88]),ln=pts.map((q,i)=>i?`C${((pts[i-1][0]+q[0])/2).toFixed(1)} ${pts[i-1][1].toFixed(1)} ${((pts[i-1][0]+q[0])/2).toFixed(1)} ${q[1].toFixed(1)} ${q[0].toFixed(1)} ${q[1].toFixed(1)}`:`M${q[0].toFixed(1)} ${q[1].toFixed(1)}`).join('');
 let h=`<div class="card lc"><div class="bh"><div><small>7-day average</small><b class="n">${avg}%</b></div><span class="dlt ${dl<0?'dn':''}">${dl>=0?'+':''}${dl}% vs last week</span></div><svg viewBox="0 0 320 130"><defs><linearGradient id="ag" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="var(--c)" stop-opacity=".35"/><stop offset="1" stop-color="var(--c)" stop-opacity="0"/></linearGradient></defs><path class="gl" d="M12 108H308M12 64H308M12 20H308"/><path class="ar" d="${ln}L${pts[13][0].toFixed(1)} 108L12 108Z" fill="url(#ag)"/><path class="ln" pathLength="1" d="${ln}"/>${pts.map((q,i)=>`<circle class="${i===13?'dl':'dt'}" cx="${q[0].toFixed(1)}" cy="${q[1].toFixed(1)}" r="${i===13?6:3.6}"/>`).join('')}</svg><div class="lax"><span>14 days ago</span><span>Today</span></div></div>`;
 const wk=[0,1,2,3,4].map(i=>Math.round(wav('mind',7,7*i)*100)),lab=['This week','Last week','2 weeks ago','3 weeks ago','4 weeks ago'],R=[66,56,46,36,26],op=[1,.82,.66,.52,.4],avg5=Math.round(wk.reduce((a,b)=>a+b,0)/5);
 const wd=[0,0,0,0,0,0,0];for(let i=0;i<35;i++){const d=new Date();d.setDate(d.getDate()-i);wd[d.getDay()]+=sc('mind',key(d))}const bd=wd.indexOf(Math.max(...wd)),bw=wk.indexOf(Math.max(...wk));
 h+=`<div class="gh"><h2>Weekly rings</h2><span>last 5 weeks</span></div><div class="card"><div class="mrg"><div class="mr"><svg viewBox="0 0 150 150">${R.map((r,i)=>{const C=2*Math.PI*r;return`<circle class="rtk2" cx="75" cy="75" r="${r}"/><circle class="rpg2" style="--i:${i};opacity:${wk[i]?op[i]:0}" cx="75" cy="75" r="${r}" stroke-dasharray="${(wk[i]/100*C).toFixed(1)} ${C.toFixed(1)}"/>`}).join('')}</svg><div class="mrc"><b>${avg5}%</b><small>avg</small></div></div><div class="mrl">${wk.map((v,i)=>`<div><i style="opacity:${op[i]}"></i><span>${lab[i]}</span><b>${v}%</b></div>`).join('')}</div></div><div class="mch"><div><small>Best week</small><b>${Math.max(...wk)>0?lab[bw]:'-'}</b></div><div><small>Focus day</small><b>${wd[bd]>0?DN[bd]:'-'}</b></div></div></div>`;
 h+=`<div class="gh"><h2>Mind streaks</h2><span>current run</span></div><div class="card">`+hs.map(x=>{const n=hst(x.id);return`<div class="hr2"><div class="ic">${I(x.ic)}</div><div class="t"><b>${esc(x.name)}</b><small style="color:var(--mu);font-size:12px">${hDone(x.id,todayK)?'Done today':'Not done today'}</small></div><span class="pill2">${n} day${n===1?'':'s'}</span></div>`}).join('')+`</div>`;
 return h}
function rAn(){$('#ansel').innerHTML=Object.entries(ANC).map(([k,v])=>`<button class="anb ${k===anCat?'on':''}" data-c="${k}" style="--c:${v.c}"><span class="ai">${I(v.i)}</span><b>${v.n}</b><small>${Math.round(wav(k,7,0)*100)}% this week</small></button>`).join('');
 const p=$('#anp');p.style.setProperty('--c',ANC[anCat].c);p.innerHTML=`<div class="anw">${({deen:pDeen,body:pBody,mind:pMind})[anCat]()}</div>`}
$('#ansel').onclick=e=>{const b=e.target.closest('.anb');if(b){anCat=b.dataset.c;rAn()}};
function rStats(){rAn();rPlan();rGrowth()}
const GT=[{n:'Garden',s:'Garden',min:0,max:250,c:'#3fa35a',ic:'leaf'},{n:'Silver Garden',s:'Silver',min:250,max:700,c:'#8fa1b4',ic:'gem'},{n:'Golden Garden',s:'Golden',min:700,max:1400,c:'#e2a82a',ic:'gem'},{n:'Diamond Garden',s:'Diamond',min:1400,max:2500,c:'#3fb0d6',ic:'gem'},{n:'Ruby Garden',s:'Ruby',min:2500,max:3500,c:'#d6365a',ic:'gem'}];
const PAL=[
 {sky:['#d4efff','#f4fbea'],gr:['#a5da82','#68b658'],l1:'#8fdc72',l2:'#4fa545',l3:'#2c7a37',tr:'#9a6b43',fl:['#ff8fab','#ffd166','#c7a6ff','#ff9f6b'],ce:'#ffe08a'},
 {sky:['#e4ebf3','#f8fafc'],gr:['#d3dbe3','#a9b5c1'],l1:'#f1f5f9',l2:'#b9c5d2',l3:'#7d8b9b',tr:'#8a8f99',fl:['#ffffff','#e3e9f2','#cdd7e5','#f4f7fb'],ce:'#8fa6c0'},
 {sky:['#fff1c8','#fffaf0'],gr:['#f3d36e','#d9a92f'],l1:'#ffeaa0',l2:'#f2b93b',l3:'#b97d10',tr:'#a9762a',fl:['#fff1b8','#ffd45e','#ffb347','#ffe99a'],ce:'#c98b14'},
 {sky:['#dcf6ff','#f3fcff'],gr:['#bdeaf7','#80d0ea'],l1:'#e0f8ff',l2:'#8fdcf2',l3:'#3fa8cc',tr:'#7aa7c2',fl:['#ffffff','#bdf0ff','#a8d8ff','#d9ccff'],ce:'#3fb0d6'},
 {sky:['#ffdbe3','#fff2f4'],gr:['#f58396','#cc3b5a'],l1:'#ff93a8',l2:'#df3f5f',l3:'#9f1236',tr:'#7a2b3a',fl:['#ff5d7a','#ff9ab0','#ffd0da','#ff3b5c'],ce:'#ffe08a'}];
const SL=[['f',170,222,1,0],['g',140,230,1],['g',205,228,1],['f',118,214,.9,1],['f',226,214,1,2],['g',95,232,1],['g',250,232,1],['b',160,198,.8],['f',70,210,1,3],['f',275,210,.9,0],['f',190,238,1.1,1],['g',50,228,1],['g',292,230,1],['b',112,186,.9],['b',232,188,.9],['f',32,200,.9,2],['f',310,198,1,3],['t',80,178,.8],['t',262,174,.8],['f',150,176,.8,1],['f',205,172,.8,0],['T',170,162,1],['b',58,158,.7],['b',290,156,.7],['f',130,242,.9,3],['f',248,244,.9,2],['t',20,172,.7],['t',322,170,.7],['u',120,138],['u',232,118]];
const GD={g:P=>`<path d="M-9 0Q-11 -8 -14 -13M-4 0Q-5 -12 -4 -18M1 0Q2 -13 4 -20M6 0Q8 -10 11 -15M10 0Q11 -6 14 -9" stroke="${P.l2}" stroke-width="2.4" fill="none" stroke-linecap="round"/>`,
 f:(P,c)=>`<path d="M0 0V-22" stroke="${P.l3}" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M0 -8Q-8 -10 -9 -15Q-3 -14 0 -8M0 -12Q8 -14 10 -19Q3 -18 0 -12" fill="${P.l2}"/><g transform="translate(0 -24)">${[0,72,144,216,288].map(a=>`<ellipse cx="0" cy="-6" rx="4.3" ry="6.2" fill="${P.fl[c%4]}" transform="rotate(${a})"/><ellipse cx="0" cy="-7" rx="1.8" ry="3.2" fill="#fff" opacity=".35" transform="rotate(${a})"/>`).join('')}<circle r="3.6" fill="${P.ce}"/><circle cx="-1" cy="-1" r="1.3" fill="#fff" opacity=".6"/></g>`,
 b:P=>`<circle cx="-11" cy="-8" r="10" fill="url(#gl)"/><circle cx="11" cy="-8" r="10" fill="url(#gl)"/><circle cx="0" cy="-15" r="12" fill="url(#gl)"/><circle cx="-5" cy="-19" r="3" fill="#fff" opacity=".4"/>`,
 t:P=>`<rect x="-3.5" y="-26" width="7" height="26" rx="3" fill="${P.tr}"/><circle cx="-12" cy="-30" r="13" fill="url(#gl)"/><circle cx="12" cy="-30" r="13" fill="url(#gl)"/><circle cx="0" cy="-42" r="15" fill="url(#gl)"/><circle cx="-5" cy="-46" r="4" fill="#fff" opacity=".4"/>`,
 T:P=>`<path d="M-7 0Q-5 -30 -3 -52H3Q5 -30 7 0Z" fill="${P.tr}"/><circle cx="-24" cy="-58" r="20" fill="url(#gl)"/><circle cx="24" cy="-58" r="20" fill="url(#gl)"/><circle cx="0" cy="-74" r="24" fill="url(#gl)"/><circle cx="-12" cy="-84" r="6" fill="#fff" opacity=".35"/>`,
 u:P=>`<g class="bf"><ellipse cx="-5" cy="0" rx="5" ry="7" fill="${P.fl[0]}" transform="rotate(-25 -5 0)"/><ellipse cx="5" cy="0" rx="5" ry="7" fill="${P.fl[1]}" transform="rotate(25 5 0)"/><rect x="-1" y="-5" width="2" height="10" rx="1" fill="${P.l3}"/></g>`};
const gpts=()=>{let t=0;for(const k in S.log)t+=S.log[k].length;for(const k in S.salah)t+=S.salah[k].length;for(const k in S.jam)t+=S.jam[k].length;return t};
const gtier=p=>{let i=0;GT.forEach((t,j)=>{if(p>=t.min)i=j});return i};
function gScene(ti,pr){const P=PAL[ti],base=[0,.25,.45,.6,.75][ti],fr=base+pr*(1-base),n=Math.min(SL.length,2+Math.floor(fr*(SL.length-1)));
 const now=new Date(),hr=now.getHours()+now.getMinutes()/60,night=hr<5.5||hr>=19,dusk=hr>=17.5&&hr<19,dawn=hr>=5.5&&hr<7;
 const items=SL.slice(0,n).map((q,i)=>({q,i})).sort((a,b)=>a.q[2]-b.q[2]);
 let o=`<defs><linearGradient id="gsky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.sky[0]}"/><stop offset="1" stop-color="${P.sky[1]}"/></linearGradient><radialGradient id="gl" cx=".35" cy=".3" r=".9"><stop offset="0" stop-color="${P.l1}"/><stop offset=".6" stop-color="${P.l2}"/><stop offset="1" stop-color="${P.l3}"/></radialGradient><linearGradient id="ggr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${P.gr[0]}"/><stop offset="1" stop-color="${P.gr[1]}"/></linearGradient><linearGradient id="gcld" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="${night?'#a9b8dc':'#e4f0fb'}"/></linearGradient><radialGradient id="gsun" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#fffbe0"/><stop offset="1" stop-color="#ffcf4d"/></radialGradient><radialGradient id="gsh"><stop offset="0" stop-color="#ffe9a0" stop-opacity=".75"/><stop offset=".5" stop-color="#ffe9a0" stop-opacity=".25"/><stop offset="1" stop-color="#ffe9a0" stop-opacity="0"/></radialGradient><mask id="gmk"><rect width="340" height="250" fill="#fff"/><circle cx="8" cy="-7" r="12" fill="#000"/></mask></defs><rect width="340" height="250" fill="url(#gsky)"/>`;
 if(night)o+=`<rect width="340" height="250" fill="#0d1b3e" opacity=".5"/>`;else if(dusk)o+=`<rect width="340" height="250" fill="#ff8a3c" opacity=".16"/>`;else if(dawn)o+=`<rect width="340" height="250" fill="#ff9fb0" opacity=".13"/>`;
 if(night){for(let i=0;i<18;i++)o+=`<circle class="tw" style="animation-delay:${(i*.37).toFixed(2)}s" cx="${(14+((i*53)%312))}" cy="${(10+((i*37)%96))}" r="${i%4?1:1.7}" fill="#fff"/>`;
  const t=hr>=19?(hr-19)/10.5:(hr+5)/10.5,mx=50+t*240,my=135-92*Math.sin(Math.PI*Math.min(.98,Math.max(.02,t)));
  o+=`<circle cx="${mx}" cy="${my}" r="30" fill="#fff6d6" opacity=".16"/><g transform="translate(${mx} ${my})"><circle r="15" fill="#fff6d6" mask="url(#gmk)"/></g>`}
 else{const t=Math.min(.97,Math.max(.03,(hr-6)/12)),sx=40+t*260,sy=138-100*Math.sin(Math.PI*t);
  o+=`<g transform="translate(${sx.toFixed(1)} ${sy.toFixed(1)})"><circle class="gpl" r="46" fill="url(#gsh)"/><g class="gspin">${Array.from({length:14},(_,i)=>`<path d="M0 -36L3.4 -23L-3.4 -23Z" fill="#ffe08a" opacity=".55" transform="rotate(${i*360/14})"/>`).join('')}</g><circle r="19" fill="url(#gsun)"/><circle cx="-6" cy="-6" r="5" fill="#fff" opacity=".6"/></g>`}
 const cl=(x,y,s,op,t,dl)=>`<g class="gcl" style="--t:${t}s;--dl:-${dl}s"><g transform="translate(${x} ${y}) scale(${s})" opacity="${op}"><ellipse cx="0" cy="2" rx="28" ry="9" fill="url(#gcld)"/><circle cx="-12" cy="-4" r="11" fill="url(#gcld)"/><circle cx="4" cy="-9" r="14" fill="url(#gcld)"/><circle cx="19" cy="-3" r="10" fill="url(#gcld)"/></g></g>`;
 o+=cl(0,46,1,night?.45:.92,70,10)+cl(0,78,.7,night?.35:.75,95,48)+cl(0,30,.55,night?.3:.6,120,80)+cl(0,100,.8,night?.35:.7,84,30);
 o+=`<path d="M0 150Q60 116 130 140T250 126T340 138V250H0Z" fill="${P.gr[0]}" opacity=".3"/><path d="M0 162Q80 130 160 154T340 142V250H0Z" fill="${P.gr[0]}" opacity=".5"/>`;
 [[24,140,.6],[52,146,.5],[300,136,.6],[322,142,.5],[270,142,.45]].forEach(([x,y,k])=>{o+=`<g transform="translate(${x} ${y}) scale(${k})" opacity=".55"><rect x="-2" y="-8" width="4" height="9" fill="${P.tr}"/><circle cy="-14" r="10" fill="${P.l3}"/></g>`});
 if(!night)[[0,58,26,38],[1,40,34,50],[2,88,22,30]].forEach(([i,y,t,dl])=>{o+=`<g class="gbird" style="--t:${t}s;--dl:-${dl}s;--y:${y}px"><g transform="translate(0 ${y})"><g class="gwg"><path d="M-7 0Q-3.5 -5 0 0Q3.5 -5 7 0" stroke="${ti===2?'#8a6a1a':'#3b4a5a'}" stroke-width="1.6" fill="none" stroke-linecap="round" opacity=".6"/></g></g></g>`});
 o+=`<path d="M0 188Q90 166 170 184T340 176V250H0Z" fill="url(#ggr)"/><g opacity=".22">${Array.from({length:34},(_,i)=>`<circle cx="${(i*47)%340}" cy="${196+((i*29)%50)}" r="${(i%3)+.8}" fill="${P.l3}"/>`).join('')}</g>`;
 const sh={f:7,g:9,b:17,t:17,T:27};
 items.forEach(({q,i})=>{const k=q[0];o+=`<g class="gi" style="--d:${i*45}ms"><g transform="translate(${q[1]} ${q[2]}) scale(${q[3]||1})">${sh[k]?`<ellipse cx="0" cy="1.5" rx="${sh[k]}" ry="3.2" fill="#000" opacity=".13"/>`:''}<g class="${k==='u'?'bfp':'sw'}" style="animation-delay:${-(i%7)*.5}s">${GD[k](P,q[4]||0)}</g></g></g>`});
 if(n>=10)[[120,205],[240,196]].forEach(([x,y],i)=>{o+=`<g transform="translate(${x} ${y})"><g class="gbee" style="--dl:-${i*2.4}s"><ellipse rx="4.2" ry="3" fill="#ffd23f"/><path d="M-1.5 -3V3M1.5 -3V3" stroke="#3a2a10" stroke-width="1.3"/><ellipse cx="0" cy="-3.8" rx="3" ry="2" fill="#fff" opacity=".75"/></g></g>`});
 if(night)for(let i=0;i<10;i++)o+=`<g transform="translate(${30+((i*61)%280)} ${150+((i*23)%80)})"><g class="gff" style="--t:${(3+i%4).toFixed(1)}s;--dl:-${i*.7}s;--dx:${(i%2?1:-1)*(14+i*2)}px;--dy:${-8-(i%3)*6}px"><circle r="6" fill="#fff7a8" opacity=".25"/><circle r="2.1" fill="#fffbd0"/></g></g>`;
 if(ti>0)[[40,40],[96,24],[150,56],[205,28],[246,76],[310,92],[58,98],[318,30]].forEach((p,i)=>{o+=`<path class="tw" style="animation-delay:${i*.35}s" transform="translate(${p[0]} ${p[1]})" d="M0 -7L1.8 -1.8L7 0L1.8 1.8L0 7L-1.8 1.8L-7 0L-1.8 -1.8Z" fill="${ti>2||night?'#fff':P.ce}"/>`});
 return`<svg viewBox="0 0 340 250" aria-hidden="true">${o}</svg>`}
function rGrowth(){const gp=gpts(),ti=gtier(gp),cur=GT[ti],nx=GT[ti+1],pr=Math.min(1,(gp-cur.min)/(cur.max-cur.min));
 $('#gscene').innerHTML=`<div class="gsc">${gScene(ti,pr)}<span class="gtag" style="--c:${cur.c}">${I(cur.ic)}${cur.n}</span></div>`;
 $('#gpill').innerHTML=`<span style="color:${cur.c};display:grid">${I(cur.ic)}</span><span>${cur.s}</span>`;
 const p=$('#gprog');p.style.setProperty('--c',cur.c);
 p.innerHTML=`<div class="bh"><div><small>Current level</small><b class="gtn">${cur.n}</b></div><span class="pill2" style="--c:${cur.c}">${Math.round(pr*100)}%</span></div><div class="cap"><i style="width:${pr*100}%"></i></div><small class="gsub">${nx?`${nx.min-gp} growth points to ${nx.n}`:'Highest level reached. Keep your garden alive!'}</small>`;
 const days=new Set([...Object.keys(S.log),...Object.keys(S.salah)]);let ad=0;days.forEach(k=>{if(count(k)>0)ad++});
 $('#gstats').innerHTML=`<div class="card"><b>${gp}</b><small>Growth points</small></div><div class="card"><b>${ad}</b><small>Active days</small></div><div class="card"><b>+${count(todayK)}</b><small>Grown today</small></div>`;
 $('#gtiers').innerHTML=`<div class="gtg">`+GT.map((t,i)=>`<div class="gtr ${i<ti?'done':i===ti?'cur':'lock'}" style="--c:${t.c}"><div class="gm">${i>ti?I('lock'):I(t.ic)}</div><b>${t.s}</b><small>${t.min}+</small></div>`).join('')+`</div>`;
 if(ti>(S.gNote||0)){S.gNote=ti;toast('Your garden is ready to evolve. Open Growth!')}}
function gOpen(){rGrowth();const ti=gtier(gpts());if(ti>(S.gSeen||0)){S.gSeen=ti;save();const t=GT[ti];$('#gbig').innerHTML=I(t.ic);$('#gbig').style.setProperty('--c',t.c);$('#gmt').textContent='Your garden evolved!';$('#gmp').textContent=`Welcome to the ${t.n}. Keep watering it every day.`;setTimeout(()=>$('#gmod').classList.add('open'),500)}}
$('#ggo').onclick=()=>$('#gmod').classList.remove('open');
$('#gmod').onclick=e=>{if(e.target.id==='gmod')$('#gmod').classList.remove('open')};
function all(){rToday();rSalah();rStats();save()}
$('#strip').onclick=e=>{const b=e.target.closest('.day');if(b){cur=b.dataset.k;all()}};
$('#pager').onclick=e=>{const d=e.target.closest('.del');
 if(d){const id=+d.dataset.del;clearTimeout(askT);
  if(ask===id){S.habits=S.habits.filter(h=>h.id!==id);Object.keys(S.log).forEach(k=>S.log[k]=S.log[k].filter(x=>x!==id));ask=null;all();toast('Habit deleted')}
  else{ask=id;all();askT=setTimeout(()=>{ask=null;all()},3000)}
  return}
 const b=e.target.closest('.row');if(!b)return;const id=+b.dataset.id,dd=lg(),i=dd.indexOf(id);
 const add=i<0;if(add)dd.push(id);else dd.splice(i,1);anim=add?'h'+id:null;all();anim=null;if(add&&cur===todayK&&!celebrate())roast()};
$('#nx').onclick=()=>document.querySelector('nav button[data-t=salah]').click();
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>{document.querySelectorAll('nav button').forEach(x=>x.classList.toggle('on',x===b));document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('on',t.id==='t-'+b.dataset.t));$('main').scrollTop=0;if(b.dataset.t==='growth')gOpen()});
let nc='deen',ni='star';
$('#cats').innerHTML=Object.entries(CAT).map(([k,v])=>`<button class="${k==='deen'?'on':''}" data-k="${k}" style="--c:${v.c}">${v.n}</button>`).join('');
$('#icons').innerHTML=['star','beads','book','heart','leaf','pulse','mind','bed'].map(i=>`<button class="${i==='star'?'on':''}" data-i="${i}" aria-label="${i}">${I(i)}</button>`).join('');
const pick=(el,f)=>el.onclick=e=>{const b=e.target.closest('button');if(!b)return;[...el.children].forEach(x=>x.classList.toggle('on',x===b));f(b)};
const setC=()=>$('#sheet').style.setProperty('--c',CAT[nc].c);setC();
pick($('#cats'),b=>{nc=b.dataset.k;setC()});
$('#pager').addEventListener('keydown',e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('row')){e.preventDefault();e.target.click()}});pick($('#icons'),b=>ni=b.dataset.i);
const openAdd=()=>{$('.app').classList.add('adding');$('#sheet').classList.add('open');$('#sheet').scrollTop=0;if(matchMedia('(pointer:fine)').matches)setTimeout(()=>$('#nm').focus({preventScroll:true}),260)};
const closeAdd=()=>{$('#nm').blur();$('#sheet').classList.remove('open');$('.app').classList.remove('adding')};
$('#add').onclick=openAdd;
$('#nm').addEventListener('keydown',e=>{if(e.key==='Enter')$('#save').click()});
$('#sx').onclick=closeAdd;
$('#save').onclick=()=>{const v=$('#nm').value.trim();if(!v){toast('Enter a name for your habit');return}
 S.habits.push({id:Date.now(),name:v,ic:ni,cat:nc});$('#nm').value='';closeAdd();all();$('#pager').scrollTo({left:(nc==='deen'?0:1)*$('#pager').clientWidth,behavior:'smooth'});toast('Habit added')};
const setGreet=()=>{const h=new Date().getHours();$('#greet').textContent=(h<12?'Sabah al-khair':h<18?'Assalamu alaikum':'Masa al-khair')+(S.profile&&S.profile.name?', '+S.profile.name:'')};setGreet();
$('#fl').innerHTML=I('flame');$('#pl').innerHTML=I('plus');$('#rsi').innerHTML=I('reset');$('#chv').innerHTML=I('chev');
document.querySelectorAll('[data-ic]').forEach(e=>e.innerHTML=I(e.dataset.ic));
$('#tabs').onclick=e=>{const b=e.target.closest('button');if(b)$('#pager').scrollTo({left:+b.dataset.p*$('#pager').clientWidth,behavior:'smooth'})};
$('#pager').addEventListener('scroll',()=>{const p=$('#pager'),i=Math.round(p.scrollLeft/p.clientWidth);[...$('#tabs').children].forEach((b,j)=>b.classList.toggle('on',j===i))},{passive:true});
const GOALS=[{k:'salah',t:'Never miss a prayer',s:'Pray all five on time',i:'kaaba'},{k:'quran',t:"Connect with the Qur'an",s:'Read a little every day',i:'book'},{k:'health',t:'Get healthier',s:'Move, hydrate and sleep better',i:'pulse'},{k:'mind',t:'Calm my mind',s:'Journal and cut screen time',i:'mind'}];
const fmt12=t=>{const[h,m]=t.split(':').map(Number);return`${h%12||12}:${pad(m)} ${h<12?'AM':'PM'}`};
const OB={step:0,edit:false,d:{name:'',sleep:'22:30',wake:'05:00',goal:''}},OBC=['var(--jade)','var(--lilac)','var(--gold)','var(--jade)'];
const timeUI=k=>`<div class="obmid"><div class="whl"><div class="wc"><div class="wcol" data-n="24" data-k="h"></div><i class="wl t"></i><i class="wl b"></i></div><div class="wc"><div class="wcol" data-n="60" data-k="m"></div><i class="wl t"></i><i class="wl b"></i></div></div></div><div class="obcap" id="obcap"></div>`;
const OBS=[
 {ic:'user',t:'What should we call you?',s:'Your name makes Mizan feel personal.',body:()=>`<div class="obmid"><input class="obin" id="obn" placeholder="Your name" maxlength="24" value="${esc(OB.d.name)}" autocomplete="given-name" enterkeyhint="next"></div>`,ok:()=>OB.d.name.trim().length>0},
 {ic:'moon',t:'When do you usually sleep?',s:'We will keep your sleep habit realistic.',body:()=>timeUI('sleep'),ok:()=>true},
 {ic:'sun',t:'When do you usually wake up?',s:'Early mornings leave room for Fajr.',body:()=>timeUI('wake'),ok:()=>true},
 {ic:'star',t:'What is your goal with Mizan?',s:'Pick the one that matters most right now.',body:()=>'<div class="obmid">'+GOALS.map(g=>`<button class="gopt ${OB.d.goal===g.k?'on':''}" data-k="${g.k}"><div class="ic">${I(g.i)}</div><div class="t"><b>${g.t}</b><small>${g.s}</small></div><div class="ck">${I('check')}</div></button>`).join('')+'</div>',ok:()=>!!OB.d.goal}];
const ROW=52;
function initWheels(){const k=OB.step===1?'sleep':'wake',cap=$('#obcap');let[hh,mm]=OB.d[k].split(':').map(Number);const upd=()=>{OB.d[k]=`${pad(hh)}:${pad(mm)}`;cap.textContent=(k==='sleep'?'Sleep time: ':'Wake-up time: ')+fmt12(OB.d[k])};upd();
 document.querySelectorAll('.wcol').forEach(col=>{const n=+col.dataset.n,isH=col.dataset.k==='h',v=isH?hh:mm;
  col.innerHTML=Array.from({length:n*3},(_,i)=>`<div class="wi">${pad(i%n)}</div>`).join('');
  let last=-1,t;const mark=i=>{if(i===last)return;if(col.children[last])col.children[last].classList.remove('sel');if(col.children[i])col.children[i].classList.add('sel');last=i};
  requestAnimationFrame(()=>{col.scrollTop=(n+v)*ROW;mark(n+v)});
  col.addEventListener('scroll',()=>{mark(Math.round(col.scrollTop/ROW));clearTimeout(t);t=setTimeout(()=>{let j=Math.round(col.scrollTop/ROW);if(j<n){col.scrollTop+=n*ROW;j+=n}else if(j>=2*n){col.scrollTop-=n*ROW;j-=n}mark(j);if(isH)hh=j%n;else mm=j%n;upd()},140)},{passive:true});
  col.addEventListener('click',e=>{const it=e.target.closest('.wi');if(it)col.scrollTo({top:[...col.children].indexOf(it)*ROW,behavior:'smooth'})})})}
function obRender(){const st=OBS[OB.step],last=OB.step===OBS.length-1,c=$('#obc');c.style.setProperty('--c',OBC[OB.step]);c.style.animation='none';void c.offsetWidth;c.style.animation='';
 c.innerHTML=`<div class="obtop">${OB.step?`<button class="obback" id="obb" aria-label="Back">${I('chev')}</button>`:(OB.edit?`<button class="obx" id="obxx" aria-label="Close">${I('close')}</button>`:'<span style="width:42px"></span>')}<div class="obdots">${OBS.map((_,i)=>`<i class="${i<=OB.step?'on':''}"></i>`).join('')}</div><span style="width:42px"></span></div><h2>${st.t}</h2><p class="obs">${st.s}</p>${st.body()}<button class="obgo" id="obgo" ${st.ok()?'':'disabled'}>${last?'Finish':'Next'}</button>`;if(OB.step===1||OB.step===2)initWheels()}
function obOpen(edit){OB.edit=edit;OB.step=0;const p=S.profile;if(p)OB.d={name:p.name,sleep:p.sleep,wake:p.wake,goal:p.goal};$('#ob').classList.add('show');$('#ob').scrollTop=0;obRender()}
function obNext(){if(OB.step===1||OB.step===2){const c=[...document.querySelectorAll('.wcol')];if(c.length===2)OB.d[OB.step===1?'sleep':'wake']=pad(Math.round(c[0].scrollTop/ROW)%24)+':'+pad(Math.round(c[1].scrollTop/ROW)%60)}
 if(OB.step<OBS.length-1){OB.step++;obRender();return}obDone()}
function obDone(){S.profile={name:OB.d.name.trim(),sleep:OB.d.sleep,wake:OB.d.wake,goal:OB.d.goal,done:1};const h6=S.habits.find(x=>x.id===6);if(h6){h6.name='Sleep by '+fmt12(OB.d.sleep);h6.sub='Wake up at '+fmt12(OB.d.wake)}
 setGreet();$('#ob').classList.remove('show');all();if(OB.edit)toast('Profile updated');else startSk()}
$('#ob').addEventListener('click',e=>{const t=e.target;
 if(t.closest('#obb')){OB.step--;obRender();return}
 if(t.closest('#obxx')){$('#ob').classList.remove('show');return}
 const go=t.closest('.gopt');if(go){OB.d.goal=go.dataset.k;document.querySelectorAll('.gopt').forEach(x=>x.classList.toggle('on',x===go));$('#obgo').disabled=false;return}
 if(t.closest('#obgo'))obNext()});
$('#ob').addEventListener('input',e=>{if(e.target.id==='obn'){OB.d.name=e.target.value;$('#obgo').disabled=!OB.d.name.trim()}});
$('#ob').addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='obn'&&OB.d.name.trim())obNext()});
function rPlan(){const p=S.profile;if(!p){$('#pcard').innerHTML='';return}const g=GOALS.find(x=>x.k===p.goal);
 $('#pcard').innerHTML=[['Name',p.name],['Goal',g?g.t:'-'],['Sleep',fmt12(p.sleep)],['Wake up',fmt12(p.wake)]].map(([a,b])=>`<div class="pr2"><span>${a}</span><b>${esc(b)}</b></div>`).join('')}
$('#pedit').onclick=()=>obOpen(true);
const startSk=()=>{const k=$('#sk');k.classList.remove('out');k.classList.add('show');setTimeout(()=>{k.classList.add('out');setTimeout(()=>k.classList.remove('show','out'),380)},1500)};
all();setInterval(tick,30000);
if(!(S.profile&&S.profile.done))obOpen(false);

