console.log(`-------------- 6. String --------------`);
// String Indexing
console.log(`>> String Indexing`);
let firstName = "Shubham";
console.log(firstName[3]);
console.log(firstName[6]);

// Length of a String
console.log(`>> Length of a String`);
console.log(firstName.length);

// Last Index
console.log(`>> Last Index`);
console.log(firstName.length - 1);

// Last Index element
console.log(`>> Last Index element`);
console.log(firstName[firstName.length - 1]);

// trim()
console.log(`>> trim()`);
let lastName = "     Sharma      ";
console.log(lastName.length);

let newName = lastName.trim();
console.log(newName.length);

// toUpperCase()
console.log(`>> toUpperCase()`);
let firstName1 = "shubham";
console.log(firstName1.toUpperCase());

// slice()
console.log(`>> slice()`);
let firstName2 = "Shubham";
console.log(firstName2.slice(0, 4));
console.log(firstName2.slice(1));

/* typeOf operator 
7 primitive data-types are string, number, boolean, BigInt, null, undefined and symbol */
console.log(`>> typeOf Operator`);
let age = 22;
let name = "Shubham";
console.log(typeof age);
console.log(typeof name);

// Convert number to a string
console.log(`>> Convert number to a string`);
let age1 = 22;
age1 = age1 + " ";
console.log(typeof age1);

let age2 = 22;
age2 = String(age2);
console.log(typeof age2);

// Convert string to a number
console.log(`>> Convert string to a number`);
let name1 = +"Shubham";
console.log(typeof name1);

let name2 = "Shubham";
name2 = Number(name2);
console.log(typeof name2);

// Template String
console.log(`>> Template String`);
let age3 = 22;
let firstName3 = "harshit";
let aboutMe = `My name is ${firstName3} and my age is ${age3}`;
console.log(aboutMe);

// undefined
console.log(`>> undefined`);
let firstName4;
console.log(firstName4);
console.log(typeof firstName4);

var firstName5;
console.log(firstName5);
console.log(typeof firstName5);

/* const firstName6;
console.log(firstName6); */ // Uncaught SyntaxError: Missing initializer in const declaration

let firstName6;
console.log(typeof firstName6);
firstName6 = "Shubham6";
console.log(typeof firstName6);

// null
console.log(`>> null`);
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable);
console.log(typeof null);

// BigInt
console.log(`>> BigInt`);
let myNumber = BigInt(123);
console.log(myNumber);
// OR
let myNumber1 = 123n;
console.log(myNumber1);
/*
let myNumberOne = BigInt(123);
let myNumberTwo = 123;
console.log(myNumberOne + myNumberTwo); */ // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions


console.log(`-------------- 7. == v === --------------`);
let num1 = 7; // typeOf number
let num2 = 7; // typeOf number
console.log(num1 == num2);
console.log(num1 === num2);

let numberOne = 8; // typeOf number
let numberTwo = "8"; // typeOf string
console.log(numberOne == numberTwo);
console.log(numberOne === numberTwo);


console.log(`-------------- 8. Ternary Operator --------------`);
let ageAge = 18;
let drink;
if (ageAge >= 5) {
    drink = "Coffee";
} else {
    drink = "Milk";
}
console.log(drink);

let ageLimit = 8;
let beverage = ageLimit >= 5 ? "Coffee" : "Milk";
console.log(beverage);


console.log(`-------------- 9. Switch Statement --------------`);
let day = 2;
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid");
}


console.log(`-------------- 10. While Loop --------------`);
// While Loop
let i = 0;
while (i <= 3) {
    console.log(i);
    i++;
}

// Sum of first 10 natural numbers using while loop
console.log(`>> Sum of first 10 natural numbers using while loop`);
let ii = 0;
let num = 10;
let total = 0;
while (ii <= num) {
    total += ii;
    ii++;
}
console.log(total);
// OR
let n = 10
let sum = (n * (n + 1)) / 2;
console.log(sum);


console.log(`-------------- 11. for Loop --------------`);
for (let i = 0; i <= 3; i++) {
    console.log(i);
}

let x = 0;
for (; x <= 3; x++) {
    console.log(x);
}

// Sum of first 10 natural numbers using for loop
console.log(`>> Sum of first 10 natural numbers using for loop`);
let addition = 0;
for (let i = 1; i <= 10; i++) {
    addition += i;
}
console.log(addition);


