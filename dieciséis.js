var n = parseInt(prompt("Ingrese un número entero:"));

function esPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

for (var i = 2; i <= n; i++) {
  if (esPrimo(i)) {
    console.log(i);
  }
}
