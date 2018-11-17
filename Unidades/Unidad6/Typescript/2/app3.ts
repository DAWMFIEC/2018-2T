function activar(quien:string, 
	objeto:string = "batiseñal",
	momento?:string) {
	
	let mensaje:string;
	if(momento) {
		mensaje = `${quien} activó la ${objeto} en la ${momento}`
	}
	else {
		mensaje = `${quien} activó la ${objeto}`
	}
	console.log(mensaje)
}

activar("Gordon", "cosa", "tarde")

let funcion = function( a) {
	return a;
}

let funcionF = a => a;

console.log(funcion(2))
console.log(funcionF(2))

let function2F = (a:number, b:number) => a + b

console.log(function2F(2,3))

let function3F = (a:number, b:number, c:number) => {
	var r = a + b;
	var d = r + c
	return d
}

console.log(function3F(2,1,0))

let hulk = {
	nombre: "Hulk",
	smash() {
		setTimeout( () => console.log(this.nombre + " smash!!"), 1500 )
	}
}

hulk.smash()

let avenger = {
	nombre: "Steve",
	clave: "Captain America"
}

let {clave, nombre} = avenger;

console.log(clave, nombre)

let avengers:string[] = ["Thor", "Tony"]

let [thor, ironman] = avengers;

console.log(ironman, thor)