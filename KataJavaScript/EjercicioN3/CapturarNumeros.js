const readline = require('readline-sync');

let numeros = [];
let entrada;

do {
  entrada = parseInt(readline.question("Introduce un número (0 para terminar): "));
  if (entrada !== 0) {
    numeros.push(entrada);
  }
} while (entrada !== 0);

console.log("Lista de números capturados:", numeros);
