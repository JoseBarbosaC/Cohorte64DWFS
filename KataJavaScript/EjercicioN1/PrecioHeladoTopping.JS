const topping = prompt("¿Qué topping deseas? (Oreo, KitKat, Brownie)").toLowerCase();
let precio = 50;
switch (topping) {
  case 'oreo':
    precio += 10;
    break;
  case 'kitkat':
    precio += 15;
    break;
  case 'brownie':
    precio += 20;
    break;
  default:
    alert("No tenemos este topping, lo sentimos.");
}
alert(`El precio del helado es ${precio} MXN.`);
