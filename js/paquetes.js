// Paquetes demo (20 paquetes con imagen + descripción)
const paquetes = [
  { id: "pack-1",  title: "Paquete 1",  price: 50000,  img: "./img/pack1.png",  desc: "Descripción del paquete 1",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-2",  title: "Paquete 2",  price: 60000,  img: "./img/pack2.jpg",  desc: "Descripción del paquete 2",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-3",  title: "Paquete 3",  price: 70000,  img: "./img/pack3.jpg",  desc: "Descripción del paquete 3",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-4",  title: "Paquete 4",  price: 80000,  img: "./img/pack4.jpg",  desc: "Descripción del paquete 4",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-5",  title: "Paquete 5",  price: 90000,  img: "./img/pack5.jpg",  desc: "Descripción del paquete 5",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-6",  title: "Paquete 6",  price: 100000, img: "./img/pack6.jpg",  desc: "Descripción del paquete 6",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-7",  title: "Paquete 7",  price: 110000, img: "./img/pack7.jpg",  desc: "Descripción del paquete 7",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-8",  title: "Paquete 8",  price: 120000, img: "./img/pack8.jpg",  desc: "Descripción del paquete 8",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-9",  title: "Paquete 9",  price: 130000, img: "./img/pack9.jpg",  desc: "Descripción del paquete 9",  link: "https://tusitiowebadistancia.com" },
  { id: "pack-10", title: "Paquete 10", price: 140000, img: "./img/pack10.jpg", desc: "Descripción del paquete 10", link: "https://tusitiowebadistancia.com" },
  { id: "pack-11", title: "Paquete 11", price: 150000, img: "./img/pack11.jpg", desc: "Descripción del paquete 11", link: "https://tusitiowebadistancia.com" },
  { id: "pack-12", title: "Paquete 12", price: 160000, img: "./img/pack12.jpg", desc: "Descripción del paquete 12", link: "https://tusitiowebadistancia.com" },
  { id: "pack-13", title: "Paquete 13", price: 170000, img: "./img/pack13.jpg", desc: "Descripción del paquete 13", link: "https://tusitiowebadistancia.com" },
  { id: "pack-14", title: "Paquete 14", price: 180000, img: "./img/pack14.jpg", desc: "Descripción del paquete 14", link: "https://tusitiowebadistancia.com" },
  { id: "pack-15", title: "Paquete 15", price: 190000, img: "./img/pack15.jpg", desc: "Descripción del paquete 15", link: "https://tusitiowebadistancia.com" },
  { id: "pack-16", title: "Paquete 16", price: 200000, img: "./img/pack16.jpg", desc: "Descripción del paquete 16", link: "https://tusitiowebadistancia.com" },
  { id: "pack-17", title: "Paquete 17", price: 210000, img: "./img/pack17.jpg", desc: "Descripción del paquete 17", link: "https://tusitiowebadistancia.com" },
  { id: "pack-18", title: "Paquete 18", price: 220000, img: "./img/pack18.jpg", desc: "Descripción del paquete 18", link: "https://tusitiowebadistancia.com" },
  { id: "pack-19", title: "Paquete 19", price: 230000, img: "./img/pack19.jpg", desc: "Descripción del paquete 19", link: "https://tusitiowebadistancia.com" },
  { id: "pack-20", title: "Paquete 20", price: 240000, img: "./img/pack20.jpg", desc: "Descripción del paquete 20", link: "https://tusitiowebadistancia.com" }
];

const $wrap = document.querySelector('.paquetes-wrap');

// Render de las tarjetas
$wrap.innerHTML = paquetes.map(p => `
  <div class="card" style="background-image:url('${p.img}')" data-link="${p.link}" data-id="${p.id}">
    <div class="card-body">
      <div class="price">$ ${p.price.toLocaleString()}</div>
      <div class="card-desc">${p.desc}</div>
      <div class="stars" data-id="${p.id}">
        ${[1,2,3,4,5].map(n => `<span data-star="${n}">★</span>`).join('')}
      </div>
      <button class="add-cart">Agregar al carrito</button>
    </div>
  </div>
`).join("");

// --- Ratings con localStorage ---
function getRating(id) {
  return parseInt(localStorage.getItem("rating_" + id) || "0");
}
function setRating(id, stars) {
  localStorage.setItem("rating_" + id, stars);
}

// Aplicar rating inicial
document.querySelectorAll(".stars").forEach(starsEl => {
  const id = starsEl.dataset.id;
  const rating = getRating(id);
  if (rating > 0) {
    starsEl.querySelectorAll("span").forEach(star => {
      if (parseInt(star.dataset.star) <= rating) {
        star.classList.add("active");
      }
    });
  }
});

// Click en estrellas
document.querySelectorAll(".stars span").forEach(starEl => {
  starEl.addEventListener("click", e => {
    e.stopPropagation();
    const id = starEl.parentElement.dataset.id;
    const stars = parseInt(starEl.dataset.star);
    setRating(id, stars);

    // reset + aplicar
    starEl.parentElement.querySelectorAll("span").forEach(s => s.classList.remove("active"));
    for (let i=0; i<stars; i++) {
      starEl.parentElement.querySelectorAll("span")[i].classList.add("active");
    }
  });
});

// Agregar al carrito
document.querySelectorAll(".add-cart").forEach(btn => {
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const card = btn.closest(".card");
    const id = card.dataset.id;
    const pack = paquetes.find(p => p.id === id);
    addToCart({ id, title: pack.title, price: pack.price, qty:1 });
  });
});

// Click en tarjeta → abre link externo
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON" || e.target.closest(".stars")) return;
    const url = card.dataset.link;
    window.open(url, "_blank");
  });
});
