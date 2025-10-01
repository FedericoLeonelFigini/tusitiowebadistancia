// Collage de enlaces extravagantes
const enlaces = [
  { texto: "Sitio web personalizado", img: "./img/link1.jpg", url: "arma.html" },
  { texto: "Publicidad", img: "./img/link2.jpg", url: "#" },
  { texto: "Soporte y problemas", img: "./img/link3.jpg", url: "#" },
  { texto: "Consultas", img: "./img/link4.jpg", url: "#" }
];

const collage = document.querySelector(".collage");

collage.innerHTML = enlaces.map(e => `
  <a class="card-link" href="${e.url}" style="background-image:url('${e.img}')">
    <span>${e.texto}</span>
  </a>
`).join("");