console.log(`-------------- 12. Break keyword --------------`);
for (let i = 20; i <= 30; i++) {
    if (i === 24) {
        break;
    }
    console.log(i);
}
console.log("Out of the loop");


console.log(`-------------- 13. Continue keyword --------------`);
for (let i = 30; i <= 34; i++) {
    if (i === 32) {
        continue;
    }
    console.log(i);
}
console.log("Out of the loop");


console.log(`-------------- 14. do while loop --------------`);
let y = 10;
do {
    console.log(y);
    y++;
} while (y <= 9);
console.log(`Current value of y is ${y}`);


console.log(`-------------- 16. Arrays --------------`);
let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);
console.log(fruits[0]);

let numbers = [1, 2, 3, 4];
console.log(numbers);

let mixedDataTypes = [1, 2, 7.14, "Shubham", null, undefined];
console.log(mixedDataTypes);

let fruits1 = ["Apple", "Mango", "Grapes"];
console.log(fruits1);
fruits1[1] = "Banana";
console.log(fruits1);

console.log(typeof fruits1);
console.log(Array.isArray(fruits1));

// push()
console.log(`>> push()`);
let fruits2 = ["apple", "mango", "grapes"];
console.log(fruits2);
fruits2.push("bananas");
console.log(fruits2);

// pop()
console.log(`>> pop()`);
console.log(fruits2);
fruits2.pop();
console.log(fruits2);

// unshift()
console.log(`>> unshift()`);
console.log(fruits2);
fruits2.unshift("banana");
console.log(fruits2);

// shift()
console.log(`>> shift()`);
console.log(fruits2);
fruits2.shift();
console.log(fruits2);

// clone arrays with slice()
console.log(`>> clone arrays with slice()`);
let array2 = ["item1", "item2"];
let array3 = array2.slice(0);
console.log(array2);
console.log(array3);

array2.push("item3");
console.log(array2);
console.log(array3);

// clone arrays with concat()
console.log(`>> clone arrays with concat()`);
let array4 = ["item1", "item2"];
let array5 = [].concat(array4);
console.log(array4);
console.log(array5);

array4.push("Item30");
console.log(array4);
console.log(array5);

let cloneArr = ["item1", "item2"].concat(["item30"]);
console.log(cloneArr);

let originalArr = ["item1", "item2"];
let concatArr = [].concat(originalArr, ["Item30"]);
console.log(concatArr);

// clone arrays with spread operator
console.log(`>> clone arrays with spread operator`);
let array6 = ["item1", "item2"];
let array7 = [...array6];
console.log(array6);
console.log(array7);

array6.push("Item99");
console.log(array6);
console.log(array7);

let spreadArr = [...originalArr, "item30"];
console.log(spreadArr);

// clone arrays using both slice() and concat()
console.log(`>> clone arrays using both slice() and concat()`);
let array8 = ["item1", "item2"];
let array9 = array8.slice(0).concat(["item3"]);
console.log(array9);

// for-loop in array
console.log(`>> for-loop in array`);
let fruits3 = ["apple", "mango", "grapes", "banana"];
for (let i = 0; i <= fruits3.length - 1; i++) {
    console.log(i, fruits3[i]);
}

// Using const for creating an array
console.log(`>> Using const for creating an array`);
const fruits4 = ["apple", "mango"];
fruits4.push("banana");
console.log(fruits4);

// Using for of loop in array (values).
console.log(`>> Using for of loop in array (values)`);
const fruits5 = ["apple", "mango", "grapes"];
for (let val of fruits5) {
    console.log(val);
}

// Using for in loop in array (indexes).
console.log(`>> for in loop in array (indexes)`);
const fruits6 = ["apple", "mango", "grapes"];
for (let index in fruits5) {
    console.log(index, fruits5[index]);
}


console.log(`-------------- 17. Primitive v Reference Data Types --------------`);
// Primitive Data Type
console.log(`>> Primitive Data Type`);
let number1 = 6;
let number2 = number1;
console.log(`Value of number1 is ${number1}`);
console.log(`Value of number1 is ${number2}`);
number1++;
console.log(`Value of number1 is ${number1}`);
console.log(`Value of number1 is ${number2}`);

// Reference Data Type
console.log(`>> Reference Data Type`);
let array = ["item1", "item2"];
let array1 = array;
console.log(`Value of array is ${array}`);
console.log(`Value of array1 is ${array1}`);
array.push("item3");
console.log(`Value of array is ${array}`);
console.log(`Value of array1 is ${array1}`);