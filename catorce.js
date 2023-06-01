var ventasMensuales = [];

for (var i = 0; i < 12; i++) {
  var ventas = parseFloat(prompt("Ingrese las ventas del mes " + (i + 1) + ":"));
  ventasMensuales.push(ventas);
}

var ventasMasAltas = ventasMensuales[0];
var ventasMasBajas = ventasMensuales[0];
var mesVentasMasAltas = 0;
var mesVentasMasBajas = 0;
var sumaVentas = 0;

for (var i = 0; i < ventasMensuales.length; i++) {
  if (ventasMensuales[i] > ventasMasAltas) {
    ventasMasAltas = ventasMensuales[i];
    mesVentasMasAltas = i;
  }

  if (ventasMensuales[i] < ventasMasBajas) {
    ventasMasBajas = ventasMensuales[i];
    mesVentasMasBajas = i;
  }

  sumaVentas += ventasMensuales[i];
}

var promedioVentas = sumaVentas / ventasMensuales.length;

console.log("Mes con las ventas más altas: " + (mesVentasMasAltas + 1));
console.log("Mes con las ventas más bajas: " + (mesVentasMasBajas + 1));
console.log("Promedio mensual de ventas: " + promedioVentas);
