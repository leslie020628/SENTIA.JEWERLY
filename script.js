const WHATSAPP_NUMBER="18299740579"; // Cambia este número por el WhatsApp real de SENTÍA.
const products=[{"id":1,"cat":"anillos","name":"Nova","price":175,"finish":"Dorado","img":"assets/dorado/anillos/anillos-01.png"},{"id":2,"cat":"anillos","name":"Amore","price":225,"finish":"Dorado","img":"assets/dorado/anillos/anillos-02.png"},{"id":3,"cat":"anillos","name":"Lira","price":150,"finish":"Dorado","img":"assets/dorado/anillos/anillos-03.png"},{"id":4,"cat":"anillos","name":"Solé","price":250,"finish":"Dorado","img":"assets/dorado/anillos/anillos-04.png"},{"id":5,"cat":"anillos","name":"Fiori","price":200,"finish":"Dorado","img":"assets/dorado/anillos/anillos-05.png"},{"id":6,"cat":"anillos","name":"Aura","price":175,"finish":"Dorado","img":"assets/dorado/anillos/anillos-06.png"},{"id":7,"cat":"collares","name":"Fiore","price":280,"finish":"Dorado","img":"assets/dorado/collares/collares-01.png"},{"id":8,"cat":"collares","name":"Amore","price":300,"finish":"Dorado","img":"assets/dorado/collares/collares-02.png"},{"id":9,"cat":"collares","name":"Lumi","price":325,"finish":"Dorado","img":"assets/dorado/collares/collares-03.png"},{"id":10,"cat":"collares","name":"Sola","price":275,"finish":"Dorado","img":"assets/dorado/collares/collares-04.png"},{"id":11,"cat":"collares","name":"Luna","price":350,"finish":"Dorado","img":"assets/dorado/collares/collares-05.png"},{"id":12,"cat":"collares","name":"Bella","price":320,"finish":"Dorado","img":"assets/dorado/collares/collares-06.png"},{"id":13,"cat":"pulseras","name":"Amore","price":225,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-01.png"},{"id":14,"cat":"pulseras","name":"Lumière","price":250,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-02.png"},{"id":15,"cat":"pulseras","name":"Vita","price":275,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-03.png"},{"id":16,"cat":"pulseras","name":"Sol","price":300,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-04.png"},{"id":17,"cat":"pulseras","name":"Aura","price":325,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-05.png"},{"id":18,"cat":"pulseras","name":"Fiori","price":250,"finish":"Dorado","img":"assets/dorado/pulseras/pulseras-06.png"},{"id":19,"cat":"aretes","name":"Lira","price":175,"finish":"Dorado","img":"assets/dorado/aretes/aretes-01.png"},{"id":20,"cat":"aretes","name":"Fiore","price":150,"finish":"Dorado","img":"assets/dorado/aretes/aretes-02.png"},{"id":21,"cat":"aretes","name":"Nova","price":200,"finish":"Dorado","img":"assets/dorado/aretes/aretes-03.png"},{"id":22,"cat":"aretes","name":"Amore","price":225,"finish":"Dorado","img":"assets/dorado/aretes/aretes-04.png"},{"id":23,"cat":"aretes","name":"Sola","price":250,"finish":"Dorado","img":"assets/dorado/aretes/aretes-05.png"},{"id":24,"cat":"aretes","name":"Aurora","price":200,"finish":"Dorado","img":"assets/dorado/aretes/aretes-06.png"},{"id":25,"cat":"anillos","name":"Néra","price":150,"finish":"Plateado","img":"assets/plateado/anillos/anillos-01.png"},{"id":26,"cat":"anillos","name":"Celeste","price":175,"finish":"Plateado","img":"assets/plateado/anillos/anillos-02.png"},{"id":27,"cat":"anillos","name":"Lumi","price":200,"finish":"Plateado","img":"assets/plateado/anillos/anillos-03.png"},{"id":28,"cat":"anillos","name":"Amore","price":150,"finish":"Plateado","img":"assets/plateado/anillos/anillos-04.png"},{"id":29,"cat":"anillos","name":"Stella","price":175,"finish":"Plateado","img":"assets/plateado/anillos/anillos-05.png"},{"id":30,"cat":"anillos","name":"Fiori","price":225,"finish":"Plateado","img":"assets/plateado/anillos/anillos-06.png"},{"id":31,"cat":"collares","name":"Noeud","price":280,"finish":"Plateado","img":"assets/plateado/collares/collares-01.png"},{"id":32,"cat":"collares","name":"Vérité","price":300,"finish":"Plateado","img":"assets/plateado/collares/collares-02.png"},{"id":33,"cat":"collares","name":"Astra","price":325,"finish":"Plateado","img":"assets/plateado/collares/collares-03.png"},{"id":34,"cat":"collares","name":"Coeur","price":275,"finish":"Plateado","img":"assets/plateado/collares/collares-04.png"},{"id":35,"cat":"collares","name":"Néra","price":350,"finish":"Plateado","img":"assets/plateado/collares/collares-05.png"},{"id":36,"cat":"collares","name":"Orion","price":320,"finish":"Plateado","img":"assets/plateado/collares/collares-06.png"},{"id":37,"cat":"pulseras","name":"Nova","price":225,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-01.png"},{"id":38,"cat":"pulseras","name":"Lumi","price":250,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-02.png"},{"id":39,"cat":"pulseras","name":"Celeste","price":275,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-03.png"},{"id":40,"cat":"pulseras","name":"Vérité","price":300,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-04.png"},{"id":41,"cat":"pulseras","name":"Alma","price":325,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-05.png"},{"id":42,"cat":"pulseras","name":"Marea","price":250,"finish":"Plateado","img":"assets/plateado/pulseras/pulseras-06.png"},{"id":43,"cat":"aretes","name":"Néra","price":175,"finish":"Plateado","img":"assets/plateado/aretes/aretes-01.png"},{"id":44,"cat":"aretes","name":"Lumi","price":150,"finish":"Plateado","img":"assets/plateado/aretes/aretes-02.png"},{"id":45,"cat":"aretes","name":"Astra","price":200,"finish":"Plateado","img":"assets/plateado/aretes/aretes-03.png"},{"id":46,"cat":"aretes","name":"Celeste","price":225,"finish":"Plateado","img":"assets/plateado/aretes/aretes-04.png"},{"id":47,"cat":"aretes","name":"Vérité","price":250,"finish":"Plateado","img":"assets/plateado/aretes/aretes-05.png"},{"id":48,"cat":"aretes","name":"Marea","price":200,"finish":"Plateado","img":"assets/plateado/aretes/aretes-06.png"}];
let cart=[];
let favorites=new Set(JSON.parse(localStorage.getItem("sentiaFavorites")||"[]"));
let activeProduct=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>"RD$"+n.toLocaleString("es-DO");

