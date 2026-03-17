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

      // 🔽 Reducir stock disponible
      const productoNombre = document.querySelector(".producto-detalle h1").textContent;
      let stock = localStorage.getItem(`stock_${productoNombre}`);

      if (stock) {
        stock = parseInt(stock, 10);
        if (stock > 0) {
          localStorage.setItem(`stock_${productoNombre}`, stock - 1);
        } else {
          alert("Lo sentimos, este producto ya no tiene stock disponible.");
          return;
        }
      } else {
        // Si no existe aún, inicializamos con un valor genérico
        localStorage.setItem(`stock_${productoNombre}`, 4); // ejemplo inicial
      }

      // 🔀 Redirigir a confirmacion.html con datos
      const params = new URLSearchParams({
        entrega: fechaEntrega.toLocaleDateString(),
        recogida: fechaRecogida.toLocaleDateString(),
        ubicacion: ubicacion,
        producto: productoNombre
      });

      window.location.href = `confirmacion.html?${params.toString()}`;
    });
  }
});
