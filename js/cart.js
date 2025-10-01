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
