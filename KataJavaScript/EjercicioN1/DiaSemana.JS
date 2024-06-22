const dia = prompt("Introduce un día de la semana:").toLowerCase();
switch (dia) {
  case 'lunes':
    alert("Es lunes, ¡Ánimo para empezar la semana!");
    break;
  case 'viernes':
    alert("Es viernes, ¡Fin de semana a la vista!");
    break;
  case 'sábado':
  case 'domingo':
    alert("Es fin de semana, ¡Disfruta!");
    break;
  default:
    alert("Es un día común, ¡Sigue adelante!");
    break;
}
