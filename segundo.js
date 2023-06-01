var numero;

do {
  numero = parseInt(prompt("Ingresa un número entero (0 para salir):"));

  if (numero < 0) {
    var cuadrado = numero ** 2;
    console.log("El cuadrado de " + numero + " es: " + cuadrado);
  } else if (numero > 0) {
    var cubo = numero ** 3;
    console.log("El cubo de " + numero + " es: " + cubo);
  }
} while (numero !== 0);