const WHATSAPP_NUMBER="18090000000"; // Cambia este número por el WhatsApp real de SENTÍA.
const products=[{"id": 1, "cat": "anillos", "name": "Amore", "price": 175, "finish": "Dorado", "img": "assets/anillos-amore.jpg"}, {"id": 2, "cat": "anillos", "name": "Lumière", "price": 225, "finish": "Dorado", "img": "assets/anillos-lumiere.jpg"}, {"id": 3, "cat": "anillos", "name": "Vita", "price": 200, "finish": "Dorado", "img": "assets/anillos-vita.jpg"}, {"id": 4, "cat": "anillos", "name": "Marea", "price": 125, "finish": "Plateado", "img": "assets/anillos-marea.jpg"}, {"id": 5, "cat": "anillos", "name": "Essenza", "price": 250, "finish": "Dorado", "img": "assets/anillos-essenza.jpg"}, {"id": 6, "cat": "anillos", "name": "Alma", "price": 150, "finish": "Plateado", "img": "assets/anillos-alma.jpg"}, {"id": 7, "cat": "collares", "name": "Cuore", "price": 280, "finish": "Dorado", "img": "assets/collares-cuore.jpg"}, {"id": 8, "cat": "collares", "name": "Lumina", "price": 350, "finish": "Plateado", "img": "assets/collares-lumina.jpg"}, {"id": 9, "cat": "collares", "name": "Aura", "price": 320, "finish": "Dorado", "img": "assets/collares-aura.jpg"}, {"id": 10, "cat": "collares", "name": "Luna", "price": 300, "finish": "Plateado", "img": "assets/collares-luna.jpg"}, {"id": 11, "cat": "collares", "name": "Essenza", "price": 450, "finish": "Dorado", "img": "assets/collares-essenza.jpg"}, {"id": 12, "cat": "collares", "name": "Stella", "price": 375, "finish": "Dorado", "img": "assets/collares-stella.jpg"}, {"id": 13, "cat": "pulseras", "name": "Fiore", "price": 275, "finish": "Dorado", "img": "assets/pulseras-fiore.jpg"}, {"id": 14, "cat": "pulseras", "name": "Cuore", "price": 250, "finish": "Dorado", "img": "assets/pulseras-cuore.jpg"}, {"id": 15, "cat": "pulseras", "name": "Luna", "price": 300, "finish": "Dorado", "img": "assets/pulseras-luna.jpg"}, {"id": 16, "cat": "pulseras", "name": "Aura", "price": 325, "finish": "Dorado", "img": "assets/pulseras-aura.jpg"}, {"id": 17, "cat": "pulseras", "name": "Stella", "price": 280, "finish": "Plateado", "img": "assets/pulseras-stella.jpg"}, {"id": 18, "cat": "pulseras", "name": "Essenza", "price": 350, "finish": "Dorado", "img": "assets/pulseras-essenza.jpg"}, {"id": 19, "cat": "aretes", "name": "Luna", "price": 200, "finish": "Dorado", "img": "assets/aretes-luna.jpg"}, {"id": 20, "cat": "aretes", "name": "Fiore", "price": 175, "finish": "Dorado", "img": "assets/aretes-fiore.jpg"}, {"id": 21, "cat": "aretes", "name": "Cuore", "price": 150, "finish": "Dorado", "img": "assets/aretes-cuore.jpg"}, {"id": 22, "cat": "aretes", "name": "Aura", "price": 225, "finish": "Dorado", "img": "assets/aretes-aura.jpg"}, {"id": 23, "cat": "aretes", "name": "Stella", "price": 250, "finish": "Dorado", "img": "assets/aretes-stella.jpg"}, {"id": 24, "cat": "aretes", "name": "Marea", "price": 175, "finish": "Plateado", "img": "assets/aretes-marea.jpg"}];
let cart=[];
let favorites=new Set(JSON.parse(localStorage.getItem("sentiaFavorites")||"[]"));
let activeProduct=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const money=n=>"RD$"+n.toLocaleString("es-DO");

function draw(filter="all"){
  $("#grid").innerHTML=products.filter(p=>filter==="all"||p.cat===filter).map(p=>`
  <article class="card">
    <button class="favBtn ${favorites.has(p.id)?"active":""}" onclick="toggleFav(${p.id},event)" aria-label="Guardar favorito">♡</button>
    <div class="pic" onclick="openProduct(${p.id})"><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
    <div class="info">
      <div class="row"><h3>${p.name}</h3><b>${money(p.price)}</b></div>
      <p>${p.cat} · ${p.finish}</p>
      <div class="cardActions"><button onclick="add(${p.id})">AGREGAR A MI CAJA</button><button onclick="openProduct(${p.id})">VER</button></div>
    </div>
  </article>`).join("");
}
draw();

$$(".filters button").forEach(b=>b.onclick=()=>{$$(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");draw(b.dataset.f)});
$$("[data-jump]").forEach(a=>a.onclick=()=>{const f=a.dataset.jump;setTimeout(()=>{const btn=$(`.filters button[data-f="${f}"]`);btn?.click()},350)});

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
  updateFavs(); draw($(".filters .active")?.dataset.f||"all");
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
$("#stampGrid").addEventListener("click",e=>{const s=e.target.closest("[data-stamp]");if(!s)return;const id=s.dataset.stamp;collected.has(id)?collected.delete(id):collected.add(id);s.classList.toggle("active",collected.has(id));$("#passportStatus").textContent=collected.size===6?"Pasaporte completo ✦ Tu sorpresa está desbloqueada.":`${collected.size} / 6 stickers coleccionados`;});

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
