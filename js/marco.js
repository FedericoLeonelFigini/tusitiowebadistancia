// --- marco.js ---
// Usa la API pública del carrito global (definida en cart.js)

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addCartBtn");
  const toggleBtn = document.getElementById("toggleFeatures");
  const panel = document.getElementById("featuresPanel");
  const productVideo = document.getElementById("productVideo");

  // 🛒 Agregar producto al carrito global
  if (addBtn) {
    addBtn.addEventListener("click", () => {
      const product = {
        id: "producto-lite",
        title: document.querySelector(".product-title")?.textContent || "E-Commerce Lite",
        price: 89999,
        img: "../imagenes/ecommerce-lite.jpg",
        qty: 1
      };

      // Usa la función global addToCart() de cart.js
      if (typeof window.addToCart === "function") {
        window.addToCart(product);
      } else {
        // En caso de que cart.js aún no esté cargado
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
      }

      // Efecto visual corto para confirmar agregado
      addBtn.textContent = "✅ Agregado";
      addBtn.style.background = "#4CAF50";
      setTimeout(() => {
        addBtn.textContent = "Agregar al carrito";
        addBtn.style.background = "#00bfff";
      }, 1000);
    });
  }

  // ⚙️ Mostrar/Ocultar características
  if (toggleBtn && panel) {
    toggleBtn.addEventListener("click", () => {
      panel.classList.toggle("active");
      toggleBtn.textContent = panel.classList.contains("active")
        ? "Ocultar características ▲"
        : "Ver características ▾";
    });
  }

  // 🎬 Reproducir video automáticamente (con sonido)
  if (productVideo) {
    productVideo.volume = 1.0;
    productVideo.play().catch(() => {
      console.warn("El navegador bloqueó la reproducción automática con sonido.");
    });
  }
});
