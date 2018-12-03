import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-requestrest',
  templateUrl: './home.component.html',
  styles: []
})
export class RequestRESTComponent implements OnInit {

  paises:any[] = [];
  url:string = 'https://restcountries.eu/rest/v2/lang/es';

  constructor(private http:HttpClient) { 
  	this.http.get(this.url).subscribe((data:any) => {
  		this.paises = data;
  	})
  }

  ngOnInit() {
  }

}