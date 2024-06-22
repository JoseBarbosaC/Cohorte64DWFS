const programa = prompt("¿Qué programa deseas? (Course, Carrera, Master)").toLowerCase();
const beca = prompt("¿Tienes alguna beca? (Facebook, Google, Jesua)").toLowerCase();
let costoMensual;
let duracion;

switch (programa) {
  case 'course':
    costoMensual = 4999;
    duracion = 2;
    break;
  case 'carrera':
    costoMensual = 3999;
    duracion = 6;
    break;
  case 'master':
    costoMensual = 2999;
    duracion = 12;
    break;
  default:
    alert("Programa no reconocido");
    costoMensual = 0;
    duracion = 0;
    break;
}

switch (beca) {
  case 'facebook':
    costoMensual *= 0.8;
    break;
  case 'google':
    costoMensual *= 0.85;
    break;
  case 'jesua':
    costoMensual *= 0.5;
    break;
  default:
    break;
}

const costoTotal = costoMensual * duracion;
alert(`El costo mensual con descuento es ${costoMensual} MXN.`);
alert(`El costo total del programa es ${costoTotal} MXN.`);
