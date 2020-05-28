'use strict'

/*
Programa que pida dos numeros y que nos diga cual es el mayor, cual es el menor y si son iguales
PLUS: Si los numeros no son un numero o son menores o iguales a cero, nos los vuelva a pedir
*/

var numero1 = Number(prompt("Introduce el primer numero: "));
var numero2 = Number(prompt("Introduce el segundo numero: "));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = Number(prompt("Introduce el primer numero: "));
    numero2 = Number(prompt("Introduce el segundo numero: "));
}
if (numero1 == numero2) {
    alert("LOS NUMEROS SON IGUALES");
} else if (numero1 > numero2) {
    alert("EL NUMERO MAYOR ES: " + numero1);
    alert("EL NUMERO MENOR ES :" + numero2);
} else if (numero2 > numero1) {
    alert("EL NUMERO MAYOR ES: " + numero2);
    alert("EL NUMERO MENOR ES: " + numero1);
} else {
    alert("INTRODUCE NUMEROS CORRECTOS");
}