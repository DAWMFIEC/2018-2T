var Avenger = /** @class */ (function () {
    function Avenger(nombre) {
        this.nombre = undefined;
        this.equipo = undefined;
        this.puedePelear = undefined;
        this.peleasGanadas = undefined;
        console.log("Se ejecutó el constructor");
        this.nombre = nombre;
    }
    return Avenger;
}());
var antman = new Avenger("antman");
console.log(antman);
