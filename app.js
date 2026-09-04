
const units = [
 {floor:'الأول',deed:'760002422710',no:'1/1',cat:'A1',front:'شمالية - جار',titleArea:'159.22',actual:167.53,status:'مباع',price:null},
 {floor:'الأول',deed:'960002422714',no:'1/2',cat:'B1',front:'شمالية - شرقية',titleArea:'164.96',actual:173.10,status:'متاح',price:1150000},
 {floor:'الأول',deed:'560002422712',no:'1/3',cat:'C1',front:'شرقية - ممر',titleArea:'156.6',actual:163.33,status:'متاح',price:830000},
 {floor:'الأول',deed:'860002422708',no:'1/4',cat:'D1',front:'شرقية - ممر',titleArea:'167.3',actual:173.81,status:'متاح',price:885000},
 {floor:'الأول',deed:'360002422706',no:'1/5',cat:'E1',front:'شرقية - جار',titleArea:'149.76',actual:167.53,status:'متاح',price:820000},
 {floor:'الأول',deed:'560002422704',no:'1/6',cat:'F1',front:'داخلي',titleArea:'154.77',actual:163.33,status:'مباع',price:null},
 {floor:'الثاني',deed:'560002422719',no:'2/1',cat:'A2',front:'شمالية - جار',titleArea:'159.22',actual:167.53,status:'مباع',price:null},
 {floor:'الثاني',deed:'760002422702',no:'2/2',cat:'B2',front:'شمالية - شرقية',titleArea:'164.96',actual:173.10,status:'مباع',price:null},
 {floor:'الثاني',deed:'860002422899',no:'2/3',cat:'C2',front:'شرقية - ممر',titleArea:'156.6',actual:163.33,status:'مباع',price:840000},
 {floor:'الثاني',deed:'160002422717',no:'2/4',cat:'D2',front:'شرقية - ممر',titleArea:'167.3',actual:173.81,status:'مباع',price:null},
 {floor:'الثاني',deed:'460002422715',no:'2/5',cat:'E2',front:'شرقية - جار',titleArea:'149.76',actual:167.53,status:'متاح',price:830000},
 {floor:'الثاني',deed:'560002422713',no:'2/6',cat:'F2',front:'داخلي',titleArea:'154.77',actual:163.33,status:'مباع',price:null},
 {floor:'الثالث',deed:'160002422707',no:'3/1',cat:'A3',front:'شمالية - جار',titleArea:'159.22',actual:167.53,status:'مباع',price:null},
 {floor:'الثالث',deed:'460002422711',no:'3/2',cat:'B3',front:'شمالية - شرقية',titleArea:'164.96',actual:173.10,status:'مباع',price:null},
 {floor:'الثالث',deed:'860002422709',no:'3/3',cat:'C3',front:'شرقية - ممر',titleArea:'156.6',actual:163.33,status:'مباع',price:null},
 {floor:'الثالث',deed:'660002422705',no:'3/4',cat:'D3',front:'شرقية - ممر',titleArea:'167.3',actual:173.81,status:'مباع',price:null},
 {floor:'الثالث',deed:'360002422703',no:'3/5',cat:'E3',front:'شرقية - جار',titleArea:'149.76',actual:167.53,status:'متاح',price:840000},
 {floor:'الثالث',deed:'960002422701',no:'3/6',cat:'F3',front:'داخلي',titleArea:'154.77',actual:163.33,status:'متاح',price:770000},
 {floor:'الملحق',deed:'460002422700',no:'1/1ح',cat:'R1',front:'شمالية - جار',titleArea:'222.85 = 72.35 + 150.5',actual:235.15,status:'متاح',price:1050000},
 {floor:'الملحق',deed:'360026298025',no:'1/2ح',cat:'R2',front:'شمالية - شرقية - ممر',titleArea:'262.75 = 86.85 + 175.9',actual:272.35,status:'متاح',price:1250000},
 {floor:'الملحق',deed:'960002422718',no:'1/3ح',cat:'R3',front:'شرقية - ممر',titleArea:'252.7 = 83.19 + 169.51',actual:264.38,status:'متاح',price:1200000},
 {floor:'الملحق',deed:'660002422716',no:'1/4ح',cat:'R4',front:'داخلي',titleArea:'180.22 = 27.57 + 152.65',actual:191.78,status:'متاح',price:1000000}
];
const floorsOrder=['الأول','الثاني','الثالث','الملحق'];
const money=n=>n?new Intl.NumberFormat('en-US').format(n):'—';
const available=units.filter(x=>x.status==='متاح');
const sold=units.filter(x=>x.status==='مباع');
const remainingValue=available.reduce((s,x)=>s+(x.price||0),0);
const minPrice=Math.min(...available.map(x=>x.price));
const maxPrice=Math.max(...available.map(x=>x.price));

document.getElementById('overview').innerHTML=`
 <article class="stat primary"><div class="label">حالة المخزون الآن</div><div class="value">${available.length} متاح <span style="color:#6d736d;font-size:18px">/ ${units.length}</span></div><div class="sub">نسبة التوفر ${Math.round(available.length/units.length*100)}% · نظرة مباشرة لفريق المبيعات</div></article>
 <article class="stat"><div class="label">الوحدات المتاحة</div><div class="value" style="color:var(--green)">${available.length}</div><div class="mini sub"><i class="dot available"></i>جاهزة للعرض والبيع</div></article>
 <article class="stat"><div class="label">المباع / غير المتاح</div><div class="value">${sold.length}</div><div class="mini sub"><i class="dot sold"></i>لا تظهر ضمن خيارات العميل</div></article>
 <article class="stat"><div class="label">قيمة المخزون المتاح</div><div class="value">${(remainingValue/1000000).toFixed(3)}M</div><div class="sub">ر.س · حسب الأسعار الحالية</div></article>
 <article class="stat"><div class="label">نطاق أسعار المتاح</div><div class="value" style="font-size:20px">${money(minPrice)} – ${money(maxPrice)}</div><div class="sub">ر.س</div></article>`;

