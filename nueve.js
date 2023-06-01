var numEncuestados = parseInt(prompt("Ingrese el número de personas encuestadas:"));
var aFavor = 0;
var enContra = 0;
var noResponde = 0;

for (var i = 1; i <= numEncuestados; i++) {
  var respuesta = prompt("Ingrese la respuesta del encuestado " + i + ":");
  
  if (respuesta.toLowerCase() === "a favor") {
    aFavor++;
  } else if (respuesta.toLowerCase() === "en contra") {
    enContra++;
  } else if (respuesta.toLowerCase() === "no responde") {
    noResponde++;
  }
}

var porcentajeAFavor = (aFavor / numEncuestados) * 100;
var porcentajeEnContra = (enContra / numEncuestados) * 100;
var porcentajeNoResponde = (noResponde / numEncuestados) * 100;

console.log("Porcentaje de encuestados a favor: " + porcentajeAFavor + "%");
console.log("Porcentaje de encuestados en contra: " + porcentajeEnContra + "%");
console.log("Porcentaje de encuestados que no responden: " + porcentajeNoResponde + "%");
