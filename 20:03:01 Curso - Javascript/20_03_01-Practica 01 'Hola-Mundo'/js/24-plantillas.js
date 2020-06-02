'use strict'

// Plantillas de texto

var nombre = prompt("Mete tu Nombre: ");
var apellidos = prompt("Mete tus Apellidos: ");

// var texto = " Mi nombre es: " + nombre + "<br> Mis Apelldos son: " + apellidos;
var texto = `
<h1>Hola que tal</h1>
<h3>Mi nombre es: ${nombre}</h3>
<h3>Ms apellidos son: ${apellidos}</h3>
`;

document.write(texto);