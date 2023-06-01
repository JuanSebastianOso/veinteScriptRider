var numEstudiantes = parseInt(prompt("Ingrese el número de estudiantes:"));
var sumaNotas = 0;
var excelentes = 0;
var buenos = 0;
var regulares = 0;
var descuidados = 0;

for (var i = 1; i <= numEstudiantes; i++) {
  var nota = parseFloat(prompt("Ingrese la nota del estudiante " + i + ":"));
  sumaNotas += nota;

  if (nota >= 4.8) {
    excelentes++;
  } else if (nota >= 4.0 && nota <= 4.7) {
    buenos++;
  } else if (nota >= 3.0 && nota <= 3.9) {
    regulares++;
  } else {
    descuidados++;
  }
}

var promedioGrupo = sumaNotas / numEstudiantes;

console.log("Promedio del grupo: " + promedioGrupo);
console.log("Cantidad de estudiantes excelentes: " + excelentes);
console.log("Cantidad de estudiantes buenos: " + buenos);
console.log("Cantidad de estudiantes regulares: " + regulares);
console.log("Cantidad de estudiantes descuidados: " + descuidados);
