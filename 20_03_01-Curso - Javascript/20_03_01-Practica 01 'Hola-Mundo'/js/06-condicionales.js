'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad = 18;
var nombre = 'David Suarez';

/* Operadores relacionales
    Mayor: >
    Menor: <
    Mayor Igual: >=
    Menor Igual: <=
    Igual: ==
    Distinto: !=
*/

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + ' tiene ' + edad + ' años, es mayor de edad')

    if (edad <= 33) {
        console.log('Todavia eres Millenial')
    } else if (edad >= 70) {
        console.log('Eres anciando')
    } else {
        console.log('Ya no eres Millenial')
    }
} else {
    console.log(nombre + ' tiene ' + edad + ' años, es menor de edad')
}

/*
Operadores logicos
AND(Y): &&
OR(0): ||
NEGACION: !
*/

var year = 2089;

// Negacion
if (year != 2016) {
    console.log('El año no es 2016 realmente es: ' + year)
}

// AND
if (year >= 2000 && year <= 2020) {
    console.log('Estamos en la era actual');
} else {
    console.log('Estamos en la era post moderna')
}

// OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log('El año acaba en 8');
} else {
    console.log('Año no registrado');
}