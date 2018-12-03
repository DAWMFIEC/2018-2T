import { Component, OnInit, Input } from '@angular/core';
import { NoticiasService, Noticia } from '../../services/noticias.service';

@Component({
  selector: 'app-recentnews',
  templateUrl: './recentnews.component.html',
  styleUrls: ['./recentnews.component.css']
})
export class RecentnewsComponent implements OnInit {

  noticias:Noticia[] = [];

  constructor(private _servicioNoticias:NoticiasService) { 
  	
  }

  ngOnInit() {
    //Precarga de todas las noticias
  	this.noticias = this._servicioNoticias.getNoticias();
  }



}
