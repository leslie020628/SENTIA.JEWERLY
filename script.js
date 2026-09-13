const WHATSAPP_NUMBER="18299740579"; // CAMBIA ESTE NÚMERO por el WhatsApp real de SENTÍA.
const products=[{"id": 1, "cat": "anillos", "name": "Amore", "price": 175, "finish": "Dorado", "img": "assets/anillos-amore.jpg"}, {"id": 2, "cat": "anillos", "name": "Lumière", "price": 225, "finish": "Dorado", "img": "assets/anillos-lumiere.jpg"}, {"id": 3, "cat": "anillos", "name": "Vita", "price": 200, "finish": "Dorado", "img": "assets/anillos-vita.jpg"}, {"id": 4, "cat": "anillos", "name": "Marea", "price": 125, "finish": "Plateado", "img": "assets/anillos-marea.jpg"}, {"id": 5, "cat": "anillos", "name": "Essenza", "price": 250, "finish": "Dorado", "img": "assets/anillos-essenza.jpg"}, {"id": 6, "cat": "anillos", "name": "Alma", "price": 150, "finish": "Plateado", "img": "assets/anillos-alma.jpg"}, {"id": 7, "cat": "collares", "name": "Cuore", "price": 280, "finish": "Dorado", "img": "assets/collares-cuore.jpg"}, {"id": 8, "cat": "collares", "name": "Lumina", "price": 350, "finish": "Plateado", "img": "assets/collares-lumina.jpg"}, {"id": 9, "cat": "collares", "name": "Aura", "price": 320, "finish": "Dorado", "img": "assets/collares-aura.jpg"}, {"id": 10, "cat": "collares", "name": "Luna", "price": 300, "finish": "Plateado", "img": "assets/collares-luna.jpg"}, {"id": 11, "cat": "collares", "name": "Essenza", "price": 450, "finish": "Dorado", "img": "assets/collares-essenza.jpg"}, {"id": 12, "cat": "collares", "name": "Stella", "price": 375, "finish": "Dorado", "img": "assets/collares-stella.jpg"}, {"id": 13, "cat": "pulseras", "name": "Fiore", "price": 275, "finish": "Dorado", "img": "assets/pulseras-fiore.jpg"}, {"id": 14, "cat": "pulseras", "name": "Cuore", "price": 250, "finish": "Dorado", "img": "assets/pulseras-cuore.jpg"}, {"id": 15, "cat": "pulseras", "name": "Luna", "price": 300, "finish": "Dorado", "img": "assets/pulseras-luna.jpg"}, {"id": 16, "cat": "pulseras", "name": "Aura", "price": 325, "finish": "Dorado", "img": "assets/pulseras-aura.jpg"}, {"id": 17, "cat": "pulseras", "name": "Stella", "price": 280, "finish": "Plateado", "img": "assets/pulseras-stella.jpg"}, {"id": 18, "cat": "pulseras", "name": "Essenza", "price": 350, "finish": "Dorado", "img": "assets/pulseras-essenza.jpg"}, {"id": 19, "cat": "aretes", "name": "Luna", "price": 200, "finish": "Dorado", "img": "assets/aretes-luna.jpg"}, {"id": 20, "cat": "aretes", "name": "Fiore", "price": 175, "finish": "Dorado", "img": "assets/aretes-fiore.jpg"}, {"id": 21, "cat": "aretes", "name": "Cuore", "price": 150, "finish": "Dorado", "img": "assets/aretes-cuore.jpg"}, {"id": 22, "cat": "aretes", "name": "Aura", "price": 225, "finish": "Dorado", "img": "assets/aretes-aura.jpg"}, {"id": 23, "cat": "aretes", "name": "Stella", "price": 250, "finish": "Dorado", "img": "assets/aretes-stella.jpg"}, {"id": 24, "cat": "aretes", "name": "Marea", "price": 175, "finish": "Plateado", "img": "assets/aretes-marea.jpg"}];
let cart=[];
const $=s=>document.querySelector(s), money=n=>"RD$"+n.toLocaleString("es-DO");
function draw(f="all"){$("#grid").innerHTML=products.filter(p=>f==="all"||p.cat===f).map(p=>`<article class="card"><div class="pic"><img src="${p.img}" alt="${p.name}" loading="lazy"></div><div class="info"><div class="row"><h3>${p.name}</h3><b>${money(p.price)}</b></div><p>${p.cat} · ${p.finish}</p><button onclick="add(${p.id})">AGREGAR A MI CAJA</button></div></article>`).join("")}
draw();
document.querySelectorAll(".filters button").forEach(b=>b.onclick=()=>{document.querySelectorAll(".filters button").forEach(x=>x.classList.remove("active"));b.classList.add("active");draw(b.dataset.f)});
function add(id){let p=products.find(x=>x.id===id);cart.push({...p,key:Date.now()+Math.random()});renderCart();openCart()}
function removeItem(k){cart=cart.filter(x=>x.key!==k);renderCart()}
function renderCart(){$("#count").textContent=cart.length;$("#items").innerHTML=cart.length?cart.map(x=>`<div class="item"><img src="${x.img}"><p><b>${x.name}</b><br>${x.finish} · ${money(x.price)}</p><button onclick="removeItem(${x.key})">×</button></div>`).join(""):`<p style="padding:25px 0;font-size:11px">Tu caja está vacía. Elige tus joyas favoritas ✦</p>`;$("#total").textContent=money(cart.reduce((a,b)=>a+b.price,0))}
function openCart(){$("#drawer").classList.add("open");$("#overlay").classList.add("open")} function closeCart(){$("#drawer").classList.remove("open");$("#overlay").classList.remove("open")}
$("#openCart").onclick=openCart;$("#close").onclick=closeCart;$("#overlay").onclick=closeCart;
$("#wa").onclick=()=>{if(!cart.length)return alert("Agrega al menos una joya a tu caja.");if(WHATSAPP_NUMBER==="18090000000")return alert("Antes de publicar, cambia WHATSAPP_NUMBER en script.js por el número real de SENTÍA.");let name=$("#name").value.trim()||"Cliente",box=$("#box").value,note=$("#note").value.trim(),lines=cart.map((x,i)=>`${i+1}. ${x.name} — ${x.finish} — ${money(x.price)}`).join("\n"),total=money(cart.reduce((a,b)=>a+b.price,0));let msg=`Hola SENTÍA 🤎\nSoy ${name} y quiero pedir mi caja con:\n\n${lines}\n\nTotal: ${total}\nCaja: ${box}${note?`\nNota: ${note}`:""}\n\n¿Me confirman disponibilidad?`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank")};
renderCart();

// Pasaporte SENTÍA interactivo (demo visual)
const stampGrid=document.querySelector("#stampGrid");
const passportStatus=document.querySelector("#passportStatus");
if(stampGrid && passportStatus){
  const stamps=["I","II","III","IV","V","VI"];
  const collected=new Set();
  stampGrid.innerHTML=stamps.map((n,i)=>`<button class="stampSlot" type="button" data-stamp="${i}" aria-pressed="false"><span>${n}</span><small>SENTÍA</small></button>`).join("");
  stampGrid.addEventListener("click",e=>{
    const slot=e.target.closest("[data-stamp]"); if(!slot)return;
    const id=slot.dataset.stamp;
    collected.has(id)?collected.delete(id):collected.add(id);
    const active=collected.has(id);
    slot.classList.toggle("active",active);
    slot.setAttribute("aria-pressed",String(active));
    passportStatus.textContent=collected.size===6
      ?"Pasaporte completo ✦ Tu sorpresa está desbloqueada."
      :`${collected.size} / 6 stickers coleccionados`;
  });
}
