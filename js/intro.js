// Textos aleatorios
const frases = [
  "Creamos sitios únicos para tu negocio",
  "Publicidad digital y soporte 24/7",
  "Soluciones web rápidas y seguras",
  "Diseño moderno adaptado a tus necesidades",
  "Tu presencia online, a un clic de distancia"
];

document.addEventListener("DOMContentLoaded", () => {
  const randomText = frases[Math.floor(Math.random() * frases.length)];
  document.querySelector(".random-text").textContent = randomText;

  // Redirigir automáticamente después de 8 segundos
  setTimeout(() => {
    window.location.href = "index.html";
  }, 8000);
});
