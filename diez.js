var opcion = 0;

while (opcion !== 7) {
  var menu = "Calculadora\n\n" +
    "1. Suma\n" +
    "2. Resta\n" +
    "3. Multiplicación\n" +
    "4. División\n" +
    "5. Potenciación\n" +
    "6. Porcentaje\n" +
    "7. Apagar";

  opcion = parseInt(prompt(menu));

  if (opcion === 1) {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 + num2;
    console.log("Resultado: " + resultado);
  } else if (opcion === 2) {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 - num2;
    console.log("Resultado: " + resultado);
  } else if (opcion === 3) {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 * num2;
    console.log("Resultado: " + resultado);
  } else if (opcion === 4) {
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2 = parseFloat(prompt("Ingrese el segundo número:"));
    var resultado = num1 / num2;
    console.log("Resultado: " + resultado);
  } else if (opcion === 5) {
    var base = parseFloat(prompt("Ingrese la base:"));
    var exponente = parseFloat(prompt("Ingrese el exponente:"));
    var resultado = Math.pow(base, exponente);
    console.log("Resultado: " + resultado);
  } else if (opcion === 6) {
    var total = parseFloat(prompt("Ingrese el número total:"));
    var porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));
    var resultado = (total * porcentaje) / 100;
    console.log("Resultado: " + resultado);
  } else if (opcion === 7) {
    console.log("Apagando calculadora...");
  } else {
    console.log("Opción inválida. Por favor, seleccione una opción válida.");
  }
}
