// Ejercicio (clase)

let myFavouriteHero = "Hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
console.log(z);

// Ejercicio 2 (clase)

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

// Ejercicio 3 (clase)

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

// Iteración #3: Operadores
// 1.1 Multiplica 10 por 5 y muestra el resultado mediante alert.

// 1.2 Divide 10 por 2 y muestra el resultado en un alert.

// 1.3 Muestra mediante un alert el resto de dividir 15 por 9.

// 1.4 Usa el correcto operador de asignación que resultará en x = 15, 
// teniendo dos variables y = 10 y z = 5.

// 1.5 Usa el correcto operador de asignación que resultará en x = 50,
// teniendo dos variables y = 10 y z = 5.

// Desarrollo
// 1.1
alert(10 * 5);
// 1.2
alert(10 / 2);
// 1.3
alert(15 % 9);
// 1.4 
let y = 10;
let z = 5;
let x = y;

x += z;
// 1.5
let y = 10;
let z = 5;
let x = y;

x *= z;

// Iteración #6: Bucles
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.

// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo 
// cuando el resto del numero dividido entre 2 sea 0.

// 1.3 Crea un bucle para conseguir dormir contando ovejas. 
// Este bucle empieza en 0 y termina en 10. 
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle 
// y cambia el mensaje en la última vuelta a 'Dormido!'.

// Desarrollo
// 1.1
for (let i = 0; i < 10; i++) {
  console.log(i);
};
// 1.2
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
};
// 1.3
for (let i = 0; i <= 10; i++) {
  if (i < 10) {
    console.log("Intentando dormir");
  } else {
    console.log("Dormido")
  }
};