function cardHTML(p){
  return `<article class="card">
    <button class="favBtn ${favorites.has(p.id)?"active":""}" onclick="toggleFav(${p.id},event)" aria-label="Guardar favorito">♡</button>
    <div class="pic" onclick="openProduct(${p.id})"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="info">
      <div class="row"><h3>${p.name}</h3><b>${money(p.price)}</b></div>
      <p>${p.cat} · ${p.finish}</p>
      <div class="cardActions"><button onclick="add(${p.id})">AGREGAR A MI CAJA</button><button onclick="openProduct(${p.id})">VER</button></div>
    </div>
  </article>`;
}
function drawFinish(finish,filter="all"){
  const target=finish==="Dorado"?"#goldGrid":"#silverGrid";
  const list=products.filter(p=>p.finish===finish&&(filter==="all"||p.cat===filter));
  $(target).innerHTML=list.length?list.map(cardHTML).join(""):`<p class="emptyCollection">Muy pronto tendremos más piezas ${finish.toLowerCase()}s en esta categoría ✦</p>`;
}
function drawAll(){drawFinish("Dorado");drawFinish("Plateado")}
drawAll();

$$(".filters button").forEach(b=>b.onclick=()=>{
  const group=b.closest(".filters");
  group.querySelectorAll("button").forEach(x=>x.classList.remove("active"));
  b.classList.add("active");
  drawFinish(b.dataset.finish,b.dataset.f);
});
$$("[data-jump]").forEach(a=>a.onclick=()=>{
  const f=a.dataset.jump;
  setTimeout(()=>{
    const btn=$(`.goldFilters button[data-f="${f}"]`);
    btn?.click();
  },350);
});

function add(id){
  const p=products.find(x=>x.id===id); if(!p)return;
  cart.push({...p,key:Date.now()+Math.random()});
  renderCart(); renderBox(); openCart();
}
function removeItem(k){cart=cart.filter(x=>x.key!==k);renderCart();renderBox()}
function renderCart(){
  $("#count").textContent=cart.length; $("#builderCount").textContent=cart.length;
  $("#items").innerHTML=cart.length?cart.map(x=>`<div class="item"><img src="${x.img}"><p><b>${x.name}</b><br>${x.finish} · ${money(x.price)}</p><button onclick="removeItem(${x.key})">×</button></div>`).join(""):`<p style="padding:25px 0;font-size:11px">Tu caja está vacía. Elige tus joyas favoritas ✦</p>`;
  $("#total").textContent=money(cart.reduce((a,b)=>a+b.price,0));
}
function renderBox(){
  const box=$("#boxPreview");
  if(!cart.length){box.innerHTML='<div class="emptyBoxMessage">Tu caja está esperando tus joyas ✦</div>';return;}
  box.innerHTML=cart.slice(-8).map(x=>`<div class="boxMini"><img src="${x.img}" alt=""><small>${x.name}</small></div>`).join("")+(cart.length>8?`<div class="boxMini"><small>+${cart.length-8} piezas</small></div>`:"");
}
function openCart(){$("#drawer").classList.add("open");$("#overlay").classList.add("open")}
function closePanels(){$("#drawer").classList.remove("open");$("#favoritesPanel").classList.remove("open");$("#overlay").classList.remove("open")}
$("#openCart").onclick=openCart; $("#builderCartBtn").onclick=openCart; $("#close").onclick=closePanels; $("#overlay").onclick=closePanels;

