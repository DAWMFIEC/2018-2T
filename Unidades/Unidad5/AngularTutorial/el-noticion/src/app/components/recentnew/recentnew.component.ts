import { Component, OnInit, Input, HostListener } from '@angular/core';
import { NoticiasService,Noticia } from '../../services/noticias.service';
import { MainnewService } from '../../services/mainnew.service';

@Component({
  selector: 'app-recentnew',
  templateUrl: './recentnew.component.html',
  styleUrls: ['./recentnew.component.css']
})
export class RecentnewComponent implements OnInit {

  @Input() idx:number;
  titulo:string;

  constructor(private mainnewService: MainnewService,
              private noticiasService: NoticiasService) {
  	
  }

  ngOnInit() {
    this.titulo = this.noticiasService.getNoticia(this.idx).titulo;
  }

  @HostListener('click')
  click() {
    this.mainnewService.setNew(this.idx);
  }

}
