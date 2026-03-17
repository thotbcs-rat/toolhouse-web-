document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Escalera", precio: 300, stock: 5, img: "assets/img/escalera.jpg" },
    { nombre: "Hidrolavadora", precio: 680, stock: 3, img: "assets/img/hidrolavadora.jpg" },
    { nombre: "Podadora", precio: 590, stock: 2, img: "assets/img/podadora.jpg" }
  ];

  const contenedor = document.getElementById("catalogo");

  productos.forEach(p => {
    const card = document.createElement("div");
    card.classList.add("producto");
    card.innerHTML = `
      <img src="${p.img}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>$${p.precio}/día</p>
      <p>Disponibles: ${p.stock}</p>
      <button onclick="verProducto('${p.nombre}')">Ver producto</button>
    `;
    contenedor.appendChild(card);
  });

  window.verProducto = function(nombre) {
    localStorage.setItem("productoSeleccionado", nombre);
    window.location.href = "producto.html";
  };
});
