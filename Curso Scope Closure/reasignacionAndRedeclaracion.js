var firstName; // Es un valor 'undefined'
firstName = "Diego";
console.log(firstName);

var lastName =  'Escobedo'; // declarar y asignar
lastName = 'Silvana'; //reasignar
console.log(lastName); // mostrar

var secondName = 'David'; //declarando y asignando
var secondName = 'Ana';   //reasignando
console.log(secondName); // mostrar


// Let
let fruit = 'Apple'; // declarar y asignar
fruit = 'Kiwi';  //reasignar

let fruit = 'Banana'; // no se puede redeclarar una variable let

//Const || no se puede reasignar ni redeclarar una variable

const animal = 'dog'; //declarar y asignar
//animal = 'cat'; //reasignando
console.log(animal);

const vehicles = [];
vehicles.push("Honda");
console.log(vehicles);
vehicles.pop();
console.log(vehicles);