<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/misEstilos.css">
    <title>Hotel San José</title>
</head>
<body>
  <div>
    <header>
      <h1 style="font-size: 80px;"> <strong> Hotel San José </strong></h1>
      ¡Tu lugar favorito de descanso!
    </header>
    <nav>
      <ul>
        <li><a href="Index.html">Inicio</a></li>
        <li><a href="Habitaciones.html">Habitaciones</a></li>
        <li><a href="Servicios.html">Servicios</a></li>
        <li><a href="#">Reservas</a></li>
        <li><a href="Contacto.html">Contacto</a></li>
      </ul>
    </nav>
   <img style="width: 100%; height: 600px;" src="./Img/principal.jpg">
    <div style="text-align: center;">
      <span style="font-size: 40px; text-decoration: overline underline;">Bienvenidos a nuestro gran Hotel</span>
    </div>    
  </div>
  <main>
    <?php

    echo "<h1>¡Gracias por su consulta!</h1>"
    $nombre = $_POST['nombre'];
    $nacimiento = $_POST['nacimiento']
    $edad = $_POST['edad']

    echo "<br><br>"
    echo "Gracias, " . $nombre . " " . $nacimiento . " por contactarnos." ;
    echo "<br><br>"

    echo "Tu edad es: " . $edad ;

    echo "<br><br>"
    echo "<br><br>"
    ?>
  </main>
</body>
<footer>
  <a id="contacto"></a><p>&copy; 2023 Hotel San José. Todos los derechos reservados. | <a href="politica-privacidad.html">Política de privacidad</a> | <a href="Contacto.html">Contacto</a></p>
</footer>
</html>