const readline = require('readline-sync');
const { pokemons } = require('./pokemons');

let numero = parseInt(readline.question("Introduce un número: "));

console.log(`Pokémons cuyos números son múltiplos de 5 desde 1 hasta ${numero}:`);
pokemons.forEach(pokemon => {
  if (pokemon.numero % 5 === 0 && pokemon.numero <= numero) {
    console.log(pokemon.nombre);
  }
});
