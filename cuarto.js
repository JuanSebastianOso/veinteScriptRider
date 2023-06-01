for (var grado = 1; grado <= 5; grado++) {
    var cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes en el grado " + grado + ":"));
  
    var sumaEdades = 0;
    for (var estudiante = 1; estudiante <= cantidadEstudiantes; estudiante++) {
      var edad = parseInt(prompt("Ingrese la edad del estudiante " + estudiante + " en el grado " + grado + ":"));
      sumaEdades += edad;
    }
  
    var promedioEdad = sumaEdades / cantidadEstudiantes;
    console.log("El promedio de edad en el grado " + grado + " es: " + promedioEdad);
  }
  