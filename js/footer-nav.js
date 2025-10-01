(function () {
  const nav = document.createElement('nav');
  nav.id = 'footer-nav';
  nav.setAttribute('role', 'navigation');
  nav.innerHTML = `
    <div class="nav-wrap">
      <a href="./index.html" aria-label="Home" data-nav="home">
        ${iconHome()}<span>Home</span>
      </a>
      <a href="./arma.html" aria-label="Arma tu sitio" data-nav="arma">
        ${iconCode()}<span>Arma tu sitio</span>
      </a>
      <a href="./paquetes.html" aria-label="Paquetes mayoristas" data-nav="paquetes">
        ${iconBox()}<span>Paquetes</span>
      </a>
      <a href="./carrito.html" aria-label="Carrito" data-nav="carrito" style="position:relative">
        ${iconCart()}<span>Carrito</span>
        <b class="badge" id="cart-badge" style="display:none">0</b>
      </a>
      <a href="./mas.html" aria-label="Más" data-nav="mas">
        ${iconPlus()}<span>Más</span>
      </a>
    </div>
  `;
  document.body.appendChild(nav);

  // Sincroniza el badge del carrito al cargar y cuando cambie el storage
  updateCartBadge();

  window.addEventListener('storage', (e) => {
    if (e.key === CART_KEY) updateCartBadge();
  });

  // Marcar activo (opcional: según URL)
  const current = [...document.querySelectorAll('#footer-nav a')].find(a =>
    location.pathname.endsWith(a.getAttribute('href').replace('./', ''))
  );
  if (current) current.style.background = '#eee';

  // ---- helpers ----
  function updateCartBadge() {
    try {
      const items = getCart();
      const count = items.reduce((n, it) => n + (it.qty || 1), 0);
      const badge = document.getElementById('cart-badge');
      if (!badge) return;
      if (count > 0) {
        badge.textContent = String(count);
        badge.style.display = 'inline-block';
      } else {
        badge.style.display = 'none';
      }
    } catch { /* noop */ }
  }

   // Iconos SVG
  function iconHome() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M12 3 2 12h3v9h6v-6h2v6h6v-9h3L12 3z"/></svg>`;
  }
  function iconCode() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M8.5 16.5 4 12l4.5-4.5 1.4 1.4L6.8 12l3.1 3.1-1.4 1.4zM15.5 7.5 20 12l-4.5 4.5-1.4-1.4 3.1-3.1-3.1-3.1 1.4-1.4zM14.1 4l-4.2 16h-2l4.2-16h2z"/></svg>`;
  }
  function iconBox() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M3 7l9-4 9 4v10l-9 4-9-4V7zm9 2.2L6.5 6.6 12 4.4l5.5 2.2L12 9.2zM5 8.5l6 2.4v7.1L5 15.6V8.5zm14 0v7.1l-6 2.4v-7.1l6-2.4z"/></svg>`;
  }
  function iconCart() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 18zM6 6h14l-1.5 7.5H8.3L7.6 17H20v2H6.6l-1.9-9.5H4V7h1l.2 1H6zm2.2 2 1 5h8.7L18.6 8H8.2z"/></svg>`;
  }
  function iconPlus() {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M19 13H13v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>`;
  }
})();
