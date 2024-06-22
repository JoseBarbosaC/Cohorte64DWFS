const arreglo = [4, "dos", 8, "tres", 5, 9, 1, "cero"];

console.log("Elementos de tipo número en el arreglo:");
arreglo.forEach(elemento => {
  if (typeof elemento === 'number') {
    console.log(elemento);
  }
});
