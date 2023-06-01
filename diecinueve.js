function encontrarNumerosPerfectos(n) {
    function esNumeroPerfecto(numero) {
      var acumulador = 0;
      for (var i = 1; i <= Math.floor(numero / 2); i++) {
        if (numero % i === 0) {
          acumulador += i;
        }
      }
      return acumulador === numero;
    }
  
    var contador = 0;
    var numerosPerfectos = [];
  
    var i = 1;
    while (contador < n) {
      if (esNumeroPerfecto(i)) {
        numerosPerfectos.push(i);
        contador++;
      }
      i++;
    }
  
    console.log("Los primeros " + n + " números perfectos son: " + numerosPerfectos.join(", "));
  }
  
  encontrarNumerosPerfectos(5);
  