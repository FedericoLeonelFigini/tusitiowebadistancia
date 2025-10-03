document.addEventListener("DOMContentLoaded", () => {
  const whatsapp = "1141999497";

  document.querySelectorAll(".cta").forEach(btn => {
    btn.addEventListener("click", () => {
      let message = "Hola, quiero más info sobre tus servicios.";

      if (btn.closest(".ecommerce")) {
        message = "Hola, quiero mi E-Commerce Lite con productos a USD 2,50 c/u.";
      }
      if (btn.closest(".multipage")) {
        message = "Hola, quiero un Sitio Multipágina desde USD 150.";
      }
      if (btn.closest(".landing")) {
        message = "Hola, quiero una Landing Page desde USD 50.";
      }
      if (btn.closest(".consultas")) {
        message = "Hola, quiero aprovechar la consulta gratis.";
      }

      window.open(`https://wa.me/54${whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
    });
  });
});
