// Kiểm thử bộ sinh câu hỏi của Toán 6. Chạy: node kiem-thu.js
global.document={querySelector:()=>({}),querySelectorAll:()=>[],documentElement:{dataset:{}}};
global.window={scrollTo(){}};global.localStorage={getItem(){return null},setItem(){}};global.matchMedia=()=>({matches:false});
const src=(()=>{const h=require('fs').readFileSync(__dirname+'/index.html','utf8');return h.match(/<script>([\s\S]*?)<\/script>/)[1].replace('load();render();','')})();
eval(src+';globalThis.T={GEN,LESSONS,eq,MAP,CURR,gcd,lcm,isP}');
const {GEN,LESSONS,eq,MAP,CURR,gcd,lcm}=T;
let fails={},runs=0;
const bad=(k,m)=>{fails[k+'|'+m]=(fails[k+'|'+m]||0)+1};
const nums=t=>(t.replace(/<[^>]+>/g,' ').match(/\d+/g)||[]).map(Number);
for(const key in GEN){GEN[key].forEach((g,lv)=>{for(let r=0;r<500;r++){runs++;let q;const k=key+'#'+(lv+1);
 try{q=g()}catch(e){bad(k,'EXC '+e.message);continue}
 const all=q.text+' '+(q.steps||[]).join(' ')+' '+(q.hint||'');
 if(/undefined|NaN|Infinity/.test(all))bad(k,'bad text');
 if(!q.hint)bad(k,'no hint');
 if(q.type==='mc'){const ok=q.opts.filter(o=>o.ok).length;if(ok!==1)bad(k,'mc ok count '+ok);if(new Set(q.opts.map(o=>o.t)).size!==q.opts.length)bad(k,'dup options');q.opts.forEach(o=>{if(!o.ok&&!o.m)bad(k,'wrong opt no msg')})}
 else if(q.type==='order'){if(new Set(q.items).size!==q.items.length)bad(k,'dup items');if([...q.sh].sort().join()!==[...q.items].sort().join())bad(k,'sh not perm')}
 else if(q.type==='match'){if(new Set(q.pairs.map(p=>p[1])).size!==q.pairs.length)bad(k,'dup match')}
 else{const a=q.ans;if(!a||!Number.isFinite(a.n)||!Number.isFinite(a.d)||a.d<=0||!Number.isInteger(a.n))bad(k,'bad ans');
  if(q.dec&&10000%a.d!==0)bad(k,'dec not terminating');
  if(!q.steps||!q.steps.length)bad(k,'no steps');
  q.mist.forEach(m=>{if(eq(m.v,a))bad(k,'mist==ans (harmless)')});
  // independent checks
  const n=nums(q.text);
  if(key==='c11'&&lv===0){if(q.ans.n!==gcd(n[0],n[1]))bad(k,'WRONG gcd')}
  if(key==='c11'&&lv===1){if(q.ans.n!==gcd(gcd(n[0],n[1]),n[2]))bad(k,'WRONG gcd3')}
  if(key==='c12'&&lv===0){if(q.ans.n!==lcm(n[0],n[1]))bad(k,'WRONG lcm')}
  if(key==='c12'&&lv===1){if(q.ans.n!==lcm(lcm(n[0],n[1]),n[2]))bad(k,'WRONG lcm3')}
  if(key==='c8'&&lv===0){if(q.ans.n!==n[0]%n[1])bad(k,'WRONG remainder')}
  if(key==='c9'&&lv===1){if(q.ans.n!==n[0]%9)bad(k,'WRONG mod9')}
  if(key==='frac'&&lv===0&&false){}
 }}})}
