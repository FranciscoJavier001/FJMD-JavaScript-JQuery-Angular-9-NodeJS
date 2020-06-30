var Coche = /** @class */ (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = null; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == null) {
            this.modelo = "BMW Generico";
        }
        else {
            this.modelo = modelo;
        }
    }
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    return Coche;
}());
var coche = new Coche("Renault Clio");
var coche_dos = new Coche();
var coche_tres = new Coche();
// coche.setColor("ROJO");
coche.acelerar();
coche.acelerar();
coche.acelerar();
console.log("El Modelo del Coche #1 es: " + coche.getModelo());
console.log("El Color del Coche #1 es: " + coche.getColor());
console.log("El Velocdad del Coche #1 es: " + coche.getVelocidad());
coche.frenar();
console.log("El Velocdad despues de frenar del Coche #1 es: " + coche.getVelocidad());
// coche_tres.setColor("VERDE");
// coche_dos.setColor("AZUL");
// console.log("El color del Coche #1 es: " + coche_dos.getColor());
// console.log("El color del Coche #1 es: " + coche_tres.getColor());
