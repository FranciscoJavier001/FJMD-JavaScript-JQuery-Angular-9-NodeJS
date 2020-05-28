type alfanumerico = string | number;

// String

let cadena: alfanumerico | number ="Francisco Javier Martinez Duran";
cadena = 44;

// number
let numero: number = 12;

// Booleano
let verdadero_falso: boolean=true;

// Any
let cualquiera: any = "hola";
cualquiera=77;

// Arrays
var lenguaje: Array<string>=["PHP", "JS", "CSS"];

let years: any[]=["DOCE", 13, 14];

// Let vs Var
var numero1 = 10;
var numero2 = 12;

if (numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);

}
console.log(numero1, numero2);

console.log(cadena, numero, verdadero_falso, cualquiera, lenguaje, years);
