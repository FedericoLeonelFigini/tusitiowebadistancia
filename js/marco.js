document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("addCartBtn");
  const toggleBtn = document.getElementById("toggleFeatures");
  const panel = document.getElementById("featuresPanel");
  const productVideo = document.getElementById("productVideo");

  // Estado inicial del panel (cerrado)
  panel.style.maxHeight = "0px";
  panel.setAttribute("aria-hidden", "true");
  toggleBtn.setAttribute("aria-expanded", "false");

  // 🛒 Agregar al carrito
  addBtn.addEventListener("click", () => {
    const product = {
      id: "producto-lite",
      title: document.querySelector(".product-title").textContent,
      price: 89999,
      qty: 1
    };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Producto agregado al carrito ✅");
  });

  // ⚙️ Mostrar/Ocultar características (con altura real)
  toggleBtn.addEventListener("click", () => {
    const isOpen = panel.getAttribute("aria-hidden") === "false";
    if (isOpen) {
      // Cerrar
      panel.style.maxHeight = "0px";
      panel.classList.remove("open");
      panel.setAttribute("aria-hidden", "true");
      toggleBtn.setAttribute("aria-expanded", "false");
      toggleBtn.textContent = "Ver características ▾";
    } else {
      // Abrir con la altura del contenido
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.classList.add("open");
      panel.setAttribute("aria-hidden", "false");
      toggleBtn.setAttribute("aria-expanded", "true");
      toggleBtn.textContent = "Ocultar características ▲";
    }
  });

  // Recalcular altura si está abierto y cambia el tamaño de pantalla
  window.addEventListener("resize", () => {
    if (panel.getAttribute("aria-hidden") === "false") {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

  // 🎬 Reproducir video con sonido automáticamente (si el navegador lo permite)
  if (productVideo) {
    productVideo.volume = 1.0;
    productVideo.play().catch(() => {
      // Algunos navegadores bloquean autoplay con sonido
      console.warn("Autoplay con sonido bloqueado por el navegador.");
    });
  }
});
