var fruits = ["Apple", "Banana", "Cherry","Strawberry"];

console.log(fruits);
console.log(fruits.length)
console.log(fruits[0]);
var moreFruits = fruits.push("Grapes");
var ultimo = fruits.pop("Grapes");
var nuevaLongitud = fruits.unshift("Grapes");
var borrarFruta = fruits.shift("Grapes");
var posicion = fruits.indexOf("Cherry");


/////////// FOR ////////////// 
var students = ["Maria","Diego","Silvana","Daniel"];

function saludar(students){
    console.log(`Hola, ${students}`);
}

for(var i = 0; students.length > i ; i++){
      saludar(students[i]); 
    }

/////////// FOR OF //////////////

var students = ["Maria","Diego","Silvana","Daniel"];

function saludarForOf(student){
    console.log(`Hi ${student}, welcome`);
}

for(var student of students){
    saludarForOf(student);
}