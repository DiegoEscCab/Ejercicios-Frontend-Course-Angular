var tijeras = "tijeras";
var piedra= "piedra";
var papel = "papel";

function resultado (user, cpu){
    switch(true){
            case cpu === user:
                console.log("Empate");
            break;
            case user === "tijeras" && cpu === "papel":
                console.log("El Usuario gana");
            break;
            case user === "piedra" && cpu === "tijeras":
                console.log("El Usuario gana");
            break;
            case user === "papel" && cpu === "piedra":
                console.log("El Usuario gana");
            break;                    
            default:
                console.log("Gana la CPU")
    }
}


resultado(tijeras, tijeras);