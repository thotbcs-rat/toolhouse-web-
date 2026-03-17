document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Escalera", precio: 300, stock: 5, img: "assets/img/escalera.jpg" },
    { nombre: "Hidrolavadora", precio: 680, stock: 3, img: "assets/img/hidrolavadora.jpg" },
    { nombre: "Podadora", precio: 590, stock: 2, img: "assets/img/podadora.jpg" }
  ];

  const productoSeleccionado = localStorage.getItem("productoSeleccionado");
  const producto = productos.find(p => p.nombre === productoSeleccionado);

  if (producto) {
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = `$${producto.precio}/día`;
    document.getElementById("stock").textContent = `Disponibles: ${producto.stock}`;
    document.getElementById("imagen").src = producto.img;
  }
});
