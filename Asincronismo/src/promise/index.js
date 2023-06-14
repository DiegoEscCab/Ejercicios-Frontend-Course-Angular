const promise = new Promise(function (resolve, reject){
    resolve('Hey!')
});

/// Promesas con catch y then

const cow = 9;

const countCows = new Promise(function(resolve, reject) {
    if(cow > 10){
        resolve(`Si tenemos el minimo deseado, hay ${cow} vacas.`);
    } else {
        reject(`No tenemos las vacas minimas para el trabajo, hay ${cow} vacas`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finaly'));