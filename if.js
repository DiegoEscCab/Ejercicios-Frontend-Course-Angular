var edad = 18;

if(edad === 18){
    console.log("Puedes votar, es la primera participacion");
} else if(edad > 18 ){
    console.log("Puedes volver a votar");
} else {
    console.log("Aun no puedes votar");
}

//condition ? true : false;
var resultado = edad === 18 ? "Puedes votar" : "Aun no puedes votar";
console.log(resultado);


// reto Piedra, papel o tijera

var r = "Rock";
var p = "Paper";
var s = "Scissors";

var resultado = function(user, cpu){
    if(user != cpu){
        if(user === "Rock" && cpu === "Scissors"){
        console.log("El Usuario gana");
      } else if(user === "Paper" && cpu === "Rock"){
        console.log("El Usuario gana");
      } else if(user === "Scissors" && cpu === "Paper"){
        console.log("El Usuario gana");
      } else if(user === cpu){
        console.log("Empate");
      } else {
        console.log("El CPU gana")
      }
      }
    } 

resultado(r,p);