const floorsEl=document.getElementById('floors');
function render(){
 floorsEl.innerHTML=floorsOrder.map(f=>{
   const arr=units.filter(u=>u.floor===f), av=arr.filter(u=>u.status==='متاح').length, so=arr.length-av;
   const value=arr.filter(u=>u.status==='متاح').reduce((s,u)=>s+(u.price||0),0);
   return `<section class="floor" data-floor-wrap="${f}">
    <div class="floor-head"><div class="floor-title"><h2>الدور ${f}</h2><span class="floor-badge">${av} متاح من ${arr.length}</span></div>
    <div class="floor-summary"><span>متاح: <b style="color:var(--green)">${av}</b></span><span>مباع: <b>${so}</b></span><span>قيمة المتاح: <b>${money(value)} ر.س</b></span></div></div>
    <div class="units">${arr.map(unitCard).join('')}</div>
   </section>`
 }).join('');
 document.querySelectorAll('.unit').forEach(el=>el.addEventListener('click',()=>openModal(Number(el.dataset.index))));
}
function unitCard(u){
 const i=units.indexOf(u), cls=u.status==='متاح'?'available':'sold';
 return `<article class="unit ${cls}" data-index="${i}" data-status="${u.status}" data-floor="${u.floor}" data-search="${u.no} ${u.cat} ${u.deed} ${u.front}">
   <div class="unit-top"><div class="unit-no">${u.no}</div><div class="category">${u.cat}</div></div>
   <div class="status">${u.status==='متاح'?'متاح للبيع':'مباع'}</div>
   <div class="price">${u.status==='متاح'?money(u.price):'غير متاح'} ${u.status==='متاح'?'<small>ر.س</small>':''}</div>
   <div class="meta">${u.front}<br>${u.actual.toFixed(2)} م² على الطبيعة</div>
   <div class="sold-stamp">غير متاح</div>
 </article>`;
}
render();

let state={status:'all',floor:null,q:''};
function applyFilters(){
 document.querySelectorAll('.unit').forEach(el=>{
   const statusOk=state.status==='all'||(state.status==='available'&&el.dataset.status==='متاح')||(state.status==='sold'&&el.dataset.status==='مباع');
   const floorOk=!state.floor||el.dataset.floor===state.floor;
   const qOk=!state.q||el.dataset.search.toLowerCase().includes(state.q);
   el.classList.toggle('hidden',!(statusOk&&floorOk&&qOk));
 });
 document.querySelectorAll('.floor').forEach(f=>f.classList.toggle('hidden',[...f.querySelectorAll('.unit')].every(u=>u.classList.contains('hidden'))));
}
document.querySelectorAll('.chip').forEach(btn=>btn.addEventListener('click',()=>{
 if(btn.dataset.filter){state.status=btn.dataset.filter;state.floor=null;}else{state.floor=state.floor===btn.dataset.floor?null:btn.dataset.floor;state.status='all';}
 document.querySelectorAll('.chip').forEach(b=>b.classList.remove('active'));
 if(state.floor)btn.classList.add('active'); else document.querySelector(`.chip[data-filter="${state.status}"]`).classList.add('active');
 applyFilters();
}));
document.getElementById('search').addEventListener('input',e=>{state.q=e.target.value.trim().toLowerCase();applyFilters()});

const modal=document.getElementById('modal'), modalCard=document.getElementById('modalCard');
function openModal(i){
 const u=units[i], cls=u.status==='متاح'?'available':'sold';
 modalCard.innerHTML=`<div class="modal-head"><div><h3>الشقة ${u.no} · ${u.cat}</h3><div class="detail-status ${cls}">${u.status==='متاح'?'● متاحة للبيع الآن':'● مباعة / غير متاحة'}</div></div><button class="close" onclick="closeModal()">✕</button></div>
 <div class="details">
  <div class="detail"><span>الدور</span><strong>${u.floor}</strong></div><div class="detail"><span>الواجهة</span><strong>${u.front}</strong></div>
  <div class="detail"><span>المساحة حسب الصك</span><strong>${u.titleArea} م²</strong></div><div class="detail"><span>المساحة على الطبيعة</span><strong>${u.actual.toFixed(2)} م²</strong></div>
  <div class="detail" style="grid-column:1/-1"><span>رقم الصك</span><strong dir="ltr">${u.deed}</strong></div>
 </div>
 <div class="modal-price"><span>${u.status==='متاح'?'سعر البيع الحالي':'حالة الوحدة'}</span><strong>${u.status==='متاح'?money(u.price)+' ر.س':'غير متاحة للبيع'}</strong></div>
 <div class="actions"><button class="action primary" ${u.status==='مباع'?'disabled style="opacity:.45"':''} onclick="copyUnit(${i})">نسخ تفاصيل الوحدة</button><button class="action secondary" onclick="closeModal()">إغلاق</button></div>`;
 modal.classList.add('show');
}
function closeModal(){modal.classList.remove('show')}
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
function copyUnit(i){
 const u=units[i];
 const txt=`الشقة ${u.no} | الفئة ${u.cat}\nالدور: ${u.floor}\nالواجهة: ${u.front}\nالمساحة على الطبيعة: ${u.actual.toFixed(2)} م²\nالسعر: ${money(u.price)} ر.س\nالحالة: ${u.status}`;
 navigator.clipboard.writeText(txt).then(()=>{const t=document.getElementById('toast');t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)});
}
