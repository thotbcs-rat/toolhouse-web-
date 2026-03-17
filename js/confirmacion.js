<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Toolhouse - Confirmación</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <header>
    <div class="logo">TOOLHOUSE</div>
    <nav>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="catalogo.html">Catálogo</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="confirmacion">
      <h1>🎉 ¡Renta confirmada!</h1>
      <p><strong>Producto:</strong> <span id="nombre"></span></p>
      <p><strong>Precio:</strong> <span id="precio"></span></p>
      <p><strong>Disponibilidad restante:</strong> <span id="stock"></span></p>
      <p><strong>Fecha de entrega:</strong> <span id="fechaEntrega"></span></p>
      <p><strong>Fecha de recogida:</strong> <span id="fechaRecogida"></span></p>
      <p><strong>Ubicación:</strong> <span id="ubicacion"></span></p>
      <p><strong>Seguro adicional:</strong> $200</p>

      <div class="nav-extra">
        <a href="catalogo.html" class="btn-secondary">Volver al catálogo</a>
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2026 Toolhouse. Todos los derechos reservados.</p>
  </footer>

  <script src="js/confirmacion.js"></script>
</body>
</html>
