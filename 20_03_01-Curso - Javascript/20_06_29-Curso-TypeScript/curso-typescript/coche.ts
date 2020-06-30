interface CocheBase{
    getModelo(): string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color: string;
    public modelo: string;
    public velocidad: number;

    constructor(modelo:any = null){
        this.color = "Blanco";
        this.velocidad = 0;

        if(modelo == null) {
            this.modelo = "BMW Generico";
        }else {
            this.modelo = modelo;
        }
    }

    public getModelo():string{
        return this.modelo;
    }

    public setModelo(modelo: string){
        this.modelo = modelo;
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
    }

    public acelerar(){
        this.velocidad++;
    }

    public frenar(){
        this.velocidad--;
    }

    public getVelocidad():number{
        return this.velocidad;
    }
}

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
