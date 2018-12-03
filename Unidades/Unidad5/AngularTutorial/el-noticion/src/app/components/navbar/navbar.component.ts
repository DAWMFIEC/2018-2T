import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  enlaces:any[] = [
  	{nombre:"Noticias", ruta:""},
  	{nombre:"Deportes", ruta:""},
 	{nombre:"Espectáculos", ruta:""},
  	{nombre:"Videos", ruta:""},
  	{nombre:"Internacionales", ruta:""},
  	{nombre:"Acerca", ruta:"about"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
