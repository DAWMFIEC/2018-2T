import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, convertir: boolean): string {
    let palabra:string[] = []
    for(let letra of value) {
    	if(convertir) {
    		palabra.push('*')	
    	} else {
    		palabra.push(letra)
    	}
    	
    }
    return palabra.join('')
  }

}
