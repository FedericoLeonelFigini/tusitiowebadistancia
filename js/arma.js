// --- Generar productos ---
function generarProductos(nombre, prefix) {
  return Array.from({ length: 10 }, (_, i) => ({
    id: `${prefix}-${i + 1}`,
    title: `${nombre} ${i + 1}`,
    price: 50000 + i * 5000,
    img: `./img/${prefix}${i + 1}.jpg`,
    desc: `Descripción de ${nombre} ${i + 1}`,
    link: "https://tusitiowebadistancia.com" // 🔗 enlace externo
  }));
}

const secciones = {
  "Landing Page": generarProductos("Landing Page", "landing"),
  "Multipágina": generarProductos("Multipágina", "multi"),
  "Ecommerce-lite": generarProductos("Ecommerce-lite", "ecommerce"),
  "Fondos interactivos": generarProductos("Fondos interactivos", "fondos"),
};

// --- Render carrusel ---
function renderCarrusel(nombre, productos, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="section-header">
      <h2>${nombre}</h2>
      <a href="#">Ver todos</a>
    </div>
    <div class="carousel-container">
      <button class="carousel-btn prev">‹</button>
      <div class="carousel">
        ${productos
          .map(
            (p) => `
          <div class="product-card" data-id="${p.id}" data-link="${p.link}">
            <img src="${p.img}" alt="${p.title}">
            <div class="product-body">
              <div class="product-price">$ ${p.price.toLocaleString()}</div>
              <div class="product-desc">${p.desc}</div>
              <div class="stars" data-id="${p.id}">
                ${[1, 2, 3, 4, 5]
                  .map((n) => `<span data-star="${n}">★</span>`)
                  .join("")}
              </div>
              <button class="add-cart">Agregar al carrito</button>
            </div>
          </div>`
          )
          .join("")}
      </div>
      <button class="carousel-btn next">›</button>
    </div>
  `;

  const carousel = container.querySelector(".carousel");
  const btnPrev = container.querySelector(".prev");
  const btnNext = container.querySelector(".next");

  // --- Flechas normales ---
  btnPrev.addEventListener("click", () => {
    carousel.scrollBy({ left: -carousel.offsetWidth / 2, behavior: "smooth" });
  });

  btnNext.addEventListener("click", () => {
    carousel.scrollBy({ left: carousel.offsetWidth / 2, behavior: "smooth" });
  });

  // --- Valoraciones (estrellas) ---
  container.querySelectorAll(".stars span").forEach((starEl) => {
    const id = starEl.parentElement.dataset.id;
    const rating = parseInt(localStorage.getItem("rating_" + id) || "0");
    if (rating > 0) {
      starEl.parentElement.querySelectorAll("span").forEach((s) => {
        if (parseInt(s.dataset.star) <= rating) s.classList.add("active");
      });
    }
    starEl.addEventListener("click", (e) => {
      e.stopPropagation();
      const stars = parseInt(starEl.dataset.star);
      localStorage.setItem("rating_" + id, stars);
      starEl.parentElement.querySelectorAll("span").forEach((s) =>
        s.classList.remove("active")
      );
      for (let i = 0; i < stars; i++) {
        starEl.parentElement.querySelectorAll("span")[i].classList.add("active");
      }
    });
  });

  // --- Agregar al carrito ---
  container.querySelectorAll(".add-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = btn.closest(".product-card");
      const id = card.dataset.id;
      const prod = productos.find((p) => p.id === id);
      addToCart({ id, title: prod.title, price: prod.price, qty: 1 });
    });
  });

  // --- Doble clic para abrir producto ---
  container.querySelectorAll(".product-card").forEach((card) => {
    let clickCount = 0;
    card.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON" || e.target.closest(".stars")) return;
      clickCount++;
      if (clickCount === 2) {
        const url = card.dataset.link;
        window.open(url, "_blank");
        clickCount = 0;
      }
      setTimeout(() => (clickCount = 0), 300);
    });
  });

  // --- Deslizamiento táctil / mouse ---
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add("dragging");
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("dragging");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch
  carousel.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchend", () => (isDown = false));
  carousel.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.2;
    carousel.scrollLeft = scrollLeft - walk;
  });
}

// --- Inicializar ---
document.addEventListener("DOMContentLoaded", () => {
  renderCarrusel("Landing Page", secciones["Landing Page"], "landing-container");
  renderCarrusel("Multipágina", secciones["Multipágina"], "multi-container");
  renderCarrusel("Ecommerce-lite", secciones["Ecommerce-lite"], "ecommerce-container");
  renderCarrusel("Fondos interactivos", secciones["Fondos interactivos"], "fondos-container");
});

// --- Agregar al carrito (global) ---
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} agregado al carrito ✅`);
}
