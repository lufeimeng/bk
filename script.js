// 本地演示筛选数据；完整资料请点击页面中的官网入口访问目标站。\nconst entries=[
{id:'DEMO-DJ-001',name:'示例短剧品牌 A',type:'短剧品牌',cat:'短剧',status:'待核验',desc:'演示用品牌档案，展示品牌定位、收录类别与别名字段。',aliases:['短剧示例A','Drama Demo A'],tags:['品牌资料','系列索引'],date:'2026-11-01'},
{id:'DEMO-DJ-002',name:'示例短剧作品 B',type:'短剧作品',cat:'短剧',status:'信息更新中',desc:'演示用作品条目，可扩展作品简介、发行信息与关联品牌。',aliases:['作品B','Drama Work B'],tags:['作品资料','关联品牌'],date:'2026-10-28'},
{id:'DEMO-DM-001',name:'示例动漫厂牌 C',type:'动漫品牌',cat:'动漫',status:'待核验',desc:'演示用动漫品牌资料，记录品牌分类、公开别名与资料状态。',aliases:['动漫厂牌C','Anime Demo C'],tags:['品牌档案','动漫'],date:'2026-10-26'},
{id:'DEMO-MH-001',name:'示例漫画系列 D',type:'漫画作品',cat:'漫画',status:'已核验',desc:'演示用漫画系列资料。正式上线时应补充可追溯来源与核验日期。',aliases:['漫画D','Comic Series D'],tags:['系列资料','漫画'],date:'2026-10-22'},
{id:'DEMO-XS-001',name:'示例小说企划 E',type:'小说企划',cat:'小说',status:'待核验',desc:'演示用小说资料条目，可记录系列名称、作者署名与公开出版信息。',aliases:['小说E','Novel Project E'],tags:['小说资料','企划'],date:'2026-10-19'},
{id:'DEMO-BR-001',name:'示例综合品牌 F',type:'综合品牌',cat:'品牌',status:'信息更新中',desc:'演示用跨类型品牌档案，可关联不同内容类别。',aliases:['品牌F','Brand Demo F'],tags:['品牌档案','跨类型'],date:'2026-10-15'}];
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let category='all',status='全部',query='';
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function render(){const q=query.trim().toLowerCase();const found=entries.filter(e=>(category==='all'||e.cat===category)&&(status==='全部'||e.status===status)&&[e.id,e.name,e.type,e.cat,e.status,e.desc,...e.aliases,...e.tags].join(' ').toLowerCase().includes(q));$('#count').firstChild.textContent=`显示 ${found.length} 条示例资料　 `;$('#cards').innerHTML=found.map(e=>`<article class="entry"><div class="entry-top"><span class="entry-type">${safe(e.type.toUpperCase())}</span><span class="status ${e.status==='已核验'?'verified':e.status==='待核验'?'pending':'updating'}">${safe(e.status)}</span></div><h3>${safe(e.name)}</h3><p>${safe(e.desc)}</p><div class="tags">${e.tags.map(t=>`<span>${safe(t)}</span>`).join('')}</div><div class="entry-foot"><span>${safe(e.id)}</span><span>更新 ${safe(e.date)}</span></div></article>`).join('');$('#empty').hidden=found.length>0;$('#cards').hidden=found.length===0}
function reset(){category='all';status='全部';query='';$('#q').value='';$$('.cat').forEach(b=>b.classList.toggle('active',b.dataset.cat==='all'));$$('.filters button').forEach(b=>b.classList.toggle('selected',b.dataset.status==='全部'));render()}
$$('.cat').forEach(b=>b.addEventListener('click',()=>{category=b.dataset.cat;$$('.cat').forEach(x=>x.classList.toggle('active',x===b));render();$('#latest').scrollIntoView({behavior:'smooth'})}));
$$('.filters button').forEach(b=>b.addEventListener('click',()=>{status=b.dataset.status;$$('.filters button').forEach(x=>x.classList.toggle('selected',x===b));render()}));
$('#q').addEventListener('input',e=>{query=e.target.value;render()});$('#searchForm').addEventListener('submit',e=>{e.preventDefault();query=$('#q').value;render();$('#latest').scrollIntoView({behavior:'smooth'})});
$$('.hints button').forEach(b=>b.addEventListener('click',()=>{$('#q').value=b.dataset.query;query=b.dataset.query;render();$('#latest').scrollIntoView({behavior:'smooth'})}));
$('#clear').addEventListener('click',reset);$('#reset').addEventListener('click',reset);
$('#menu').addEventListener('click',()=>$('#nav').classList.toggle('open'));$$('#nav a').forEach(a=>a.addEventListener('click',()=>$('#nav').classList.remove('open')));
$('#year').textContent=new Date().getFullYear();render();