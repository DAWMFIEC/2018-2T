import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalizado'
})
export class CapitalizadoPipe implements PipeTransform {
	transform(value: string, todas:boolean = true): string {

		// console.log(value, arg1, arg2, arg3);
		value = value.toLowerCase();

		let nombres = value.split(" ")

		if(todas) {
			for(let i in nombres) {
				nombres[i] = nombres[i][0].toUpperCase() + nombres[i].substring(1)
			}	
		} else {
			nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substring(1)
		}
		

		return nombres.join(" ");
	}
}