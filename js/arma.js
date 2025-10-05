// --- LISTA DE PRODUCTOS (10 por categoría, editables manualmente) ---
const secciones = {
  "Landing Page": [
    { id: "landing-1", title: "Landing Page Profesional", price: 35000, img: "./img/landing1.jpg", desc: "Diseño moderno, ideal para captar clientes.", link: "./productos_html/marco.html" },
    { id: "landing-2", title: "Landing Minimalista", price: 30000, img: "./img/landing2.jpg", desc: "Estilo limpio con enfoque visual simple.", link: "./productos_html/marco.html" },
    { id: "landing-3", title: "Landing Promocional", price: 32000, img: "./img/landing3.jpg", desc: "Perfecta para campañas o lanzamientos.", link: "./productos_html/marco.html" },
    { id: "landing-4", title: "Landing con Video", price: 37000, img: "./img/landing4.jpg", desc: "Incluye video de fondo o banner animado.", link: "./productos_html/marco.html" },
    { id: "landing-5", title: "Landing One Page", price: 33000, img: "./img/landing5.jpg", desc: "Todo en una sola página optimizada.", link: "./productos_html/marco.html" },
    { id: "landing-6", title: "Landing Personal", price: 28000, img: "./img/landing6.jpg", desc: "Ideal para portfolio o presentación profesional.", link: "./productos_html/marco.html" },
    { id: "landing-7", title: "Landing de Agencia", price: 40000, img: "./img/landing7.jpg", desc: "Diseño para empresas o agencias creativas.", link: "./productos_html/marco.html" },
    { id: "landing-8", title: "Landing Fotográfica", price: 36000, img: "./img/landing8.jpg", desc: "Ideal para mostrar imágenes o proyectos.", link: "./productos_html/marco.html" },
    { id: "landing-9", title: "Landing de Evento", price: 39000, img: "./img/landing9.jpg", desc: "Para congresos, charlas o presentaciones.", link: "./productos_html/marco.html" },
    { id: "landing-10", title: "Landing Corporativa", price: 41000, img: "./img/landing10.jpg", desc: "Diseño serio y profesional.", link: "./productos_html/marco.html" },
  ],

  "Multipágina": [
    { id: "multi-1", title: "Sitio Multipágina Básico", price: 55000, img: "./img/multi1.jpg", desc: "Inicio, servicios y contacto.", link: "./productos_html/marco.html" },
    { id: "multi-2", title: "Sitio Corporativo", price: 70000, img: "./img/multi2.jpg", desc: "Diseño elegante para empresas.", link: "./productos_html/marco.html" },
    { id: "multi-3", title: "Sitio Institucional", price: 65000, img: "./img/multi3.jpg", desc: "Con información institucional y equipo.", link: "./productos_html/marco.html" },
    { id: "multi-4", title: "Sitio Educativo", price: 68000, img: "./img/multi4.jpg", desc: "Perfecto para escuelas o cursos online.", link: "./productos_html/marco.html" },
    { id: "multi-5", title: "Sitio Agencia", price: 72000, img: "./img/multi5.jpg", desc: "Ideal para agencias creativas o de marketing.", link: "./productos_html/marco.html" },
    { id: "multi-6", title: "Sitio Personal", price: 60000, img: "./img/multi6.jpg", desc: "Página de presentación profesional.", link: "./productos_html/marco.html" },
    { id: "multi-7", title: "Sitio Portafolio", price: 64000, img: "./img/multi7.jpg", desc: "Presentación de trabajos y servicios.", link: "./productos_html/marco.html" },
    { id: "multi-8", title: "Sitio Agencia Premium", price: 78000, img: "./img/multi8.jpg", desc: "Diseño avanzado con animaciones.", link: "./productos_html/marco.html" },
    { id: "multi-9", title: "Sitio Profesional", price: 73000, img: "./img/multi9.jpg", desc: "Estructura optimizada para rendimiento.", link: "./productos_html/marco.html" },
    { id: "multi-10", title: "Sitio Empresarial", price: 75000, img: "./img/multi10.jpg", desc: "Solución completa para negocios.", link: "./productos_html/marco.html" },
  ],

  "Ecommerce-lite": [
    { id: "ecommerce-1", title: "Tienda Lite", price: 89000, img: "./img/ecommerce1.jpg", desc: "Tienda rápida con carrito y pagos por WhatsApp.", link: "./productos_html/marco.html" },
    { id: "ecommerce-2", title: "Tienda Moderna", price: 95000, img: "./img/ecommerce2.jpg", desc: "Catálogo visual con filtros dinámicos.", link: "./productos_html/marco.html" },
    { id: "ecommerce-3", title: "Tienda Express", price: 87000, img: "./img/ecommerce3.jpg", desc: "Diseño simple, velocidad extrema.", link: "./productos_html/marco.html" },
    { id: "ecommerce-4", title: "Tienda Personalizada", price: 99000, img: "./img/ecommerce4.jpg", desc: "Diseño a medida con branding único.", link: "./productos_html/marco.html" },
    { id: "ecommerce-5", title: "Tienda Ropa", price: 93000, img: "./img/ecommerce5.jpg", desc: "Ideal para marcas de indumentaria.", link: "./productos_html/marco.html" },
    { id: "ecommerce-6", title: "Tienda Electrónica", price: 97000, img: "./img/ecommerce6.jpg", desc: "Optimizada para productos tecnológicos.", link: "./productos_html/marco.html" },
    { id: "ecommerce-7", title: "Tienda Pequeños Negocios", price: 91000, img: "./img/ecommerce7.jpg", desc: "Solución sencilla y escalable.", link: "./productos_html/marco.html" },
    { id: "ecommerce-8", title: "Tienda Catálogo", price: 90000, img: "./img/ecommerce8.jpg", desc: "Presenta tus productos sin complicaciones.", link: "./productos_html/marco.html" },
    { id: "ecommerce-9", title: "Tienda Creativa", price: 94000, img: "./img/ecommerce9.jpg", desc: "Diseño colorido y animado.", link: "./productos_html/marco.html" },
    { id: "ecommerce-10", title: "Tienda Completa", price: 100000, img: "./img/ecommerce10.jpg", desc: "Incluye carrito, login y gestión básica.", link: "./productos_html/marco.html" },
  ],

  "Fondos interactivos": [
    { id: "fondos-1", title: "Fondo Partículas", price: 12000, img: "./img/fondos1.jpg", desc: "Animación con partículas dinámicas.", link: "./productos_html/marco.html" },
    { id: "fondos-2", title: "Fondo Neón", price: 14000, img: "./img/fondos2.jpg", desc: "Luces reactivas con tonos eléctricos.", link: "./productos_html/marco.html" },
    { id: "fondos-3", title: "Fondo Espacial", price: 16000, img: "./img/fondos3.jpg", desc: "Efecto galaxia y movimiento orbital.", link: "./productos_html/marco.html" },
    { id: "fondos-4", title: "Fondo Abstracto", price: 15000, img: "./img/fondos4.jpg", desc: "Transiciones suaves y elegantes.", link: "./productos_html/marco.html" },
    { id: "fondos-5", title: "Fondo de Ondas", price: 13000, img: "./img/fondos5.jpg", desc: "Efecto fluido con movimiento armónico.", link: "./productos_html/marco.html" },
    { id: "fondos-6", title: "Fondo de Código", price: 14000, img: "./img/fondos6.jpg", desc: "Animación tipo ‘matrix’ digital.", link: "./productos_html/marco.html" },
    { id: "fondos-7", title: "Fondo Físico", price: 15000, img: "./img/fondos7.jpg", desc: "Interacción con gravedad simulada.", link: "./productos_html/marco.html" },
    { id: "fondos-8", title: "Fondo Geométrico", price: 14500, img: "./img/fondos8.jpg", desc: "Formas geométricas en rotación 3D.", link: "./productos_html/marco.html" },
    { id: "fondos-9", title: "Fondo Fluido", price: 15500, img: "./img/fondos9.jpg", desc: "Movimiento líquido suave.", link: "./productos_html/marco.html" },
    { id: "fondos-10", title: "Fondo Celestial", price: 16500, img: "./img/fondos10.jpg", desc: "Simulación de cielo estrellado animado.", link: "./productos_html/marco.html" },
  ]
};

