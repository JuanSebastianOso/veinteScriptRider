var numArticulos = parseInt(prompt("Ingrese la cantidad de artículos a facturar:"));
var totalFactura = 0;

for (var i = 1; i <= numArticulos; i++) {
  var cantidad = parseFloat(prompt("Ingrese la cantidad del artículo " + i + ":"));
  var precioUnitario = parseFloat(prompt("Ingrese el precio unitario del artículo " + i + ":"));
  var subtotal = cantidad * precioUnitario;

  if (cantidad > 10) {
    var descuento = subtotal * 0.05;
    subtotal -= descuento;
  }

  totalFactura += subtotal;
}

console.log("Total de la factura: " + totalFactura);
