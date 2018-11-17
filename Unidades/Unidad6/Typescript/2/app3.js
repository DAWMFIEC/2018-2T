function activar(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Gordon", "cosa", "tarde");
var funcion = function (a) {
    return a;
};
var funcionF = function (a) { return a; };
console.log(funcion(2));
console.log(funcionF(2));
var function2F = function (a, b) { return a + b; };
console.log(function2F(2, 3));
var function3F = function (a, b, c) {
    var r = a + b;
    var d = r + c;
    return d;
};
console.log(function3F(2, 1, 0));
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!"); }, 1500);
    }
};
hulk.smash();
var avenger = {
    nombre: "Steve",
    clave: "Captain America"
};
var clave = avenger.clave, nombre = avenger.nombre;
console.log(clave, nombre);
var avengers = ["Thor", "Tony"];
var thor = avengers[0], ironman = avengers[1];
console.log(ironman, thor);
