var a; // declarar variable
var b = "b"; // declaramos y asignamos variable
var b = "bb" // reasignacion de valor
var a = "aa" // redeclaracion de variable


// Global Scope
var fruit = "Apple"; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

//esto es demostracion de crear una variable global dentro de un area que no se debe

function  countries(){
    country = "Mexico";
    console.log(country);
}

countries();
console.log(countries);