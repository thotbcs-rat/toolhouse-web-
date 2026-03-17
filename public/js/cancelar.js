// cancelar.js

document.addEventListener("DOMContentLoaded", () => {
  // Función para cancelar renta y devolver stock
  function cancelarRenta(nombreProducto) {
    const stockKey = `stock_${nombreProducto}`;
    let stockActual = parseInt(localStorage.getItem(stockKey), 10);

    // Si el producto existe en localStorage
    if (!isNaN(stockActual)) {
      // Devolver una unidad al stock
      localStorage.setItem(stockKey, stockActual + 1);
      alert(`❌ Renta de ${nombreProducto} cancelada. Stock devuelto: ${stockActual + 1} unidades.`);
    } else {
      alert(`⚠️ No se encontró stock registrado para ${nombreProducto}.`);
    }
  }

  // Ejemplo: botón de cancelación en confirmacion.html
  const btnCancelar = document.getElementById("cancelar-renta");
  if (btnCancelar) {
    btnCancelar.addEventListener("click", () => {
      const producto = btnCancelar.getAttribute("data-producto");
      cancelarRenta(producto);
    });
  }
});
