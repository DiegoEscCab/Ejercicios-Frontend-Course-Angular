const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;      //llamado al XMLHttpRequest
const API = 'https://api.escuelajs.co/api/v1';  // API en mayuscula porque es una referencia y no va a cambiar

function fechtData(urlApi, callback){           // no confundir con API
    let xhttp = new XMLHttpRequest();           //referencia a XMLHttpRequest
    
    xhttp.open('GET', urlApi, true);            // peticion obtener "GET" con true para habilitar
    xhttp.onreadystatechange = function(event){ //funcion que escucha diferentes estados de la solicitud y conocer cuando esta disponible la informacion
        if(xhttp.readyState === 4){             // si el estado ha sido completado
            if (xhttp.status === 200){           // el servidor responde de forma correcta
                callback(null, JSON.parse(xhttp.responseText))  //dentro de xhttp.responseText recibimos lo qeu entrega el servidor en texto y se hace transformacion a formato JSON
            } else {
                const error = new Error('Error' + urlApi);
                return callback(error, null);       // null porque no esta regresando ningun dato
            }
        } 
    }
    xhttp.send();
}

fechtData(`${API}/products`, function(error1, data1) {
    if(error1) return console.error(error1);
    fechtData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fechtData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});