var car = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2007,
    transmision: "automatica",
    puertas: 5,
    color: "azul-marino",
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.ano}`);
    }
};
car.detalleDelAuto(); // este es para acceder a la funcion "detalleDelAuto"
car.color; //esto es una forma mas simple y objetiva de acceder a un solo dato