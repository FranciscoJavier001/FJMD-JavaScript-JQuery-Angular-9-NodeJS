'use strict'

/*
Hacer un programa que muestre todos los numeros divisores de un numero en un prompt
*/

var numero1 = parseInt(prompt("Mete un numero", 1));

for (var i = 1; i <= numero1; i++) {
    if (numero1 % i == 0) {
        console.log("Divisor " + i);
    }
}