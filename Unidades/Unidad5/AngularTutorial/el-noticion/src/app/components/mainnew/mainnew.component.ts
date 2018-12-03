import { Component, OnInit } from '@angular/core';
import { NoticiasService,Noticia } from '../../services/noticias.service';
import { MainnewService } from '../../services/mainnew.service';

@Component({
  selector: 'app-mainnew',
  templateUrl: './mainnew.component.html',
  styleUrls: ['./mainnew.component.css']
})
export class MainnewComponent implements OnInit {

  idx:number = 0;
  noticia:Noticia;

  constructor(private _servicioNoticias:NoticiasService, 
              private mainnewService: MainnewService) { 
    
  }

  ngOnInit() {
    this.setNew(this.idx);
    this.mainnewService.change.subscribe((_idx) => {
     this.setNew(_idx);
    });  
  }

  setNew(_idx:number) {
    this.idx = _idx;
    this.noticia = this._servicioNoticias.getNoticia(this.idx); 
  }

}
