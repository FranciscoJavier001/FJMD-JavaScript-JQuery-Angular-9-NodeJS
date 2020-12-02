//** Importamos los modulos */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component'; //** Aqui lo importamos y abajo lo implementamos */
import { ZapatillasComponent } from './zapatillas/zapatillas.component'; //** Ya lo agregamos */
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';
import { ExternoComponent } from './externo/externo.component';

import { CalculadoraPipe } from './pipes/calculadora.pipe';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({ //** Decorador que nos permite configurar el modulo */
  declarations: [ //** declarations nos sirve para cargar nuestros componentes, nuestros pipes y nuestras directivas */
    AppComponent,
    VideojuegoComponent, //** De videojuego.component.ts lo exportamos aqui, aqui lo declaramos */
    ZapatillasComponent, //** Ya lo agregamos */
    CursosComponent,
    HomeComponent,
    ExternoComponent,
    CalculadoraPipe,
    ContactoComponent
  ],
  imports: [BrowserModule, FormsModule, routing, HttpClientModule], //** Para cargar modulos que hayamos creado nosotros */
  providers: [appRoutingProviders], //** Para los servicios */
  bootstrap: [AppComponent], //** Vamos a usar bootstrap en nuestro componente para darle estilos */
})
export class AppModule {} //** Aqui simplemente exportamos el modulo */