function toggleFav(id,e){
  e?.stopPropagation();
  favorites.has(id)?favorites.delete(id):favorites.add(id);
  localStorage.setItem("sentiaFavorites",JSON.stringify([...favorites]));
  updateFavs();
  const g=$(".goldFilters .active"),s=$(".silverFilters .active");
  drawFinish("Dorado",g?.dataset.f||"all");
  drawFinish("Plateado",s?.dataset.f||"all");
  if(activeProduct?.id===id) updateModalFav();
}
function updateFavs(){
  $("#favCount").textContent=favorites.size;
  const list=products.filter(p=>favorites.has(p.id));
  $("#favoritesList").innerHTML=list.length?list.map(p=>`<div class="item"><img src="${p.img}"><p><b>${p.name}</b><br>${money(p.price)}</p><button onclick="toggleFav(${p.id})">×</button></div>`).join(""):`<p style="padding:25px 0;font-size:11px">Aún no has guardado favoritos ♡</p>`;
}
$("#favoritesBtn").onclick=()=>{updateFavs();$("#favoritesPanel").classList.add("open");$("#overlay").classList.add("open")};
$("#closeFav").onclick=closePanels;

function openProduct(id){
  const p=products.find(x=>x.id===id); if(!p)return; activeProduct=p;
  $("#modalImg").src=p.img; $("#modalImg").alt=p.name; $("#modalCat").textContent=p.cat.toUpperCase();
  $("#modalName").textContent=p.name; $("#modalPrice").textContent=money(p.price); $("#modalFinish").textContent=`Acabado: ${p.finish}`;
  updateModalFav(); $("#productModal").showModal();
}
function updateModalFav(){$("#modalFav").textContent=activeProduct&&favorites.has(activeProduct.id)?"♥ GUARDADO":"♡ GUARDAR"}
$("#closeProduct").onclick=()=>$("#productModal").close();
$("#modalAdd").onclick=()=>{if(activeProduct){$("#productModal").close();add(activeProduct.id)}};
$("#modalFav").onclick=()=>{if(activeProduct)toggleFav(activeProduct.id)};

const stamps=["I","II","III","IV","V","VI"], collected=new Set();
$("#stampGrid").innerHTML=stamps.map((n,i)=>`<button class="stampSlot" type="button" data-stamp="${i}"><span>${n}</span><small>SENTÍA</small></button>`).join("");
$("#stampGrid").addEventListener("click",e=>{const s=e.target.closest("[data-stamp]");if(!s)return;const id=s.dataset.stamp;collected.has(id)?collected.delete(id):collected.add(id);s.classList.toggle("active",collected.has(id));$("#passportStatus").textContent=collected.size===6?"Tarjeta completa ✦ Tu sorpresa está desbloqueada.":`${collected.size} / 6 stickers coleccionados`;});

$("#delivery").addEventListener("change",()=>{$("#deliveryPrice").textContent=$("#delivery").value.startsWith("CEGES")?"RD$0":"POR CONFIRMAR"});

$("#wa").onclick=()=>{
  if(!cart.length)return alert("Agrega al menos una joya a tu caja.");
  if(WHATSAPP_NUMBER==="18090000000")return alert("Antes de publicar, cambia WHATSAPP_NUMBER en script.js por el número real de SENTÍA.");
  const name=$("#name").value.trim()||"Cliente",box=$("#box").value,delivery=$("#delivery").value,note=$("#note").value.trim();
  const lines=cart.map((x,i)=>`${i+1}. ${x.name} — ${x.finish} — ${money(x.price)}`).join("\n");
  const total=money(cart.reduce((a,b)=>a+b.price,0));
  const deliveryNote=delivery.startsWith("CEGES")?"RD$0":"Costo por confirmar";
  const msg=`Hola SENTÍA 🤎\nSoy ${name} y quiero pedir mi caja con:\n\n${lines}\n\nTotal de joyas: ${total}\nCaja: ${box}\nEntrega: ${delivery} (${deliveryNote})${note?`\nNota: ${note}`:""}\n\n¿Me confirman disponibilidad?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank");
};

window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),1200));
renderCart(); renderBox(); updateFavs();
