// function moneyBox(coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox is: $${saveCoins}`);
// }
// 
// moneyBox(5);


function moneyBox(){
    let saveCoins = 0;
        function countCoins(coins){
            saveCoins += coins;
            console.log(`MoneyBox is: $${saveCoins}`);
        }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(3);
myMoneyBox(13);

const moneyBoxSilvana = moneyBox();
moneyBoxSilvana(15);
moneyBoxSilvana(20);
moneyBoxSilvana(15);

// Ejercicio 

function createPetList() {
    const petList = [];
        function addPet(pet) {
      if (pet) {
        petList.push(pet);
      }
        return petList;
      }
      return addPet;
  }
