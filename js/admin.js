// admin.js

document.addEventListener("DOMContentLoaded", () => {
  // Lista de productos que se manejan en el catálogo
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
    console.log(`Stock de ${nombreProducto} repuesto a ${cantidad} unidades.`);
  }

  // Ej
