function validarFecha() {
    var fecha;
    var formatoFecha = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9][0-9]|20[0-9][0-9])$/;
    
    do {
      fecha = prompt("Ingrese una fecha en el formato dd/mm/aaaa:");
      
      if (formatoFecha.test(fecha)) {
        var partesFecha = fecha.split("/");
        var dia = parseInt(partesFecha[0]);
        var mes = parseInt(partesFecha[1]);
        var anio = parseInt(partesFecha[2]);
        
        var fechaValida = new Date(anio, mes - 1, dia);
        var fechaMinima = new Date(1900, 0, 1);
        var fechaMaxima = new Date(2100, 11, 31);
        
        if (fechaValida >= fechaMinima && fechaValida <= fechaMaxima) {
          console.log("La fecha " + fecha + " es válida.");
          break;
        }
      }
      
      console.log("La fecha " + fecha + " es inválida. Por favor, ingrese una nueva fecha.");
    } while (true);
  }
  
  validarFecha();
  