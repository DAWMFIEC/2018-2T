import { Injectable, Output, EventEmitter } from '@angular/core';
import { Noticia } from './noticias.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainnewService {
  
  @Output() change: EventEmitter<number> = new EventEmitter();
  idx:number;

  constructor() { }

  setNew(_idx:number) {
  	this.idx = _idx;
    this.change.emit(this.idx);
  }

  getNew():Observable<number> {
    return of(this.idx)
  }
}
