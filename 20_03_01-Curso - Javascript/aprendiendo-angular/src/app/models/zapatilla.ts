//** Siempre el modelo hay que ponerlo en singular, porque va a representar a un solo objeto, porque sera el molde para crear otro objeto */
export class Zapatilla{
    //** Declaramos las propiedades */
    /* 
    public nombre: string;
    public marca: string;
    public color: string;
    public precio: number;
    public stock: boolean;

    //Contructir que pasamos como parametro las propiedades de arriba declaradas y le pasamos por parametro cada una de las propiedades
    constructor(nombre, marca, color, precio, stock){
        this.nombre = nombre;
        this.marca = marca;
        this.color = color;
        this.precio = precio;
        this.stock = stock;
    }
    */

    //** Las definimos aqui como parametro, o parametros de mi funcion o metodo, es lo mismo que lo que hicimos arriba, aqui definimos la propiedad de la clase y le asignamos un valor a la popiedad y se crea el valor de las propiedades */
    //** Recordemos, esto es un modelo de datos */
    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean,
    ){

    }
}