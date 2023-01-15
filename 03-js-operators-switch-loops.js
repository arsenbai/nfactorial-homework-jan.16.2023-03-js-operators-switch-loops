/* ------------- Intro Assignment -------------
Создайте объект user. 
Узнайте у user-a его имя, возраст, является ли он мужчиной или женщиной. 
Запишите все в объект. 
И выведите в консоли.*/
console.log("Intro Assignment");

// init object
const user = {};

// parse name data
let name = prompt("What is your name?", "");
while (name === "") {
    name = prompt("What is your name?", "");
}

// assign name to object
user.name = name;


// parse age data
let age = prompt("How old are you? (in years)", "");
while (age == "") {
    age = prompt("How old are you? (in years)", "");
}

// assign age to object
user.age = age;


// parse sex data
let userSex = prompt("What is your gender?", "");
// assign sex to object
user.sex = userSex;

// output result
console.log(user);



/* ------------- Assignment: Работа с операторами. -------------
1. Используя конструкцию `if..else`, 
напишите код, который получает число через `prompt`, 
а затем выводит в `alert`. */
console.log("Assignment: Работа с операторами//result will appear at alert pop-up");

// ask user to indicate any number and then output the number via `alert`
let inputValue = prompt("Indicate any number", 0);
let res;
if (inputValue < 0) {
    res = `${inputValue} is negative value.`
} else if (inputValue > 0) {
    res = `${inputValue} is positive value.`
} else {
    res = `${inputValue} is zero or not a number.`
}

alert(res);


/* ------------- Assignment: Работа с условиями. -------------
1. Перепишите этот блок кода с использованием оператора `switch`.
*/

let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;

    default:
        break;
}



/* ------------- Assignment: Работа с циклами(loops). -------------
1. Посчитайте сумму всех четных чисел в промежутке 1-100. 
Выведите в консоль.
*/

let resultedSum = 0;
let startVal = 1;
let endVal = 100;

for (let tempValue = startVal; tempValue <= endVal; tempValue++) {
    if (tempValue % 2 == 0) {
        resultedSum += tempValue;
    }
}

console.log(`Sum of all even numbers from ${startVal} to ${endVal} = ${resultedSum}`);



/* ------------- Assignment: Работа с циклами(loops). -------------
2.  Перепишите цикл `for` на `while`.
for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
*/


let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    i++;
}