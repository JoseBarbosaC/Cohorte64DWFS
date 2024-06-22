const readline = require('readline-sync');

let palabras = [];
let entrada;

console.log("Introduce palabras (deja vacío y presiona Enter para terminar):");
do {
  entrada = readline.question("Introduce una palabra: ");
  if (entrada) {
    palabras.push(entrada);
  }
} while (entrada);

let resultado = palabras.join(" ");
console.log("Concatenación de todas las palabras capturadas:", resultado);
