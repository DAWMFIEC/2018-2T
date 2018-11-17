interface Xmen {
	nombre:string,
	poder:string
}

function enviarMision(xmen:Xmen) {
	console.log("Enviando a "+xmen.nombre)
}

let wolverine:Xmen = {
	nombre : "Logan",
	poder : "Regeneracion"
}

enviarMision(wolverine)