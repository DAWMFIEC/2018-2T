import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fecha:string;

  constructor() { }

  ngOnInit() {
  	moment.locale('es');
  	let arrFecha:string[] =  moment().format('dddd, DD MMMM YYYY').split(" ");
  	
  	this.fecha = [this.convertir(arrFecha[0]), arrFecha[1], 
			  	' de ',
			  	this.convertir(arrFecha[2]), 
			  	' de ', 
			  	arrFecha[3]].join(' ');
  }

  convertir(dato:string):string {
  	return dato.toLowerCase().split(' ').map(function(word) {
    	return word.replace(word[0], word[0].toUpperCase());
  	}).join(' ');
  }

}
