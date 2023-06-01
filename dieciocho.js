function calcularPuntosParabola() {
    for (var x = -5; x <= 5; x++) {
      var y = 2 * Math.pow(x, 2) + 3 * x - 4;
      console.log("Punto (" + x + ", " + y + ")");
    }
  }
  
  calcularPuntosParabola();
  