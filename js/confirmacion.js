// confirmacion.js

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);

  const entrega = params.get("entrega");
  const recogida = params.get("recogida");
  const ubicacion = params.get("ubicacion");
  const producto = params.get("producto");

  // Insertar datos en la página
  if (producto) {
    document.querySelector(".confirmacion h1").textContent = `🎉 ¡Renta confirmada de ${producto}!`;
  }

  const detallesList = document.querySelector(".detalles ul");
  if (detallesList) {
    detallesList.innerHTML = `
      <li><strong>Producto:</strong> ${producto || "No especificado"}</li>
      <li><strong>Fecha de entrega:</strong> ${entrega || "No especificada"}</li>
      <li><strong>Fecha de recogida:</strong> ${recogida || "No especificada"}</li>
      <li><strong>Ubicación de entrega:</strong> ${ubicacion || "No especificada"}</li>
      <li><strong>Seguro incluido:</strong> $200</li>
    `;
  }
});
