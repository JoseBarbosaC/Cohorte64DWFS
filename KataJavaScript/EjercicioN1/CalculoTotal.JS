const tipoVehiculo = prompt("Introduce el tipo de vehículo (coche, moto, autobús)").toLowerCase();
const kmsRecorridos = parseFloat(prompt("Introduce los kilómetros recorridos:"));
const litrosConsumidos = parseFloat(prompt("Introduce los litros consumidos:"));
let precioKilometro;

switch (tipoVehiculo) {
  case 'coche':
    precioKilometro = 0.20;
    break;
  case 'moto':
    precioKilometro = 0.10;
    break;
  case 'autobús':
    precioKilometro = 0.50;
    break;
  default:
    alert("Tipo de vehículo no reconocido");
    precioKilometro = 0;
    break;
}

let costoTotal = precioKilometro * kmsRecorridos;
if (litrosConsumidos <= 100) {
  costoTotal += 5;
} else {
  costoTotal += 10;
}

alert(`El total a pagar es ${costoTotal} MXN.`);
