const readline = require('readline-sync');

let dia;
const mensajes = {
  lunes: "Es lunes, ¡inicio de semana!",
  martes: "Es martes, ¡ánimo!",
  miércoles: "Es miércoles, ¡mitad de semana!",
  jueves: "Es jueves, ¡casi viernes!",
  viernes: "Es viernes, ¡fin de semana!",
  sábado: "Es sábado, ¡disfruta tu día!",
  domingo: "Ve a descansar"
};

do {
  dia = readline.question("Introduce un día de la semana: ").toLowerCase();
  if (mensajes[dia]) {
    console.log(mensajes[dia]);
  } else {
    console.log("Día no válido, intenta nuevamente.");
  }
} while (dia !== "domingo");
