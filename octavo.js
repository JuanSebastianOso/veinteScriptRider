var n = parseInt(prompt("Ingrese el valor de n:"));

var numAnterior1 = 0;
var numAnterior2 = 1;
var resultado = 0;

for (var i = 2; i <= n; i++) {
  resultado = numAnterior1 + numAnterior2;
  numAnterior1 = numAnterior2;
  numAnterior2 = resultado;
}

console.log("El " + n + "-ésimo número de la serie Fibonacci es: " + resultado);
