var totalEstudiantes = parseInt(prompt("Ingrese la cantidad total de estudiantes:"));
var estudiantesTrabajan = parseInt(prompt("Ingrese la cantidad de estudiantes que trabajan:"));
var estudiantesEstudios = parseInt(prompt("Ingrese la cantidad de estudiantes que se dedican únicamente a sus estudios:"));
var estudiantesMasculinos = parseInt(prompt("Ingrese la cantidad de estudiantes masculinos:"));

var porcentajeTrabajan = (estudiantesTrabajan / totalEstudiantes) * 100;
var porcentajeEstudios = (estudiantesEstudios / totalEstudiantes) * 100;
var porcentajeTrabajanEstudios = ((estudiantesTrabajan + estudiantesEstudios) / totalEstudiantes) * 100;
var porcentajeOtros = 100 - porcentajeTrabajanEstudios;
var porcentajeTrabajanEstudiosMasculinos = (estudiantesTrabajan + estudiantesEstudios) / estudiantesMasculinos * 100;

console.log("Porcentaje de estudiantes que trabajan: " + porcentajeTrabajan + "%");
