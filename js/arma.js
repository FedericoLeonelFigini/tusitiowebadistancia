// --- LISTA DE PRODUCTOS (10 por categoría, editables manualmente) ---
const secciones = {
  "Landing Page": [
    { id: "landing-1", title: "Landing Page Profesional", price: 50000, img: "./img/landing1.jpg", desc: "Ideal para presentar tu marca", link: "./marco.html" },
    { id: "landing-2", title: "Landing Page Express", price: 55000, img: "./img/landing2.jpg", desc: "Entrega rápida en 24hs", link: "./productos_html/marco.html" },
    { id: "landing-3", title: "Landing Page Corporativa", price: 60000, img: "./img/landing3.jpg", desc: "Diseño formal y elegante", link: "./productos_html/marco.html" },
    { id: "landing-4", title: "Landing Page Creativa", price: 62000, img: "./img/landing4.jpg", desc: "Animaciones y efectos visuales", link: "./productos_html/marco.html" },
    { id: "landing-5", title: "Landing Page Minimalista", price: 58000, img: "./img/landing5.jpg", desc: "Diseño limpio y moderno", link: "./productos_html/marco.html" },
    { id: "landing-6", title: "Landing Page para Apps", price: 64000, img: "./img/landing6.jpg", desc: "Perfecta para mostrar tu app", link: "./productos_html/marco.html" },
    { id: "landing-7", title: "Landing Page de Eventos", price: 59000, img: "./img/landing7.jpg", desc: "Convierte visitantes en asistentes", link: "./productos_html/marco.html" },
    { id: "landing-8", title: "Landing Page Personal", price: 52000, img: "./img/landing8.jpg", desc: "Ideal para tu portfolio", link: "./productos_html/marco.html" },
    { id: "landing-9", title: "Landing Page Premium", price: 70000, img: "./img/landing9.jpg", desc: "Para marcas de alto nivel", link: "./productos_html/marco.html" },
    { id: "landing-10", title: "Landing Page Económica", price: 45000, img: "./img/landing10.jpg", desc: "Buena, bonita y barata", link: "./productos_html/marco.html" },
  ],

  "Multipágina": [
    { id: "multi-1", title: "Sitio Multipágina Profesional", price: 80000, img: "./img/multi1.jpg", desc: "Ideal para empresas con secciones", link: "./productos_html/marco.html" },
    { id: "multi-2", title: "Sitio Multipágina Corporativo", price: 85000, img: "./img/multi2.jpg", desc: "Diseño empresarial sólido", link: "./productos_html/marco.html" },
    { id: "multi-3", title: "Sitio Multipágina Artístico", price: 78000, img: "./img/multi3.jpg", desc: "Perfecto para artistas o galerías", link: "./productos_html/marco.html" },
    { id: "multi-4", title: "Sitio Multipágina Educativo", price: 83000, img: "./img/multi4.jpg", desc: "Ideal para instituciones o cursos", link: "./productos_html/marco.html" },
    { id: "multi-5", title: "Sitio Multipágina Agencia", price: 82000, img: "./img/multi5.jpg", desc: "Para agencias creativas", link: "./productos_html/marco.html" },
    { id: "multi-6", title: "Sitio Multipágina Hotelero", price: 89000, img: "./img/multi6.jpg", desc: "Ideal para hoteles y turismo", link: "./productos_html/marco.html" },
    { id: "multi-7", title: "Sitio Multipágina Personal", price: 76000, img: "./img/multi7.jpg", desc: "Para mostrar tu perfil profesional", link: "./productos_html/marco.html" },
    { id: "multi-8", title: "Sitio Multipágina Blog", price: 77000, img: "./img/multi8.jpg", desc: "Perfecto para publicaciones frecuentes", link: "./productos_html/marco.html" },
    { id: "multi-9", title: "Sitio Multipágina Tienda", price: 91000, img: "./img/multi9.jpg", desc: "Incluye carrito de productos", link: "./productos_html/marco.html" },
    { id: "multi-10", title: "Sitio Multipágina Minimalista", price: 75000, img: "./img/multi10.jpg", desc: "Simple y funcional", link: "./productos_html/marco.html" },
  ],

  "Ecommerce-lite": [
    { id: "ecom-1", title: "Ecommerce Lite Profesional", price: 95000, img: "./img/ecommerce1.jpg", desc: "Vende productos fácilmente", link: "./productos_html/marco.html" },
    { id: "ecom-2", title: "Ecommerce Moda", price: 98000, img: "./img/ecommerce2.jpg", desc: "Ideal para ropa o accesorios", link: "./productos_html/marco.html" },
    { id: "ecom-3", title: "Ecommerce Electrónica", price: 99000, img: "./img/ecommerce3.jpg", desc: "Perfecto para tecnología", link: "./productos_html/marco.html" },
    { id: "ecom-4", title: "Ecommerce Joyería", price: 97000, img: "./img/ecommerce4.jpg", desc: "Brillo y elegancia online", link: "./productos_html/marco.html" },
    { id: "ecom-5", title: "Ecommerce Belleza", price: 94000, img: "./img/ecommerce5.jpg", desc: "Ideal para cosmética", link: "./productos_html/marco.html" },
    { id: "ecom-6", title: "Ecommerce Fitness", price: 92000, img: "./img/ecommerce6.jpg", desc: "Vende suplementos y ropa deportiva", link: "./productos_html/marco.html" },
    { id: "ecom-7", title: "Ecommerce Alimentos", price: 93000, img: "./img/ecommerce7.jpg", desc: "Para productos naturales", link: "./productos_html/marco.html" },
    { id: "ecom-8", title: "Ecommerce Gamer", price: 97000, img: "./img/ecommerce8.jpg", desc: "Diseño oscuro y moderno", link: "./productos_html/marco.html" },
    { id: "ecom-9", title: "Ecommerce Mascotas", price: 89000, img: "./img/ecommerce9.jpg", desc: "Ideal para tiendas pet-friendly", link: "./productos_html/marco.html" },
    { id: "ecom-10", title: "Ecommerce General", price: 91000, img: "./img/ecommerce10.jpg", desc: "Todo tipo de productos", link: "./productos_html/marco.html" },
  ],

  "Fondos interactivos": [
    { id: "fondo-1", title: "Fondo Partículas", price: 40000, img: "./img/fondos1.jpg", desc: "Animación de partículas", link: "./productos_html/marco.html" },
    { id: "fondo-2", title: "Fondo Parallax", price: 42000, img: "./img/fondos2.jpg", desc: "Efecto de profundidad 3D", link: "./productos_html/marco.html" },
    { id: "fondo-3", title: "Fondo Neón", price: 43000, img: "./img/fondos3.jpg", desc: "Luces vibrantes y modernas", link: "./productos_html/marco.html" },
    { id: "fondo-4", title: "Fondo Espacial", price: 45000, img: "./img/fondos4.jpg", desc: "Ideal para proyectos futuristas", link: "./productos_html/marco.html" },
    { id: "fondo-5", title: "Fondo Acuático", price: 41000, img: "./img/fondos5.jpg", desc: "Simula movimiento de agua", link: "./productos_html/marco.html" },
    { id: "fondo-6", title: "Fondo Minimalista", price: 39000, img: "./img/fondos6.jpg", desc: "Animación sutil y elegante", link: "./productos_html/marco.html" },
    { id: "fondo-7", title: "Fondo de Fuego", price: 46000, img: "./img/fondos7.jpg", desc: "Efecto fuego animado", link: "./productos_html/marco.html" },
    { id: "fondo-8", title: "Fondo de Nubes", price: 43000, img: "./img/fondos8.jpg", desc: "Nubes en movimiento", link: "./productos_html/marco.html" },
    { id: "fondo-9", title: "Fondo Abstracto", price: 44000, img: "./img/fondos9.jpg", desc: "Formas y colores dinámicos", link: "./productos_html/marco.html" },
    { id: "fondo-10", title: "Fondo Tecnológico", price: 48000, img: "./img/fondos10.jpg", desc: "Ideal para startups digitales", link: "./productos_html/marco.html" },
  ],
};

