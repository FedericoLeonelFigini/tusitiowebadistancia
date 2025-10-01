// Lista de categorías con cantidades dinámicas
const categorias = [
  { nombre: "Landing Page", cantidad: 25 },
  { nombre: "Ecommerce", cantidad: 10 },
  { nombre: "Multipágina", cantidad: 15 },
  { nombre: "Apps", cantidad: 5 }
];

const productContainer = document.querySelector(".product-counts ul");

productContainer.innerHTML = categorias.map(cat =>
  `<li>${cat.nombre} +${cat.cantidad}</li>`
).join("");
