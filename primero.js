var notas = [];

for (var i = 0; i< 7; i++){

    var nota = parseFloat(prompt("Ingresa la nota" + (i + 1) + ":"));
    notas.push(nota)
}

var suma = 0;
for (var i = 0; i < notas.length; i++) {
    suma += notas[i];
}

var promedio = suma / notas.length;

console.log("el promedio de las notas es: " + promedio);
