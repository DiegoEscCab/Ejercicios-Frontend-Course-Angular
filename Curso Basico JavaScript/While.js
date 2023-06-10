var students = ["Maria","Diego","Silvana","Daniel"];

function saludarForOf(student){
    console.log(`Hi ${student}, welcome`);
}

while( students.length > 0){
    var student = students.shift();
    saludarForOf(student);
}


////////////Reto Platzi//////////////

export function solution(estudiantes, deathCount, nuevo) {
    while (deathCount > 0) {
      estudiantes.pop();
      deathCount--;
    }
  
    estudiantes.push(nuevo);
    return estudiantes;
  }