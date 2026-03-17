// admin.js

document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos del catálogo
  const productos = [
    "Escalera",
    "Hidrolavadora",
    "Roto martillo",
    "Podadora",
    "Aspiradora",
    "Corta Setos L",
    "Pulidora orbital",
    "Pulidora orbital de palma",
    "Generador de vapor",
    "Sierra de calar",
    "Soplador de hojas",
    "Kit de herramientas básicas",
    "Engrapadora carpintera",
    "Pistola de clavos",
    "Carretilla estándar"
  ];

  // Función para reponer stock
  function reponerStock(nombreProducto, cantidad) {
    const stockKey = `stock_${nombreProducto}`;
    localStorage.setItem(stockKey, cantidad);
    alert(`✅ Stock de ${nombreProducto} repuesto a ${cantidad} unidades.`);
  }

  // Botón general: reponer todos
  const btnReponerTodo = document.getElementById("reponer-todo");
  if (btnReponerTodo) {
    btnReponerTodo.addEventListener("click", () => {
      productos.forEach((producto) => {
        reponerStock(producto, 5);
      });
      alert("✅ Stock de todos los productos ha sido repuesto a 5 unidades.");
    });
  }

  // Botones individuales
  const botones = document.querySelectorAll(".productos-admin .btn");
  botones.forEach((btn) => {
    btn.addEventListener("click", () => {
      const producto = btn.getAttribute("data-producto");
      reponerStock(producto, 5);
    });
  });
});
