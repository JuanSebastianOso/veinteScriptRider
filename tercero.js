var cantidadPares = 0;
var cantidadImpares = 0;
var sumaPares = 0;
var sumaImpares = 0;
var numero;

do {
  numero = parseFloat(prompt("Ingresa un número (ingresa un número negativo para salir):"));

  if (numero % 2 === 0) {
    cantidadPares++;
    sumaPares += numero;
  } else {
    cantidadImpares++;
    sumaImpares += numero;
  }
} while (numero >= 0);

console.log("Cantidad de números pares: " + cantidadPares);
console.log("Cantidad de números impares: " + cantidadImpares);
console.log("Suma de los números pares: " + sumaPares);
console.log("Suma de los números impares: " + sumaImpares);