console.log('runs',runs);
const f=Object.entries(fails).filter(([k])=>!k.includes('harmless'));
console.log('REAL FAILURES:',f.length?f:'none');
console.log('harmless mist==ans:',Object.entries(fails).filter(([k])=>k.includes('harmless')).map(([k,v])=>k+' x'+v));
// structure
LESSONS.forEach(l=>{if(!GEN[l.gen]||GEN[l.gen].length!==4)console.log('LESSON GEN PROBLEM',l.id,l.gen);['warm','learn','ex','sum'].forEach(f=>{if(!l[f])console.log('missing',l.id,f)})});
Object.entries(MAP).forEach(([n,id])=>{if(!LESSONS.find(l=>l.id===id))console.log('MAP missing lesson',n,id)});
const ids=LESSONS.map(l=>l.id);console.log('dup ids:',ids.length-new Set(ids).size,'lessons:',ids.length);
eval(src+';globalThis.U={parse,DS,norm,eq,Fo}');
const {parse,DS,norm}=U;
const cases=[['−7',-7,1],['-7',-7,1],['3/4',3,4],[' 12 ',12,1],['3,5',35,10],['3.50',350,100],['-0,5',-5,10],['−2,05',-205,100],['0,37',37,100],['abc',null],['3/0',null],['',null],['1,23456',null]];
cases.forEach(([s,n,d])=>{const r=parse(s);const ok=n===null?r===null:(r&&r.n*d===n*r.d);console.log(ok?'ok  ':'FAIL',JSON.stringify(s),JSON.stringify(r))});
console.log(DS(norm(35,10)),DS(norm(-205,100)),DS(norm(15,1)),DS(norm(1,8)));
// extra: geometry answers recomputed from text, typed-question sanity
for(let r=0;r<400;r++){
 let q=GEN.m18[1]();let n=nums(q.text.replace(/<svg.*?<\/svg>/s,''));const nm=/Tam giác/.test(q.text)?3:/Hình vuông/.test(q.text)?4:6;if(q.ans.n!==n[0]*nm)bad('m18#2','WRONG perimeter');
 q=GEN.m20[1]();n=nums(q.text.replace(/<svg.*?<\/svg>/s,''));if(q.ans.n!==n[0]*n[1]/2)bad('m20#2','WRONG rhombus');
 q=GEN.m20[2]();n=nums(q.text.replace(/<svg.*?<\/svg>/s,''));if(q.ans.n!==(n[0]+n[1])*n[2]/2)bad('m20#3','WRONG trapezoid');
 q=GEN.m20[0]();n=nums(q.text.replace(/<svg.*?<\/svg>/s,''));if(q.ans.n!==n[0]*n[2])bad('m20#1','WRONG parallelogram');
 q=GEN.m20[3]();n=nums(q.text);if(q.ans.n!==n[0]+n[1]+2*n[2])bad('m20#4','WRONG trap perimeter');
}
console.log('geometry independent check failures:',Object.entries(fails).filter(([k])=>/WRONG/.test(k)));
const strip=t=>t.replace(/<svg.*?<\/svg>/s,'');
const signedNums=t=>(strip(t).match(/−?\d+/g)||[]).map(x=>+x.replace('−','-'));
for(let r=0;r<500;r++){
 let q=GEN.n32[0]();let n=nums(q.text)[0];if(q.ans.n!==n*(n-1)/2)bad('n32#1','WRONG lines');
 q=GEN.n32[2]();let a=nums(q.text);if(q.ans.n!==a[0]*(a[0]-1)/2-a[1]*(a[1]-1)/2+1)bad('n32#3','WRONG lines2');
 q=GEN.n33[0]();a=nums(q.text);if(q.ans.n!==a[0]+a[1]&&true){const m=nums(q.text.replace('AB =','').replace('BC =',''));}
 q=GEN.n34[0]();a=nums(q.text);if(q.ans.n!==100*a[0]+a[1])bad('n34#1','WRONG convert');
 q=GEN.n34[1]();a=nums(q.text);if(q.ans.n!==a[1]-a[0])bad('n34#2','WRONG diff');
 q=GEN.n34[3]();a=nums(q.text);if(q.ans.n!==a[0]*100/a[1]||!Number.isInteger(q.ans.n))bad('n34#4','WRONG pieces');
 q=GEN.n35[2]();a=signedNums(q.text);if(q.ans.n*2!==a[0]+a[1])bad('n35#3','WRONG midpoint');
 q=GEN.n37[1]();a=nums(q.text);if(q.ans.n!==a[0]+a[1]||q.ans.n>180)bad('n37#2','WRONG angle sum');
 q=GEN.n37[2]();a=nums(q.text);if(q.ans.n!==a[0]-a[1]||q.ans.n<=0)bad('n37#3','WRONG angle diff');
 q=GEN.n37[3]();a=nums(q.text);if(q.ans.n!==Math.min(30*a[0],360-30*a[0]))bad('n37#4','WRONG clock');
}
console.log('Chapter VIII independent failures:',Object.entries(fails).filter(([k])=>/WRONG|EXC/.test(k)));
for(let r=0;r<500;r++){
 let q=GEN.p43[0]();let a=nums(q.text);if(!eq(q.ans,norm0(a[1],a[0])))bad('p43#1','WRONG xs');
 q=GEN.p43[2]();a=nums(q.text);if(q.ans.n!==a[1]*100/a[0])bad('p43#3','WRONG pct');
 q=GEN.p43[3]();a=nums(q.text);if(q.ans.n!==a[1]*5)bad('p43#4','WRONG predict');
}
function norm0(n,d){const g=gcd(n,d);return{n:n/g,d:d/g}}
console.log('Chapter IX independent failures:',Object.entries(fails).filter(([k])=>/WRONG|EXC/.test(k)));
let f2={};
for(let r=0;r<800;r++){
 let q=GEN.p43[1]();let a=nums(q.text);if(!eq(q.ans,norm0(a[2],a[0])))f2['p43#2 wrong']=(f2['p43#2 wrong']||0)+1;
 q=GEN.p39[2]();a=nums(q.text);const k=(q.text.split('Hàng')[1].match(/●/g)||[]).length;if(q.ans.n!==k*a[0]+a[1])f2['p39#3 wrong']=(f2['p39#3 wrong']||0)+1;
 q=GEN.p39[1]();a=nums(q.text);const k2=(q.text.split('Hàng')[1].match(/●/g)||[]).length;if(q.ans.n!==k2*a[0])f2['p39#2 wrong']=(f2['p39#2 wrong']||0)+1;
}
console.log('corrected recheck:',JSON.stringify(f2)==='{}'?'all correct':f2);
