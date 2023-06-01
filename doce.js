var numero = parseInt(prompt("Ingrese un número entero:"));
var suma = 0;

while (numero > 0) {
  var ultimoDigito = numero % 10;
  suma += ultimoDigito;
  numero = Math.floor(numero / 10);
}

console.log("La suma de los dígitos es: " + suma);
