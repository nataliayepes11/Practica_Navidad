/* Clase 9: Lógica y Repaso
Acá reforzamos la estructura del programa y la lógica de programación .
Ejercicio: El outfit de Año Nuevo 👗👔 Tenemos que decidir qué ponernos según el clima del 31 de diciembre.
1.	Pedile al usuario que ingrese la temperatura actual.
2.	Si la temperatura es mayor a 25 grados, mostrá: "Ponete ropa blanca y liviana, ¡hace calor! ☀️".
3.	Si hace 25 grados o menos, mostrá: "Llevá un abrigo elegante por las dudas 🧥".
*/

const prompt = require (`prompt-sync`)();
const TEMPERATURA = 25;
let outfit = parseFloat(prompt("Ingresá la temperatura actual (sólo el número): "));


if (outfit > TEMPERATURA) {
    console.log("Ponete ropa blanca y liviana");
  
} else {
  console.log("Llevá un abrigo elegante por las dudas");
}
