import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';

@Component({
  selector: 'app-root', //** En que directiva se va a estar cargando el componente, este se carga en app-root, que lo encontramos en el index.html */
  templateUrl: './app.component.html', //** Esta es la vista del componente */
  styleUrls: ['./app.component.css'] //** Estos son los estilos css */
})
export class AppComponent {
  public title = 'Master de JavaScript y Angular'; //** Al cambiarle el nombre ya se ve reflejado en el app.component.html9 */
  public descripcion: string;
  public mostrar_videojuegos: boolean = true; //** Esto es para mostrar el ngOnDestroy */
  public config;

  constructor(){
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripción;
  }

  ocultarVideojuegos(value){ //** Esto se va a ejecutar cuando lanze un evento click que se va a definir en el app.component.html */
    this.mostrar_videojuegos = value;
  }
}