// --- Resto del código (renderizado, scroll, ratings, carrito, etc.) ---
function renderCarrusel(nombre, productos, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <div class="section-header">
      <h2>${nombre}</h2>
      <a href="#">Ver todos</a>
    </div>
    <div class="carousel-container">
      <button class="carousel-btn prev">‹</button>
      <div class="carousel">
        ${productos.map(p => `
          <div class="product-card" data-id="${p.id}" data-link="${p.link}">
            <img src="${p.img}" alt="${p.title}">
            <div class="product-body">
              <h3>${p.title}</h3>
              <div class="product-price">$ ${p.price.toLocaleString()}</div>
              <div class="product-desc">${p.desc}</div>
              <div class="stars" data-id="${p.id}">
                ${[1,2,3,4,5].map(n => `<span data-star="${n}">★</span>`).join("")}
              </div>
              <button class="add-cart">Agregar al carrito</button>
            </div>
          </div>`).join("")}
      </div>
      <button class="carousel-btn next">›</button>
    </div>
  `;

  const carousel = container.querySelector(".carousel");
  const btnPrev = container.querySelector(".prev");
  const btnNext = container.querySelector(".next");

  btnPrev.addEventListener("click", () => carousel.scrollBy({ left: -carousel.offsetWidth * 0.6, behavior: "smooth" }));
  btnNext.addEventListener("click", () => carousel.scrollBy({ left: carousel.offsetWidth * 0.6, behavior: "smooth" }));

  container.querySelectorAll(".stars span").forEach(starEl => {
    const id = starEl.parentElement.dataset.id;
    const rating = parseInt(localStorage.getItem("rating_" + id) || "0");
    if (rating > 0) starEl.parentElement.querySelectorAll("span").forEach(s => {
      if (parseInt(s.dataset.star) <= rating) s.classList.add("active");
    });
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

  container.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const card = btn.closest(".product-card");
      const id = card.dataset.id;
      const prod = productos.find(p => p.id === id);
      addToCart({ id, title: prod.title, price: prod.price, qty: 1 });
    });
  });

  container.querySelectorAll(".product-card").forEach(card => {
    let clicks = 0;
    card.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON" || e.target.closest(".stars")) return;
      clicks++;
      if (clicks === 2) {
        window.open(card.dataset.link, "_blank");
        clicks = 0;
      }
      setTimeout(() => (clicks = 0), 250);
    });
  });

  // Scroll táctil / mouse
  let isDown = false, startX, scrollLeft;
  carousel.addEventListener("mousedown", e => {
    isDown = true; startX = e.pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("mouseleave", () => isDown = false);
  carousel.addEventListener("mouseup", () => isDown = false);
  carousel.addEventListener("mousemove", e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
  carousel.addEventListener("touchstart", e => {
    isDown = true; startX = e.touches[0].pageX - carousel.offsetLeft; scrollLeft = carousel.scrollLeft;
  });
  carousel.addEventListener("touchend", () => isDown = false);
  carousel.addEventListener("touchmove", e => {
    if (!isDown) return;
    const x = e.touches[0].pageX - carousel.offsetLeft;
    carousel.scrollLeft = scrollLeft - (x - startX) * 1.5;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCarrusel("Landing Page", secciones["Landing Page"], "landing-container");
  renderCarrusel("Multipágina", secciones["Multipágina"], "multi-container");
  renderCarrusel("Ecommerce-lite", secciones["Ecommerce-lite"], "ecommerce-container");
  renderCarrusel("Fondos interactivos", secciones["Fondos interactivos"], "fondos-container");
});

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.title} agregado al carrito ✅`);
}
