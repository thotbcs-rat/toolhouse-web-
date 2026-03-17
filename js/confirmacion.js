document.addEventListener("DOMContentLoaded", () => {
  const productos = [
    { nombre: "Escalera", precio: 300, stock: 5, img: "assets/img/escalera.jpg" },
    { nombre: "Hidrolavadora", precio: 680, stock: 3, img: "assets/img/hidrolavadora.jpg" },
    { nombre: "Podadora", precio: 590, stock: 2, img: "assets/img/podadora.jpg" }
  ];

  const productoSeleccionado = localStorage.getItem("productoSeleccionado");
  const producto = productos.find(p => p.nombre === productoSeleccionado);

  const fechaEntrega = localStorage.getItem("fechaEntrega");
  const fechaRecogida = localStorage.getItem("fechaRecogida");
  const ubicacion = localStorage.getItem("ubicacion");

  if (producto) {
    document.getElementById("nombre").textContent = producto.nombre;
    document.getElementById("precio").textContent = `$${producto.precio}/día`;
    document.getElementById("stock").textContent = `Disponibles: ${producto.stock}`;
  }

  if (fechaEntrega) document.getElementById("fechaEntrega").textContent = fechaEntrega;
  if (fechaRecogida) document.getElementById("fechaRecogida").textContent = fechaRecogida;
  if (ubicacion) document.getElementById("ubicacion").textContent = ubicacion;
});
