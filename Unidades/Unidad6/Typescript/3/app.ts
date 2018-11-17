let prom1 = new Promise( function(resolve , reject ) {

	setTimeout(() => { 
		console.log("Promesa terminada")
		reject() 
	}, 1500);
});

console.log("step1")
prom1.then(() => console.log("resolve"), () => console.error("reject"))
console.log("step2")