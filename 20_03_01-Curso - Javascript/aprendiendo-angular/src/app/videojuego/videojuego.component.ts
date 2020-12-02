//** Importante que sea .ts, que es la extencion de javascript para angular */
import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({ //** Aqui lo definimos, el objeto JSON, recordemos, decorador para una clase */
    selector: 'videojuego', //** Ponemos el nombre, va a tener la etiqueta de este componente */
    templateUrl: './videojuego.component.html' //** Archivo externo para definir la plantilla, o mejor dicho lo que se va a mostrar en el DOM */
})

export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{ //** Asi exportamos el archivo, implemetando los ng */
    public titulo: string; //** Asi declaramos los valores en la vista */
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos"; //** Esto es lo que declaramos arriba, con su valor string */
        this.listado = "Listado de los juegos mas populares";

        // console.log("Se ha cargado el componente: videojuego.component.ts");   
    }

    ngOnInit(){ //** Se va a ejecutar cada vez que yo inicialize el componente */
        // console.log("OnInit ejecutado!!");
    }

    ngDoCheck(){ //** Se ejecuta cada vez que hay un cambio en el componente, o en la aplicacion de angular en general */
        // console.log("DoCheck ejecutado");
    }

    ngOnDestroy(){ //** Me va a servir que se ejecute algo, antes de eliminar la instancia del componente */
        // console.log("OnDestroy ejecutado");
        
    }

    cambiarTitulo(){ //** Lo creamos para hacer una prueba del DoCheck, se cambia al dar click en el boton */
        this.titulo = "Nuevo titulo del componente" 
    }
}
