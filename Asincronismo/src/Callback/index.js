function sum(num1, num2){
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callBack){
    return callBack(num1,num2)
};

console.log(calc(5, 7, mult));

/////////////Set timeout ////////////
setTimeout(function () {
    console.log("Hola JavaScript");
}, 2000)

function saludo(name){
    console.log(`Hola ${name}`);
}

setTimeout(saludo, 2000, 'Diego');