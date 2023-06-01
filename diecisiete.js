var notas = [];

for (var i = 0; i < 20; i++) {
  var nota = parseFloat(prompt("Ingrese la nota del estudiante " + (i + 1) + ":"));
  notas.push(nota);
}

var promedio = 0;
var notaMasAlta = -Infinity;
var notaMasBaja = Infinity;
var estudiantesAprobados = 0;
var estudiantesReprobados = 0;

for (var i = 0; i < notas.length; i++) {
  promedio += notas[i];

  if (notas[i] > notaMasAlta) {
    notaMasAlta = notas[i];
  }

  if (notas[i] < notaMasBaja) {
    notaMasBaja = notas[i];
  }

  if (notas[i] >= 3.0) {
    estudiantesAprobados++;
  } else {
    estudiantesReprobados++;
  }
}

promedio = promedio / notas.length;

console.log("Promedio del grupo: " + promedio);
console.log("Nota más alta: " + notaMasAlta);
console.log("Nota más baja: " + notaMasBaja);
console.log("Estudiantes aprobados: " + estudiantesAprobados);
console.log("Estudiantes reprobados: " + estudiantesReprobados);
