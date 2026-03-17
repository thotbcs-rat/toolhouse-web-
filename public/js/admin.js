document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Escalera", precio: 300, img: "assets/img/escalera.jpg" },
    { nombre: "Hidrolavadora", precio: 680, img: "assets/img/hidrolavadora.jpg" },
    { nombre: "Podadora", precio: 590, img: "assets/img/podadora.jpg" }
  ];

  const contenedor = document.getElementById("admin-productos");

  productos.forEach(p => {
    // Leer stock desde localStorage o asignar valor inicial
    const stockKey = `stock_${p.nombre}`;
    let stockActual = parseInt(localStorage.getItem(stockKey)) || 0;

    const card = document.createElement("div");
    card.classList.add("admin-card");
    card.innerHTML = `
      <h3>${p.nombre}</h3>
      <p>Stock actual: <span id="stock-${p.nombre}">${stockActual}</span></p>
      <button onclick="reponerStock('${p.nombre}')">Reponer +1</button>
    `;
    contenedor.appendChild(card);
  });

  window.reponerStock = function(nombre) {
    const stockKey = `stock_${nombre}`;
    let stockActual = parseInt(localStorage.getItem(stockKey)) || 0;
    stockActual++;
    localStorage.setItem(stockKey, stockActual);
    document.getElementById(`stock-${nombre}`).textContent = stockActual;
    alert(`✅ Stock de ${nombre} repuesto. Ahora hay ${stockActual} unidades.`);
  };
});
