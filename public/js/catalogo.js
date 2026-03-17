// public/js/catalogo.js

// Lista de productos
const productos = [
  { nombre: "Escalera", precio: "$590/día", img: "assets/img/escalera.jpg" },
  { nombre: "Hidrolavadora", precio: "$680/día", img: "assets/img/hidrolavadora.jpg" },
  { nombre: "Roto martillo", precio: "$427/día", img: "assets/img/rotomartillo.jpg" },
  { nombre: "Podadora", precio: "$590/día", img: "assets/img/podadora.jpg" },
  { nombre: "Aspiradora", precio: "$510/día", img: "assets/img/aspiradora.jpg" },
  { nombre: "Corta Setos L", precio: "$340/día", img: "assets/img/corta-setos.jpg" },
  { nombre: "Pulidora orbital", precio: "$680/día", img: "assets/img/pulidora-orbital.jpg" },
  { nombre: "Pulidora orbital de palma", precio: "$427/día", img: "assets/img/pulidora-palma.jpg" },
  { nombre: "Generador de vapor", precio: "$427/día", img: "assets/img/generador-vapor.jpg" },
  { nombre: "Sierra de calar", precio: "$327/día", img: "assets/img/sierra-calar.jpg" },
  { nombre: "Soplador de hojas", precio: "$340/día", img: "assets/img/soplador.jpg" },
  { nombre: "Kit de herramientas básicas", precio: "$204/día", img: "assets/img/kit-basico.jpg" },
  { nombre: "Engrapadora carpintera", precio: "$250/día", img: "assets/img/engrapadora.jpg" },
  { nombre: "Pistola de clavos", precio: "$340/día", img: "assets/img/pistola-clavos.jpg" },
  { nombre: "Carretilla estándar", precio: "$250/día", img: "assets/img/carretilla.jpg" }
];

// Renderizado dinámico
const contenedor = document.getElementById("catalogo");
const grid = document.createElement("div");
grid.className = "grid";

productos.forEach(p => {
  const div = document.createElement("div");
  div.className = "producto";
  div.innerHTML = `
    <img src="${p.img}" alt="${p.nombre}">
    <h3>${p.nombre}</h3>
    <p>${p.precio}</p>
    <p><small>Disponibles: 5 unidades</small></p>
    <p><small>Renta mínima: 24h de anticipación</small></p>
    <p><small>Incluye seguro de daños, pérdida y contratiempos ($200)</small></p>
    <a href="producto.html?nombre=${encodeURIComponent(p.nombre)}&precio=${encodeURIComponent(p.precio)}" class="btn">Solicitar renta</a>
  `;
  grid.appendChild(div);
});

contenedor.appendChild(grid);
