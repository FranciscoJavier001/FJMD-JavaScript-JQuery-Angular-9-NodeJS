import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion'; //** Simplemente en ese archivo tengo un JSON con una serie de datos, recuerda JSON es un formato ligero de intercambio de datos, para nosotros es leerlo y escribirlo y para las maquinas es interpretalo y generalo, por eso es ideal para el intercambio de datos, de igual manera ya puedo acceder a las variables del objeto */

@Component({
  selector: 'app-root', //** En que directiva se va a estar cargando el componente, este se carga en app-root, que lo encontramos en el index.html */
  templateUrl: './app.component.html', //** Esta es la vista del componente */
  styleUrls: ['./app.component.css'] //** Estos son los estilos css */
})
export class AppComponent {
  public title = ''; //** Simplemente aqui lo declaramos, pero lo traemos desde configuracion.ts y se muestra en el app.component.html, donde lo metimos desfragmentando el objeto */
  public descripcion: string;
  public mostrar_videojuegos: boolean = true; //** Esto es para mostrar el ngOnDestroy */
  public config; //** Asi metemos la configuracion dentro del objeto, osea la traemos del archivo para mostrarla, esta la usamos para mostrar las cosas en el DOM */

  constructor(){  //** Una funcion del constructor, en la cual cambiamos los datos que tiene */
    this.config = Configuracion; //** Aqui damos la orden de mostrarla, osea ya la importamos y simplemente pues que entre al DOM */
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripción;
  }

  ocultarVideojuegos(value){ //** Esto se va a ejecutar cuando lanze un evento click que se va a definir en el app.component.html */
    this.mostrar_videojuegos = value;
  }
}
