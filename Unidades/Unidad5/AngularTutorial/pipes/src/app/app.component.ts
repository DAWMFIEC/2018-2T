import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';

  nombre:string=  'allan';
  arreglo:number[] = [2,6,2,1,10,3,5,2,1,5,7,20,3,1]

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
  	nombre:'Logan',
  	clave:'wolverine',
  	edad:500,
  	direccion:{
  		calle:'Primera',
  		casa:'19'
  	}
  }

  valorPromesa = new Promise( (resolver, rechazar) => {
  	setTimeout( () => resolver('Llegando la data'), 3500)
  })

  fecha = '2018-11-19'

  nombre2 = 'aLLan AvEndaño'

  video = 'KxMXApJzcII'

  activar:boolean = true;

}
