const num1 = parseInt(prompt("Introduce el primer número:"));
const num2 = parseInt(prompt("Introduce el segundo número:"));
if (num1 < num2) {
  alert(`${num1} es menor que ${num2}`);
} else if (num2 < num1) {
  alert(`${num2} es menor que ${num1}`);
} else {
  alert("Los números son iguales");
}
