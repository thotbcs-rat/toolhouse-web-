// catalogo.js

document.addEventListener("DOMContentLoaded", () => {
  const productos = document.querySelectorAll(".producto");

  productos.forEach((producto) => {
    const nombre = producto.querySelector("h3").textContent;
    const stockKey = `stock_${nombre}`;

    // Inicializar stock si no existe
    if (!localStorage.getItem(stockKey)) {
      localStorage.setItem(stockKey, 5); // valor inicial genérico
    }

    // Mostrar stock actual
    const stock = localStorage.getItem(stockKey);
    let stockElement = producto.querySelector(".stock");

    if (!stockElement) {
      stockElement = document.createElement("p");
      stockElement.classList.add("stock");
      producto.appendChild(stockElement);
    }

    stockElement.textContent = `Disponibles: ${stock} unidades`;

    // Deshabilitar botón si no hay stock
    if (parseInt(stock, 10) <= 0) {
      const btn = producto.querySelector(".btn");
      if (btn) {
        btn.textContent = "Sin disponibilidad";
        btn.classList.add("disabled");
        btn.setAttribute("disabled", "true");
      }
    }
  });
});
