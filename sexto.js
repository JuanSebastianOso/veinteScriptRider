var numVendedores = parseInt(prompt("Ingrese el número de vendedores:"));
var sueldoBase = parseFloat(prompt("Ingrese el sueldo base:"));
var porcentajeComisiones = parseFloat(prompt("Ingrese el porcentaje de comisiones:"));

var totalSueldos = 0;
var totalComisiones = 0;

for (var i = 1; i <= numVendedores; i++) {
  var ventas = parseFloat(prompt("Ingrese el valor de las ventas para el vendedor " + i + ":"));

  var valorPagar = sueldoBase + (ventas * porcentajeComisiones / 100);

  totalSueldos += sueldoBase;
  totalComisiones += (ventas * porcentajeComisiones / 100);

  console.log("El valor a pagar al vendedor " + i + " es: " + valorPagar);
}

console.log("Total a pagar por sueldos: " + totalSueldos);
console.log("Total a pagar por comisiones: " + totalComisiones);
