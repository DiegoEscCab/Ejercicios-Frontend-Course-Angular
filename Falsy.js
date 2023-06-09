// Falsy

Boolean() //ningun valor es false
Boolean(0) 
Boolean(null) 
Boolean(NaN)  // NaN es Not and Number
Boolean(Undefined) 
Boolean(false) 
Boolean("") 
//Truthy

Boolean(1) //cualquier numero que no sea igual a cero es true
Boolean("a") 
Boolean(" ") // siendo un espacio el valor es true
Boolean([])  // un array nos da un true
Boolean({}) // un objeto nos da el valor de true
Boolean(function() {})  //una funcion tambien es true
Boolean(true) 
