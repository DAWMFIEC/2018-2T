import { Component } from '@angular/core';

@Component({
	selector: 'app-body',
	templateUrl: './body.component.html'
})

export class bodyComponent {

	mostrar:boolean = true;

	mensaje:any = {
		texto:"Un gran poder conlleva una gran responsabilidad",
		autor:"Ben Parker"
	}


	personajes:string[] = ["Spiderman", "Venom", "Dr. Octopus"]

}