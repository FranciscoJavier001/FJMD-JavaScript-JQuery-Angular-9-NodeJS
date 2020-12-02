//** Para crear un componente desde la terminal hay que usar ng generate component cursos, lo agrega ya a app.module.ys, pero hay que cambiarle el selector */
//** Los hoks son eventos que se van a lanzar dependiendo del estado en el que este el componente, cuando iniciemos el componente, cuando hagamos un cambio en el componente, etc, uno muy importante es el OnInit */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre: string;
  public followers: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() { //** Se ejecuta al cargar un componente */
    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre;
      this.followers = +params.followers;
      
      if(this.nombre == 'ninguno')
      this._router.navigate(['/home']);
    });
  }

  redirigir(){
    this._router.navigate(['/zapatillas'])
  }
}
