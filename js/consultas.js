document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = "1141999497";
  const message = "Hola,quiero hacer una consulta.";
  
  const btn = document.querySelector(".cta");
  if (btn) {
    btn.addEventListener("click", () => {
      window.open(`https://wa.me/54${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  }
});
