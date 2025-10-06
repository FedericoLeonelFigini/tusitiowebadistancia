// Productos de ejemplo
function generarProductos(nombre, prefix) {
  return Array.from({length: 10}, (_, i) => ({
    id: `${prefix}-${i+1}`,
    title: `${nombre} ${i+1}`,
    price: 50000 + i * 5000,
    img: `./img/${prefix}${i+1}.jpg`,
    desc: `Descripción de ${nombre} ${i+1}`,
    link: "https://tusitiowebadistancia.com" // 🔗 enlace externo
  }));
}

const secciones = {
  "Landing Page": generarProductos("Landing Page", "landing"),
  "Multipágina": generarProductos("Multipágina", "multi"),
  "Ecommerce-lite": generarProductos("Ecommerce-lite", "ecommerce"),
  "Fondos interactivos": generarProductos("Fondos interactivos", "fondos"),
};

function renderCarrusel(nombre, productos, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="section-header">
      <h2>${nombre}</h2>
      <a href="#">Ver todos</a>
    </div>
    <div class="carousel">
      <div class="carousel-track">
        ${productos.map(p => `
          <div class="product-card" data-id="${p.id}" data-link="${p.link}">
            <img src="${p.img}" alt="${p.title}">
            <div class="product-body">
              <div class="product-price">$ ${p.price.toLocaleString()}</div>
              <div class="product-desc">${p.desc}</div>
              <div class="stars" data-id="${p.id}">
                ${[1,2,3,4,5].map(n => `<span data-star="${n}">★</span>`).join("")}
              </div>
              <button class="add-cart">Agregar al carrito</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="carousel-btn prev">‹</button>
      <button class="carousel-btn next">›</button>
    </div>
  `;

  // Funcionalidad de carrusel
  const track = container.querySelector(".carousel-track");
  let index = 0;

  container.querySelector(".next").addEventListener("click", () => {
    index = Math.min(index + 1, productos.length - 1);
    track.style.transform = `translateX(${-index * 260}px)`;
  });

  container.querySelector(".prev").addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(${-index * 260}px)`;
  });

  // Ratings
  container.querySelectorAll(".stars span").forEach(starEl => {
    const id = starEl.parentElement.dataset.id;
    const rating = parseInt(localStorage.getItem("rating_" + id) || "0");
    if (rating > 0) {
      starEl.parentElement.querySelectorAll("span").forEach(s => {
        if (parseInt(s.dataset.star) <= rating) s.classList.add("active");
      });
    }
    starEl.addEventListener("click", e => {
      e.stopPropagation();
      const stars = parseInt(starEl.dataset.star);
      localStorage.setItem("rating_" + id, stars);
      starEl.parentElement.querySelectorAll("span").forEach(s => s.classList.remove("active"));
      for (let i = 0; i < stars; i++) {
        starEl.parentElement.querySelectorAll("span")[i].classList.add("active");
      }
    });
  });

  // Agregar al carrito
  container.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const card = btn.closest(".product-card");
      const id = card.dataset.id;
      const prod = productos.find(p => p.id === id);
      addToCart({ id, title: prod.title, price: prod.price, qty: 1 });
    });
  });

  // Click en tarjeta → abre link externo
  container.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON" || e.target.closest(".stars")) return;
      const url = card.dataset.link;
      window.open(url, "_blank");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarrusel("Landing Page", secciones["Landing Page"], "landing-container");
  renderCarrusel("Multipágina", secciones["Multipágina"], "multi-container");
  renderCarrusel("Ecommerce-lite", secciones["Ecommerce-lite"], "ecommerce-container");
  renderCarrusel("Fondos interactivos", secciones["Fondos interactivos"], "fondos-container");
});
