// Ejercicio 1

let myFavouriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
console.log(z);

// Ejercicio 2

// 1.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
console.log(character.age)

// 1.2
let firstName = 'Jon';
let lastName = 'Snow';
let age = 24;
console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.');

// 1.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
console.log(toy1.price + toy2.price);

// 1.4
let globalBasePrice = 10000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
globalBasePrice = 25000;
car1.finalPrice = globalBasePrice + car1.basePrice;
car2.finalPrice = globalBasePrice + car2.basePrice;
console.log(globalBasePrice)
console.log(car1.finalPrice)
console.log(car2.finalPrice)

// Ejercicio 3

const number1 = 10;
const number2 = 20;
const number3 = 2;

// ejemplo
if(number1 === 10){
    console.log('number1 es estrictamente igual a 10')
}

// desarrollo
if ((number2 / number1) == 2) {
  console.log("number2 dividido entre number1 es igual a 2");
}

if (number1 !== number2) {
  console.log("number1 es estrictamente distinto a number2");
}

if (number3 !== number1) {
  console.log("number3 es distinto number1");
}

if ((number3 * 5) == number1) {
  console.log("number3 por 5 es igual a number1");
}

if (((number3 * 5) == number1) && ((number1 * 2) == number2)) {
  console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
}

if (((number2 / 2) == number1) || ((number1 / 5) == number3)) {
  console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
}