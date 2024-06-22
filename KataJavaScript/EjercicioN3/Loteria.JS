const readline = require('readline-sync');

let numero1 = parseInt(readline.question("Introduce el primer número entre 1 y 50: "));
let numero2 = parseInt(readline.question("Introduce el segundo número entre 1 y 50: "));

console.log("Números del 1 al 50 con mensaje '¡Lotería!' en los números indicados:");
for (let i = 1; i <= 50; i++) {
  if (i === numero1 || i === numero2) {
    console.log(`${i} ¡Lotería!`);
  } else {
    console.log(i);
  }
}
