var n = parseInt(prompt("Ingrese un número entero:"));
var factorial = 1;

for (var i = 1; i <= n; i++) {
  factorial *= i;
}

console.log("El factorial de " + n + " es: " + factorial);
