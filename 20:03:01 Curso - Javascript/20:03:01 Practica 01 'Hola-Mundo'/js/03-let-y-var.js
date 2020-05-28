'use strict'

//Pruebas con Ley y var
// alert("Hola");

//Prueba con var
var numero = 40;
console.log(numero); //40

if (true) {
    var numero = 50;
    console.log(numero); //50
}

console.log(numero); //50

//Prueba con Let
var texto = "Curso JS";
console.log(texto); //JS

if (true) {
    let texto = "Curso Laravel 5";
    console.log(texto); //Laravel
}

console.log(texto); //JS