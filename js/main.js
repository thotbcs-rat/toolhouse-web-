// main.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-renta form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const fechaEntrega = new Date(form["fecha-entrega"].value);
      const fechaRecogida = new Date(form["fecha-recogida"].value);
      const ubicacion = form["ubicacion"].value.trim();

      // Validaciones
      const hoy = new Date();
      const diferenciaHoras = (fechaEntrega - hoy) / (1000 * 60 * 60);

      if (diferenciaHoras < 24) {
        alert("La renta debe solicitarse con al menos 24 horas de anticipación.");
        return;
      }

      if (fechaRecogida <= fechaEntrega) {
        alert("La fecha de recogida debe ser posterior a la fecha de entrega.");
        return;
      }

      if (!ubicacion) {
        alert("Por favor ingresa la ubicación de entrega.");
        return;
      }

      // Simulación de envío
      alert(`✅ Renta confirmada:
      - Entrega: ${fechaEntrega.toLocaleDateString()}
      - Recogida: ${fechaRecogida.toLocaleDateString()}
      - Ubicación: ${ubicacion}
      
      Recibirás tu herramienta en la ruta programada.`);
      
      form.reset();
    });
  }
});
