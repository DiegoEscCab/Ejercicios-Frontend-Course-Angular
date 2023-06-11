function greeting(){
    let userName = 'Silvana'; ///asignamos y declaramos variable
    console.log(userName); // consultamos variable

    if(userName === 'Silvana'){  //realizamos nuestra funcion de variable en modo local
        console.log(`Hello ${userName}!`);
    }
}

greeting();
console.log(userName); // por esa razon no se puede acceder con esta funcion fuera de la funcion 'greeting'