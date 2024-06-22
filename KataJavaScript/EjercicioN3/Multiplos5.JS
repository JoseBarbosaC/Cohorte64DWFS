const readline = require('readline-sync');

let numero = parseInt(readline.question("Introduce un número: "));

console.log(`Múltiplos de 5 desde 1 hasta ${numero}:`);
for (let i = 1; i <= numero; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}
