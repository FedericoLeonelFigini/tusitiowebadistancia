// Clave única para todo el sitio
const CART_KEY = 'twad_cart_items_v1';

// Devuelve array de ítems [{id,title,price,img,qty}]
function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items));
  // Dispara evento para que el badge de la barra se actualice (otras pestañas escuchan 'storage')
  try {
    window.dispatchEvent(new StorageEvent('storage', { key: CART_KEY, newValue: JSON.stringify(items) }));
  } catch { /* algunos navegadores no permiten instanciar StorageEvent, no es crítico */ }
}

// API pública para agregar al carrito (llámala desde cualquier página)
function addToCart(item) {
  if (!item || !item.id) return;
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === item.id);
  if (idx >= 0) {
    cart[idx].qty = (cart[idx].qty || 1) + (item.qty || 1);
  } else {
    cart.push({ id: item.id, title: item.title || 'Producto', price: +item.price || 0, img: item.img || '', qty: item.qty || 1 });
  }
  saveCart(cart);
  toast('Añadido al carrito');
}

// Quitar 1 unidad
function removeOne(id) {
  const cart = getCart().map(i => ({...i}));
  const idx = cart.findIndex(i => i.id === id);
  if (idx >= 0) {
    cart[idx].qty = (cart[idx].qty || 1) - 1;
    if (cart[idx].qty <= 0) cart.splice(idx, 1);
    saveCart(cart);
  }
}

// Eliminar ítem por completo
function removeItem(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
}

// Vaciar todo
function clearCart() {
  saveCart([]);
}

// Total
function cartTotal() {
  return getCart().reduce((s, i) => s + (i.price * (i.qty || 1)), 0);
}

// Mini toast simple
function toast(msg = '') {
  const t = document.createElement('div');
  t.textContent = msg;
  Object.assign(t.style, {
    position: 'fixed', left: '50%', bottom: '90px', transform: 'translateX(-50%)',
    background: '#000', color: '#fff', border: '2px solid #000', padding: '8px 12px',
    borderRadius: '999px', zIndex: 10000, fontSize: '13px'
  });
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 1200);
}

// Exponer en window para facilitar uso
window.addToCart = addToCart;
window.getCart = getCart;
window.removeOne = removeOne;
window.removeItem = removeItem;
window.clearCart = clearCart;
window.cartTotal = cartTotal;

// --- Cargar carrito desde localStorage ---
document.addEventListener("DOMContentLoaded", () => {
  renderCart();
  document.getElementById("btn-descargar")?.addEventListener("click", generarTicket);
  document.getElementById("btn-finalizar")?.addEventListener("click", finalizarCompra);
});

// --- Renderizar productos en el carrito ---
function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const contenedor = document.getElementById("cart-items");
  const totalSpan = document.getElementById("cart-total");

  if (!contenedor) return;

  if (cart.length === 0) {
    contenedor.innerHTML = `<p class="cart-empty">🛒 Tu carrito está vacío.</p>`;
    totalSpan.textContent = "$0";
    return;
  }

  contenedor.innerHTML = cart.map(p => `
    <div class="cart-item">
      <img src="${p.img || './img/default.jpg'}" alt="${p.title}">
      <div class="cart-info">
        <h4>${p.title}</h4>
        <p>$${p.price.toLocaleString()}</p>
        <p>Cantidad: ${p.qty || 1}</p>
      </div>
      <button class="remove-btn" data-id="${p.id}">✖</button>
    </div>
  `).join("");

  const total = cart.reduce((sum, p) => sum + (p.price * (p.qty || 1)), 0);
  totalSpan.textContent = `$${total.toLocaleString()}`;

  contenedor.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      eliminarDelCarrito(btn.dataset.id);
    });
  });
}

// --- Eliminar producto ---
function eliminarDelCarrito(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart = cart.filter(p => p.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartBadge();
}

// --- Generar ticket (imagen tipo recibo) ---
function generarTicket() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) return alert("Tu carrito está vacío.");

  const total = cart.reduce((sum, p) => sum + (p.price * (p.qty || 1)), 0);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = 400;
  canvas.height = 200 + cart.length * 60;
  ctx.fillStyle = "#f8f8f8";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#000";
  ctx.font = "18px monospace";
  ctx.fillText("🧾 TuSitioWebADistancia.com", 20, 40);
  ctx.font = "16px monospace";
  ctx.fillText("Ticket de compra", 20, 70);

  let y = 110;
  cart.forEach(p => {
    ctx.fillText(`${p.title} - $${p.price.toLocaleString()}`, 20, y);
    y += 30;
  });

  ctx.font = "18px bold monospace";
  ctx.fillText(`TOTAL: $${total.toLocaleString()}`, 20, y + 20);

  // Descargar imagen
  const link = document.createElement("a");
  link.download = "ticket.png";
  link.href = canvas.toDataURL("image/png");
  link.click();

  localStorage.setItem("ticketDescargado", "true");
  document.getElementById("btn-finalizar").disabled = false;
}

// --- Finalizar compra ---
function finalizarCompra() {
  const ticketDescargado = localStorage.getItem("ticketDescargado");
  if (ticketDescargado !== "true") {
    alert("Debes descargar el ticket antes de finalizar la compra.");
    return;
  }

  window.open(
    "https://wa.me/541141999497?text=Hola,%20ahora%20mismo%20le%20envío%20el%20ticket%20guardado%20en%20galería/descargas",
    "_blank"
  );

  // Vaciar carrito tras finalizar
  localStorage.removeItem("cart");
  localStorage.removeItem("ticketDescargado");
  renderCart();
  updateCartBadge();
}

// --- Actualizar contador global del carrito ---
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = cart.reduce((sum, p) => sum + (p.qty || 1), 0);
  badge.textContent = total;
  badge.style.display = total > 0 ? "inline-block" : "none";
}

