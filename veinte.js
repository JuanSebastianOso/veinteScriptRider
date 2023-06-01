function validarNota() {
    var nota;
    do {
      nota = parseFloat(prompt("Ingrese una nota (entre 0 y 5.0):"));
      if (nota >= 0 && nota <= 5.0) {
        console.log("La nota " + nota + " es válida.");
      } else {
        console.log("La nota " + nota + " es inválida. Por favor, ingrese una nueva nota.");
      }
    } while (nota < 0 || nota > 5.0);
  }
  
  validarNota();
  