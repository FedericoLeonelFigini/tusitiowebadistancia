// Manejo de ticket y finalizar compra
const $list = document.getElementById('cart-list');
const $total = document.getElementById('cart-total');
const $vaciar = document.getElementById('vaciar');
const $descargar = document.getElementById('descargar');
const $finalizar = document.getElementById('finalizar');

function renderCart() {
  const items = getCart();
  $list.innerHTML = items.map(it => `
    <div class="item">
      <img src="${it.img || ''}" alt="">
      <div>
        <div class="title">${it.title || 'Producto'}</div>
        <div>$ ${it.price?.toFixed?.(2) || '0.00'}</div>
        <div class="qty">
          <button onclick="removeOne('${it.id}')">-</button>
          <b style="padding:0 8px">${it.qty || 1}</b>
          <button onclick="addToCart(${JSON.stringify({id: it.id, title: it.title, price: it.price, img: it.img, qty:1})})">+</button>
          <button style="margin-left:8px" onclick="removeItem('${it.id}')">Eliminar</button>
        </div>
      </div>
      <div class="price">$ ${(it.price * (it.qty || 1)).toFixed(2)}</div>
    </div>
  `).join('');
  $total.textContent = cartTotal().toFixed(2);
}

window.addEventListener('storage', (e) => { if (e.key === CART_KEY) renderCart(); });
$vaciar.addEventListener('click', () => { clearCart(); renderCart(); });

// Descargar ticket como PNG
$descargar.addEventListener('click', () => {
  const ticket = document.createElement('div');
  ticket.className = "ticket-box";
  ticket.innerHTML = `
    <h3>Tusitiowebadistancia</h3>
    <p>${new Date().toLocaleString()}</p>
    <hr>
    ${getCart().map(it => `<p>${it.title} x${it.qty} — $${(it.price*it.qty).toFixed(2)}</p>`).join("")}
    <hr>
    <p><b>Total: $${cartTotal().toFixed(2)}</b></p>
  `;
  document.body.appendChild(ticket);

  html2canvas(ticket).then(canvas => {
    const link = document.createElement('a');
    link.download = "ticket.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
    ticket.remove();

    // Habilitar botón finalizar compra
    $finalizar.classList.add('activo');
  });
});

// Redirigir a WhatsApp
$finalizar.addEventListener('click', () => {
  if (!$finalizar.classList.contains('activo')) return;
  const mensaje = encodeURIComponent("Adjunta el ticket que descargaste");
  window.location.href = `https://wa.me/541141999497?text=${mensaje}`;
});

// Render inicial
renderCart();
