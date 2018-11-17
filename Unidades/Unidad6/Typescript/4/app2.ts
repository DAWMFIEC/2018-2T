class Avenger {
	nombre:string = undefined;
	equipo:string = undefined;
	puedePelear:boolean = undefined;
	peleasGanadas:number = undefined;

	constructor(nombre:string) {
		console.log("Se ejecutó el constructor")
		this.nombre = nombre;
	}
}

let antman:Avenger = new Avenger("antman");
console.log(antman)