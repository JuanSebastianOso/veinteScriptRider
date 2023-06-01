var pruebasMayor20Min = 0;
var pruebasMenor15Min = 0;
var sumaTiempos = 0;

for (var dia = 1; dia <= 10; dia++) {
  var tiempo = parseFloat(prompt("Ingrese el tiempo en minutos para el día " + dia + ":"));
  
  if (tiempo > 20) {
    pruebasMayor20Min++;
  }
  
  if (tiempo < 15) {
    pruebasMenor15Min++;
  }
  
  sumaTiempos += tiempo;
}

var promedioTiempo = sumaTiempos / 10;

if (pruebasMayor20Min === 0 && pruebasMenor15Min > 0 && promedioTiempo <= 18) {
  console.log("El atleta es apto para la competencia.");
} else {
  console.log("El atleta no es apto para la competencia.");
}
