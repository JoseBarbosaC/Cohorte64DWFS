const numA = parseInt(prompt("Introduce el primer número:"));
const numB = parseInt(prompt("Introduce el segundo número:"));
const numC = parseInt(prompt("Introduce el tercer número:"));
if (numA >= numB && numA >= numC) {
  alert(`${numA} es el mayor`);
} else if (numB >= numA && numB >= numC) {
  alert(`${numB} es el mayor`);
} else {
  alert(`${numC} es el mayor`);
}
