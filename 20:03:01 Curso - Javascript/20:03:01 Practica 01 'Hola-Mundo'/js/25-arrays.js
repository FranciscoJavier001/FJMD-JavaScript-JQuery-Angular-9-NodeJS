'use strict'

// Arrays, Arreglos, Matrices

var nombre = "Francisco Javier";
var nombres = ["Francisco Javier", "Juan Lopez", "Manolo Garcia", "Jose Martin", 52, true];

var lenguajes = new Array("PHP", "JS", "Go", "Java", "C#", "C", "Pascal");

// var elemento = parseInt(prompt("Que elemento del array quieres???", 0));
// if (elemento >= nombres.length) {
//     alert("Introduce el numero correcto menor que " + nombres.length);
// } else {
//     alert("El usuario seleccionado es: " + nombres[elemento]);
// }
// alert(nombres[elemento]);

document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");

/*
// for (var i = 0; i < lenguajes.length; i++) {
//     document.write("<li>" + lenguajes[i] + "</li>");
// }
lenguajes.forEach((elemento, indice, arr) => {
    document.write("<li>" + indice + " - " + elemento + "</li>");
});
*/

for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");

// Busquedas
var precios = [10, 20, 50, 80, 12];
var busqueda = precios.some(precio => precio < 10);

console.log(busqueda);