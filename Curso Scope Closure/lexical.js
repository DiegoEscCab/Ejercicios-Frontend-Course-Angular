const myGlobal = 0;

function myFunction(){
    const myNumber = 1;
    console.log(myGlobal);

    function parent(){ //esto es un closure (funcion interna)
        const inner = 2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner, myNumber, myGlobal);
        }

        return child();
    }

    return parent();
}

myFunction();


// Reto de alcancia con suma y mostrar que cantidad hay dentro
var firstNum = 2;

function sumWithClosure(firstNum) {
    function sum(secondNum = 3) {
      return firstNum + secondNum;
    }
    return sum();
  }
sumWithClosure(2);
