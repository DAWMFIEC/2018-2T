var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        reject();
    }, 1500);
});
console.log("step1");
prom1.then(function () { return console.log("resolve"); }, function () { return console.error("reject"); });
console.log("step2");
