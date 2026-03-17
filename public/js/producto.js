document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Escalera", precio: 300, img: "assets/img/escalera.jpg" },
    { nombre: "Hidrolavadora", precio: 680, img: "assets/img/hidrolavadora.jpg" },
    { nombre: "Podadora", precio: 590, img: "assets/img/podadora.jpg" }
  ];

  const productoSeleccionado = localStorage.getItem("productoSeleccionado");
  const producto = productos.find(p => p.nombre === productoSeleccionado);

  if (producto) {
    const stockKey = `stock_${producto.nombre}`;
    let stockActual = parseInt(localStorage.getItem(stockKey)) || 0;

    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = `$${producto.precio}/día`;
    document.getElementById("stock").textContent = `Disponibles: ${stockActual}`;
    document.getElementById("imagen").src = producto.img;
  }
});
