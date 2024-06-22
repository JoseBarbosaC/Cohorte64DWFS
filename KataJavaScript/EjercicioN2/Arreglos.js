const readline = require('readline-sync');

// 1. Crear un array vacío, generar 10 números al azar y guardarlos en el array. Mostrar en consola el resultado del array.
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 100) + 1; // Genera un número al azar entre 1 y 100
  randomNumbers.push(randomNumber);
}
console.log("Array de números aleatorios:", randomNumbers);

// 2. Convertir un string ingresado por el usuario en un array y mostrarlo en consola.
let userInput = readline.question("Ingresa varias palabras separadas por comas: ");
let userArray = userInput.split(",");
console.log("Array convertido del string ingresado por el usuario:", userArray);

// 3. Trabajar con el array [10,40,30,20,15,5]
let array = [10, 40, 30, 20, 15, 5];

// Ordenar el array de menor a mayor
array.sort((a, b) => a - b);
console.log("Array ordenado de menor a mayor:", array);

// Encontrar el número menor y mayor del array
let minNumber = Math.min(...array);
let maxNumber = Math.max(...array);

console.log("Número menor del array:", minNumber);
console.log("Número mayor del array:", maxNumber);
