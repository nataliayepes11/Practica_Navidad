/* Clase 15: Métodos de Arrays
Aprendimos a manipular listas: agregar, sacar y modificar elementos.
Ejercicio: Organizando la Mesa Dulce 🧁 Tenemos una lista de postres, pero hubo cambios de último momento.
1.	Creá un array con 3 postres iniciales: ["Pan Dulce", "Turrón", "Garrapiñada"].
2.	Alguien trajo helado: Agregalo al final usando .push("Helado").
3.	A nadie le gusta la Garrapiñada (perdón a las fans 😅): Buscá en qué posición está o simplemente eliminala. 
Desafío: Usá .pop() si está última, o investigá cómo sacar una del medio.
4.	Mostrá la lista final de la mesa dulce por consola.
*/

let mesaDulce = ["Pan Dulce", "Turrón", "Garrapiñada"];

mesaDulce.push("Helado");

let indiceGarrapiniada = mesaDulce.indexOf("Garrapiñada");
if (indiceGarrapiniada !== -1) {
    mesaDulce.splice(indiceGarrapiniada, 1);
}

console.log(mesaDulce);