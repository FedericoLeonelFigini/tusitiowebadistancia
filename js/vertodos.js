document.addEventListener("DOMContentLoaded", () => {
  const productsGrid = document.getElementById("products-grid");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // 🔹 Productos editables (20)
  const productos = [
    // LANDING PAGE (5)
    { id: "landing1", category: "landing", title: "Landing Page 1", price: 25000, img: "./img/landing1.jpg", desc: "Sitio profesional para tu negocio.", link: "https://tusitiowebadistancia.com" },
    { id: "landing2", category: "landing", title: "Landing Page 2", price: 27000, img: "./img/landing2.jpg", desc: "Diseño moderno y responsivo.", link: "https://tusitiowebadistancia.com" },
    { id: "landing3", category: "landing", title: "Landing Page 3", price: 30000, img: "./img/landing3.jpg", desc: "Ideal para campañas publicitarias.", link: "https://tusitiowebadistancia.com" },
    { id: "landing4", category: "landing", title: "Landing Page 4", price: 32000, img: "./img/landing4.jpg", desc: "Optimizada para SEO y velocidad.", link: "https://tusitiowebadistancia.com" },
    { id: "landing5", category: "landing", title: "Landing Page 5", price: 35000, img: "./img/landing5.jpg", desc: "Diseño limpio y atractivo.", link: "https://tusitiowebadistancia.com" },

    // MULTIPÁGINA (5)
    { id: "multi1", category: "multi", title: "Multipágina 1", price: 60000, img: "./img/multi1.jpg", desc: "Estructura completa para empresas.", link: "https://tusitiowebadistancia.com" },
    { id: "multi2", category: "multi", title: "Multipágina 2", price: 62000, img: "./img/multi2.jpg", desc: "Incluye secciones personalizadas.", link: "https://tusitiowebadistancia.com" },
    { id: "multi3", category: "multi", title: "Multipágina 3", price: 64000, img: "./img/multi3.jpg", desc: "Diseño flexible y escalable.", link: "https://tusitiowebadistancia.com" },
    { id: "multi4", category: "multi", title: "Multipágina 4", price: 68000, img: "./img/multi4.jpg", desc: "Ideal para agencias y portfolios.", link: "https://tusitiowebadistancia.com" },
    { id: "multi5", category: "multi", title: "Multipágina 5", price: 70000, img: "./img/multi5.jpg", desc: "Incluye formulario de contacto.", link: "https://tusitiowebadistancia.com" },

    // E-COMMERCE LITE (5)
    { id: "ecommerce1", category: "ecommerce", title: "E-commerce Lite 1", price: 95000, img: "./img/ecommerce1.jpg", desc: "Tienda simple con carrito integrado.", link: "https://tusitiowebadistancia.com" },
    { id: "ecommerce2", category: "ecommerce", title: "E-commerce Lite 2", price: 98000, img: "./img/ecommerce2.jpg", desc: "Ideal para negocios pequeños.", link: "https://tusitiowebadistancia.com" },
    { id: "ecommerce3", category: "ecommerce", title: "E-commerce Lite 3", price: 100000, img: "./img/ecommerce3.jpg", desc: "Pagos simples y carga rápida.", link: "https://tusitiowebadistancia.com" },
    { id: "ecommerce4", category: "ecommerce", title: "E-commerce Lite 4", price: 110000, img: "./img/ecommerce4.jpg", desc: "Interfaz moderna y segura.", link: "https://tusitiowebadistancia.com" },
    { id: "ecommerce5", category: "ecommerce", title: "E-commerce Lite 5", price: 120000, img: "./img/ecommerce5.jpg", desc: "Compatible con WhatsApp y redes.", link: "https://tusitiowebadistancia.com" },

    // FONDOS INTERACTIVOS (5)
    { id: "fondos1", category: "fondos", title: "Fondo Interactivo 1", price: 15000, img: "./img/fondos1.jpg", desc: "Fondo animado para tu web.", link: "https://tusitiowebadistancia.com" },
    { id: "fondos2", category: "fondos", title: "Fondo Interactivo 2", price: 17000, img: "./img/fondos2.jpg", desc: "Efectos dinámicos y personalizados.", link: "https://tusitiowebadistancia.com" },
    { id: "fondos3", category: "fondos", title: "Fondo Interactivo 3", price: 18000, img: "./img/fondos3.jpg", desc: "Diseño único para destacar.", link: "https://tusitiowebadistancia.com" },
    { id: "fondos4", category: "fondos", title: "Fondo Interactivo 4", price: 20000, img: "./img/fondos4.jpg", desc: "Compatible con todos los navegadores.", link: "https://tusitiowebadistancia.com" },
    { id: "fondos5", category: "fondos", title: "Fondo Interactivo 5", price: 22000, img: "./img/fondos5.jpg", desc: "Ideal para landing pages creativas.", link: "https://tusitiowebadistancia.com" },
  ];

  // 🔹 Renderizar productos
  function renderProducts(products) {
    productsGrid.innerHTML = products.map(p => `
      <div class="product-card" data-id="${p.id}">
        <img src="${p.img}" alt="${p.title}">
        <div class="product-body">
          <h3>${p.title}</h3>
          <p class="product-desc">${p.desc}</p>
          <div class="product-price">$${p.price.toLocaleString()}</div>
          <button class="add-cart">Agregar al carrito</button>
        </div>
      </div>
    `).join("");

    // 🛒 Evento agregar al carrito
    document.querySelectorAll(".add-cart").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const card = btn.closest(".product-card");
        const prod = productos.find(p => p.id === card.dataset.id);
        addToCart({ id: prod.id, title: prod.title, price: prod.price, qty: 1 });
        alert(`${prod.title} agregado al carrito ✅`);
      });
    });

    // Doble clic para abrir link externo
    document.querySelectorAll(".product-card").forEach(card => {
      let clickCount = 0;
      card.addEventListener("click", () => {
        clickCount++;
        if (clickCount === 2) {
          const prod = productos.find(p => p.id === card.dataset.id);
          window.open(prod.link, "_blank");
          clickCount = 0;
        }
        setTimeout(() => (clickCount = 0), 250);
      });
    });
  }

  renderProducts(productos);

  // 🔹 Filtros
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.dataset.category;
      renderProducts(cat === "all" ? productos : productos.filter(p => p.category === cat));
    });
  });
});
