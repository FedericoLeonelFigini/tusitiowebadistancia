document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const reviewsContainer = document.querySelector(".reviews");

  // Cargar reseñas previas
  const saved = JSON.parse(localStorage.getItem("reseñas")) || [];
  saved.forEach(addReviewToDOM);

  // Guardar nueva reseña
  form.addEventListener("submit", e => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const mensaje = form.mensaje.value.trim();

    if (!nombre || !mensaje) return alert("Completá todos los campos");

    const nueva = { nombre, mensaje, fecha: new Date().toLocaleDateString() };
    saved.push(nueva);
    localStorage.setItem("reseñas", JSON.stringify(saved));

    addReviewToDOM(nueva);
    form.reset();
  });

  // Función para renderizar
  function addReviewToDOM({ nombre, mensaje, fecha }) {
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `
      <strong>${nombre}</strong> <small>(${fecha})</small>
      <p>${mensaje}</p>
    `;
    reviewsContainer.prepend(div);
  }
});