// --- Renderiza cada carrusel ---
function renderCarrusel(nombre, productos, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = `
    <div class="section-header">
      <h2>${nombre}</h2>
      <a href="./vertodos.html">Ver todos</a>
    </div>
    <div class="carousel">
      <div class="carousel-track">
        ${productos.map(p => `
          <div class="product-card" data-id="${p.id}" data-link="${p.link}">
            <img src="${p.img}" alt="${p.title}">
            <div class="product-body">
              <div class="product-price">$ ${p.price.toLocaleString()}</div>
              <div class="product-desc">${p.desc}</div>
              <button class="add-cart">Agregar al carrito</button>
            </div>
          </div>
        `).join("")}
      </div>
      <button class="carousel-btn prev">‹</button>
      <button class="carousel-btn next">›</button>
    </div>
  `;

  const track = container.querySelector(".carousel-track");
  let index = 0;

  // Botones
  container.querySelector(".next").addEventListener("click", () => {
    index = Math.min(index + 1, productos.length - 1);
    track.style.transform = `translateX(${-index * 260}px)`;
  });
  container.querySelector(".prev").addEventListener("click", () => {
    index = Math.max(index - 1, 0);
    track.style.transform = `translateX(${-index * 260}px)`;
  });

  // Deslizamiento táctil o con mouse
  let startX = 0, isDown = false;

  track.addEventListener("mousedown", e => {
    isDown = true;
    startX = e.pageX;
  });
  track.addEventListener("mouseup", e => {
    if (!isDown) return;
    const diff = e.pageX - startX;
    if (diff < -50) container.querySelector(".next").click();
    if (diff > 50) container.querySelector(".prev").click();
    isDown = false;
  });
  track.addEventListener("touchstart", e => startX = e.touches[0].clientX);
  track.addEventListener("touchend", e => {
    const diff = e.changedTouches[0].clientX - startX;
    if (diff < -50) container.querySelector(".next").click();
    if (diff > 50) container.querySelector(".prev").click();
  });

  // Doble clic en producto → marco.html
  container.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("dblclick", () => {
      const link = card.dataset.link;
      window.location.href = link;
    });
  });

  // Agregar al carrito (si hay función)
  container.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const card = btn.closest(".product-card");
      const prod = productos.find(p => p.id === card.dataset.id);
      if (typeof addToCart === "function") {
        addToCart({ id: prod.id, title: prod.title, price: prod.price, qty: 1 });
      } else {
        alert(`Agregado al carrito: ${prod.title}`);
      }
    });
  });
}

// --- Render general ---
document.addEventListener("DOMContentLoaded", () => {
  renderCarrusel("Landing Page", secciones["Landing Page"], "landing-container");
  renderCarrusel("Multipágina", secciones["Multipágina"], "multi-container");
  renderCarrusel("Ecommerce-lite", secciones["Ecommerce-lite"], "ecommerce-container");
  renderCarrusel("Fondos interactivos", secciones["Fondos interactivos"], "fondos-container");
});
