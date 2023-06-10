autos = [];
function generarAuto(marca, modelo, annio){

    for(var i = 0; autos < 30; i++){
        var marca = prompt("Ingresa marca del auto");
        var modelo = prompt("Ingresa modelo del auto");
        var annio = prompt("Ingresa annio del auto");

        var newAuto = autos.push(marca, modelo, annio);
        autos.shift(newAuto);
    }
}

console.log(autos);