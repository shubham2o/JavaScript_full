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

// Array Destructuring
console.log(`>> Array Destructuring`);
const myArray = ["value1", "value2"];
let myVar1 = myArray[0];
let myVar2 = myArray[1];
console.log(myVar1);
console.log(myVar2);

let [myVar3, myVar4] = myArray;
console.log(myVar3);
console.log(myVar4);

const [myVar5, myVar6] = myArray;
console.log(myVar5);
console.log(myVar6);

let [myVar7, myVar8] = myArray;
myVar7 = "Value Changed in let";
console.log(myVar7);
console.log(myVar8);

/* const [myVar9, myVar10] = myArray;
myVar9 = "Value Changed in const";
console.log(myVar9);                // Uncaught TypeError: Assignment to constant variable.
console.log(myVar10); */ //

const myArr = ["value30"];
let [myArr11, myArr12, myArr13] = myArr;
console.log(myArr11);
console.log(myArr12);
console.log(myArr13);

const myArray1 = ["value10", "value20", "value30"];
let [myArr14, , myArr15] = myArray1;
console.log(myArr14);
console.log(myArr15);

const myArray2 = ["value100", "value200", "value300", "value400"];
let [myArr16, myArr17, ...newArray] = myArray2;
console.log(myArr16);
console.log(myArr17);
console.log(newArray);


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


console.log(`-------------- 18. Objects or Object Literals --------------`);
// How to create an object
console.log(`>> How to create an object`);
const person = {
    name: "John", // key(property) : "value"
    age: 22
};
console.log(person);
console.log(typeof person);
console.log(person.name);
console.log(person.age);

const person1 = {
    name: "James",
    age: 22,
    hobbies: ["guitar", "sleeping", "listening music"]
}
console.log(person1.hobbies);

// How to add key value pairs to objects
console.log(`>> How to add key value pairs to objects`);
person1.gender = "male";
console.log(person1);

// How to access data from objects
console.log(`>> How to access data from objects`);
console.log(person1.name);
console.log(person1["name"]);
console.log(person1['name']);
console.log(person1[name]);

const person2 = {
    "name": "Stephen",
    "age": 35,
    "Hobbies": ["guitar", "sleeping", "listening music"]
}
console.log(person2)
console.log(person2.name);

// Another way  to add key value pairs to objects
console.log(`>> Another way to add key value pairs to objects`);
person2["gender"] = "male";
console.log(person2);
console.log(person2['gender']);

// How to iterate Objects using for in loop
console.log(`>> How to iterate Objects using for in loop`);
for (let key in person2) {
    console.log(key, person2[key]);
}

for (let key in person2) {
    console.log(`${key}: ${person2[key]}`);
}

// How to iterate Objects using Object.keys() ==> It returns an array containing the keys of object.
console.log(`>> How to iterate Objects using Object.keys()`);
console.log(Object.keys(person2));
for (let val of Object.keys(person2)) {
    console.log(val, person2[val]);
}

// Computed Properties
console.log(`>> Computed Properties`);
const key1 = "objKey1";
const key2 = "objKey2";
const value1 = "myValue1";
const value2 = "myValue2";

const obj = {
    [key1]: value1,
    [key2]: value2,
}
console.log(obj);
// OR
const obj1 = {};
obj[key1] = value1;
obj[key2] = value2;
console.log(obj);

// Spread Operator
console.log(`>> Spread Operator`);
const array10 = [1, 2, 3];
const array11 = [5, 6, 7];

const newArray1 = [...array10];
console.log(newArray1);

const newArray2 = [...array10, ...array11];
console.log(newArray2);

const newArray3 = [...array10, array11];
console.log(newArray3);

const newArray4 = [..."abc"];
console.log(newArray4);

const newArray5 = [..."123"];
console.log(newArray5);

// Spread Operator in Objects
console.log(`>> Spread Operator in Objects`);
const obj2 = {
    key1: "value1",
    key2: "value2",
}
const obj3 = {
    key3: "value3",
    key4: "value4",
}
const myObj1 = {
    ...obj2,
    ...obj3
};
console.log(myObj1);

const obj4 = {
    key1: "value1",
    key2: "value2",
}
const obj5 = {
    key1: "value30",
    key4: "value4",
    key5: "value5",
}
const myObj2 = {
    ...obj4,
    ...obj5
}
console.log(myObj2);

const obj6 = {
    key1: "value1",
    key2: "value2",
}
const obj7 = {
    key1: "valueUnique",
    key4: "value4",
    key5: "value5",
}
const myObj3 = {
    ...obj7,
    ...obj6
}
console.log(myObj3);

const obj8 = {
    key1: "value1",
    key2: "value2",
    key3: "value999",
}
const obj9 = {
    key1: "valueUnique",
    key3: "value3",
}
const myObj4 = {
    ...obj8,
    ...obj9
}
console.log(myObj4);

const obj10 = {
    key1: "value1",
    key2: "value2",
    key3: "value999",
}
const obj11 = {
    key1: "valueUnique",
    key3: "value3",
}
const myObj5 = {
    ...obj11,
    ...obj10
}
console.log(myObj5);

const obj12 = {
    key1: "value1",
    key2: "value2",
}
const obj13 = {
    key1: "valueUnique",
    key3: "value3",
    key4: "value4",
}
const myObj6 = {
    ...obj13,
    ...obj12,
    key69: "value69"
}
console.log(myObj6);

const newObj7 = {
    ...["item10", "item20", "item30"]
};
console.log(newObj7);

// Object Destructuring
console.log(`>> Object Destructuring`);
const band = {
    bandName: "Led Zeppelin",
    famousSong: "Stairway to Heaven",
};
const {
    bandName,
    famousSong
} = band;
console.log(bandName);
console.log(famousSong);

const band1 = {
    bandName1: "Led Zeppelin",
    famousSong1: "Stairway to Heaven",
    year1: 1968,
    anotherFamousSong1: "Kashmir",
}
let {
    bandName1: var1,
    famousSong1
} = band1;
console.log(var1);

const band2 = {
    bandName2: "Led Zeppelin",
    famousSong2: "Stairway to Heaven",
    year2: 1968,
    anotherFamousSong2: "Kashmir",
}
let {
    bandName2,
    famousSong2,
    ...restProp
} = band2;
console.log(restProp);

// Object inside Arrays
console.log(`>> Object inside Arrays`);
const users = [{
    userId: 1,
    userName: "harshit",
    gender: "male"
}, {
    userId: 2,
    userName: "mohit",
    gender: "male"
}, {
    userId: 3,
    userName: "nitish",
    gender: "male"
}];
console.log(users);

for (let user of users) {
    console.log(user);
}

for (let user of users) {
    console.log(user.userId);
}

// Nested Destructuring
console.log(`>> Nested Destructuring`);
const [user1, user2, user3] = users;
console.log(user1);
console.log(user2);
console.log(user3);

const [{
    userName,
    gender
}] = users;
console.log(userName);
console.log(gender);

const [, {
    userName: userFirstName
}, {
    userId
}] = users;
console.log(userFirstName);
console.log(userId);


console.log(`-------------- 19. Dot v Bracket Notation --------------`);
const person3 = {
    name: "Jordan",
    age: '23',
    "person hobbies": ["guitar", "sleeping", "music"],
}
console.log(person3["person hobbies"]);
console.log(person3["person hobbies"][2]);
// console.log(person3.person hobbies);     // Uncaught SyntaxError

const key = "email";
person3[key] = "Jordan@gmail.com";
console.log(person3.email);
console.log(person3[key]);
console.log(person3.key);


console.log(`-------------- 20. Function Declaration --------------`);
singHappyBirthday();

function singHappyBirthday() {
    console.log(`Happy Birthday to you...`);
}
singHappyBirthday();

function twoPlusFour() {
    console.log(2 + 4);
}
twoPlusFour();

function threePlusFive() {
    return 3 + 5;
}
console.log(threePlusFive());

function sumTwoNumbers(number1, number2) {
    return number1 + number2;
}
console.log(sumTwoNumbers(4, 5));
console.log(sumTwoNumbers());
console.log(undefined + undefined);

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isEven(5));
console.log(isEven(10));
console.log(isEven(2));
console.log(isEven(3));
// OR
function ifEven(number) {
    if (number % 2 === 0) {
        return true;
    }
    return false;
}
console.log(ifEven(4));
console.log(ifEven(5));
console.log(ifEven(6));
console.log(ifEven(7));
// OR
function isEvenNo(number) {
    return number % 2 === 0;
}
console.log(isEvenNo(4));
console.log(isEvenNo(5));

function firstChar(anyString) {
    return (anyString[0]);
}
console.log(firstChar("abc"));

function findTarget(array, target) {
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return "Not Found";
}
console.log(findTarget([22, 54, 4, 30, 99, 7], 30));
console.log(findTarget([22, 54, 4, 30, 99, 7], 4));
console.log(findTarget([22, 54, 4, 30, 99, 7], 300));


console.log(`-------------- 21. Function Expression --------------`);
// singHBD();        // Uncaught ReferenceError: Cannot access 'singHBD' before initialization
const singHBD = function () {
    console.log(`Happy Birthday to you...`);
}
singHBD();


console.log(`-------------- 22. Arrow Functions --------------`);
const happyBday = () => {
    console.log(`Happy Birthday`);
};
happyBday();

const isEven2 = number => number % 2 === 0;
console.log(isEven2(2));


console.log(`-------------- 24. Hoisting --------------`);
// Variable Hoisting (var, let and const)
console.log(`>> Variable Hoisting (var, let and const)`);
console.log(p); // undefined
var p = 5;
console.log(p);

// console.log(q); // Uncaught ReferenceError: Cannot access 'q' before initialization
let q = 5;
console.log(q);

// console.log(r); // Uncaught ReferenceError: Cannot access 'r' before initialization
const r = 5;
console.log(r);

// Function Hoisting
console.log(`>> Function Hoisting`);
sayHello();

function sayHello() {
    console.log(`Hello!`);
}

sayHello();

// Hoisting with Function Expressions
console.log(`>> Hoisting with Function Expressions`);
// sayBye(); // Uncaught TypeError: sayBye is not a function
var sayBye = function () {
    console.log(`Bye!`);
}
sayBye();


console.log(`-------------- 25. Functions inside function --------------`);

function app() {
    const myFunc = () => console.log(`hello from inside of myFunc`);
    const addTwo = (num1, num2) => {
        return num1 + num2;
    }
    const mul = (num1, num2) => {
        return num1 * num2;
    }
    console.log("Inside app");
    myFunc();
    console.log(addTwo(2, 3));
    console.log(mul(2, 3));
}
app();


console.log(`-------------- 26. Lexical Scope --------------`);

function myApp() {
    const myVar = "value1";

    function myFunc() {
        console.log(`inside the myFunc, ${myVar}`);
    }
    console.log(myVar);
    myFunc();
}
myApp();

function myApp1() {
    const myVar1 = "value22";

    function myFunc() {
        const myVar1 = "value59";
        console.log(`inside the myFunc, ${myVar1}`);
    }
    console.log(myVar1);
    myFunc();
}
myApp1();

const var00 = "value00"; // Global Scope
function myApp2() {
    function myFunc() {
        console.log(`inside the myFunc, ${var00}`);
    }
    console.log(var00);
    myFunc();
}
myApp2();

const var11 = "value11"; // Global Scope
function myApp3() {
    function myFunc() {
        const myFunc2 = () => {
            console.log(`inside the myFunc2, ${var11}`);
        }
        myFunc2();
    }
    console.log(var11);
    myFunc();
}
myApp3();


console.log(`-------------- 27. Block Scope v Function Scope --------------`);
console.log(`Before - ${fName}`); {
    var fName = "Shubham";
}
console.log(`After - ${fName}`);

// console.log(`Before - ${fName1}`); // Uncaught ReferenceError: fName1 is not defined
{
    let fName1 = "Jonathan";
}
// console.log(fName1); // Uncaught ReferenceError: fName1 is not defined


// console.log(`Before - ${fName2}`); // Uncaught ReferenceError: fName1 is not defined
{
    const fName2 = "Andrew";
}
// console.log(fName2); // Uncaught ReferenceError: fName1 is not defined

let fName3 = "Ram";

function myApp4() {
    if (true) {
        let fName3 = "Sita";
        console.log(fName3);
    }
    console.log(fName3);
}
myApp4();

const fName4 = "James";

function myApp5() {
    if (true) {
        const fName4 = "Shubham";
        console.log(fName4);
    }
    console.log(fName4);
}
myApp5();

var fName5 = "Charles";

function myApp6() {
    if (true) {
        var fName5 = "Kenny";
        console.log(fName5);
    }
    console.log(fName5);
}
myApp6();

var fName6 = "King";

function myApp7() {
    console.log(fName6);
    if (true) {
        var fName6 = "Michael";
        console.log(fName6);
    }
    console.log(fName6);
}
myApp7();

var fName7 = "Kobe";

function myApp8() {
    console.log(fName7);
    if (true) {
        let fName7 = "Goat";
        console.log(fName7);
    }
    console.log(fName7);
}
myApp8();

let fName8 = "Steven";

function myApp9() {
    console.log(fName8);
    if (true) {
        var fName8 = "Tyler";
        console.log(fName8);
    }
    console.log(fName8);
}
myApp9();


console.log(`-------------- 28. Default parameters --------------`);

function addTwo(a, b) {
    return a + b;
}
console.log(addTwo(4));

function add2(a, b) {
    if (typeof b === 'undefined') {
        b = 1;
    }
    return a + b;
}
console.log(add2(4));

// OR
function plusTwo(a, b = 1) {
    return a + b;
}
console.log(plusTwo(4));


console.log(`-------------- 29. Rest parameters --------------`);

function restFunc(a, b, ...c) {
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
    console.log(c);
}
restFunc(100, 200, 300, 400, 500, 600);
/* The output of ...c (rest parameter) will be an array. It will not show in array 
because we have used string template while console.log and we know that anything / 
any data-type + string will always results in string. */

function addAll(...numbers) {
    let total = 0;
    for (let val of numbers) {
        total += val;
    }
    return total;
}
console.log(addAll(1, 2, 3, 4, 5));


console.log(`-------------- 30. Parameter Destructuring --------------`);
const person4 = {
    firstName: "Chris",
    gender: "male",
}

function printDetails(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
}
printDetails(person4);

function printDetails1(obj) {
    console.log(obj.firstName);
    console.log(obj.gender);
    console.log(obj.age);
}
printDetails1(person4);
// OR
function printDetails2({
    firstName: name,
    gender,
    age
}) {
    console.log(name);
    console.log(gender);
    console.log(age);
}
printDetails2(person4);


console.log(`-------------- 31. Callback / Higher Order Functions --------------`);

function callback() {
    console.log(`Inside the callback function`);
}

function myFunction(param) {
    param();
}
myFunction(callback);

function callback1() {
    console.log(`Inside the callback1 function`);
}

function myFunction1(param) {
    console.log(`I am myFunction1`);
    param();
}
myFunction1(callback1);

function callback2(fullName) {
    console.log(`Inside the callback2 function`);
    console.log(fullName);
}

function myFunction2(param) {
    console.log(`I am myFunction2`);
    param("Jimmy Freaking Butler");
}
myFunction2(callback2);


console.log(`-------------- 32. Function returning Functions / HOF --------------`);

function myFirstName() {
    function myLastName() {
        console.log(`myFirstName myLastName`);
    }
    return myLastName();
}
myFirstName();
// OR
function myFirstName1() {
    function myLastName1() {
        console.log(`myFirstName1 myLastName1`);
    }
    return myLastName1;
}
myFirstName1()();;


console.log(`-------------- 33. Important Array Methods --------------`)
// forEach Method
console.log(`>> forEach Method`);
const random = [4, 2, 5, 8];
console.log(random); // 1.

function randomFunction(number, index) {
    console.log(`index ${index}, number ${number}`);
}

for (let i = 0; i <= random.length - 1; i++) {
    randomFunction(random[i], i); // 2.
}

random.forEach(randomFunction); // 3.

random.forEach((number, index) => {
    console.log(`index ${index}, number ${number}`); // 4.
})

// Map() Method / Higher Order Function
console.log(`>> Map() Method / Higher Order Function`);
let numbers1 = [3, 4, 6, 1, 8];
console.log(numbers1); // 1.

const multiplyBy2 = function (number) {
    console.log(number * 2);
}
numbers1.map(multiplyBy2); // 2.

const multiplyTwo1 = numbers1.map(multiplyBy2);
console.log(multiplyTwo1); // 3.

const multiply = function (num) {
    return num * 2;
}
const multiplyTwo2 = numbers1.map(multiply);
console.log(multiplyTwo2); // 4.

numbers1.map(num => console.log(num * 2)); // 5.

let multiplyTwo3 = numbers1.map(num => num * 2);
console.log(multiplyTwo3); // 6.

console.log(numbers1.map(num => num * 2)); // 7.

// Filter() Method / Higher Order Function
console.log(`>> Filter() Method / Higher Order Function`);
const numbers2 = [1, 3, 2, 6, 4, 8];
console.log(numbers2); // 1.

const numIsEven = function (number) {
    return number % 2 === 0;

}
console.log(numIsEven(numbers2)); // 2.
console.log(numbers2.filter(numIsEven)); // 3.
console.log(numbers2.filter(val => val % 2 === 0)); // 4.

// Reduce() Method / Higher Order Function
console.log(`>> Reduce() Method / Higher Order Function`);
const numbers3 = [1, 2, 3, 4, 5];
console.log(numbers3); // 1.

console.log(numbers3.reduce((acc, curr) => acc + curr)); // 2.

const userCart = [{
    productId: 1,
    productName: "Mobile",
    price: 12000,
}, {
    productId: 2,
    productName: "Laptop",
    price: 22000,
}, {
    productId: 3,
    productName: "TV",
    price: 15000,
}];
console.log(userCart); // 3.

console.log(userCart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)); // 4.

// Sort() Method
console.log(`>> Sort() Method`);
const userNames = ['John', 'Michael', 'Stephen', 'Grace', 'Ayesha'];
console.log(userNames); // 1.
console.log(userNames.sort()); //2.
console.log(userNames); // 3.

const numbers4 = [15, 99, -30, 1200, 4000, 0];
console.log(numbers4); // 4.
console.log(numbers4.sort()); // 5.
console.log(numbers4.sort((a, b) => a - b)); // 6.
console.log(numbers4); // 7.

const numbers5 = [15, 99, -30, 1200, 4000, 0];
console.log(numbers5); // 8.
console.log(numbers5.sort()); // 9.
console.log(numbers5.sort((a, b) => b - a)); // 10.
console.log(numbers5); // 11.

const products = [{
    productId: 1,
    productName: 'p1',
    price: 300
}, {
    productId: 2,
    productName: 'p2',
    price: 3000
}, {
    productId: 3,
    productName: 'p3',
    price: 200
}, {
    productId: 4,
    productName: 'p4',
    price: 8000
}];
console.log(products); // 12.
console.log(products.sort((a, b) => a.price - b.price)); // 13.
console.log(products); // 14.

const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
console.log(lowToHigh); // 15.

// Find() Method / Higher Order Function
console.log(`>> Find() Method / Higher Order Function`);
const myArray3 = ["Hello", "Cat", "Dog", "Lion"];
console.log(myArray3); // 1.

function isLength3(string) {
    return string.length === 3;
}
console.log(isLength3(myArray3)); // 2.
console.log(myArray3.find(isLength3)); // 3.
console.log(myArray3.find(string => string.length === 3)); // 4.

const userInfo = [{
    userId: 1,
    userName: "Jimmy"
}, {
    userId: 2,
    userName: "Jason"
}, {
    userId: 3,
    userName: "Norman"
}, {
    userId: 4,
    userName: "Michael"
}, {
    userId: 5,
    userName: "Aaron"
}];
console.log(userInfo); // 5.
console.log(userInfo.find(user => user.userId === 3)); // 6.

// Every() Method / Higher Order Function
console.log(`>> Every() Method / Higher Order Function`);
const numbers6 = [2, 4, 6, 8, 10];
console.log(numbers6); // 1.
console.log(numbers6.every(num => num % 2 === 0)); // 2.
const numbers7 = [2, 4, 343, 6, 8, 1];
console.log(numbers7); // 3.
console.log(numbers7.every(num => num % 2 === 0)); // 4.

// Some() Method / Higher Order Function
console.log(`>> Some() Method / Higher Order Function`);
const numbers8 = [3, 5, 8, 9];
console.log(numbers8); // 1.
console.log(numbers.some(num => num % 2 === 0)); // 2.

// Fill() Method
console.log(`>> Fill() Method`);
const newArr = new Array(10).fill(-30);
console.log(newArr); // 1.

const newArr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(newArr1.fill(1000000, 1, 4)); // 2.
console.log(newArr1); // 3.

// Splice() Method
console.log(`>> Splice() Method`);
const newArr2 = ['item1', 'item2', 'item3', 'item4', 'item5'];
console.log(newArr2); // 1.
console.log(newArr2.splice(1, 1)); // 2.
console.log(newArr2); // 3.

// (Start, Delete, Insert)
let newArr3 = ['item10', 'item20', 'item30'];
console.log(newArr3); // 4. 
newArr3.splice(1, 0, 'inserted item');
console.log(newArr3); // 5.

let newArr4 = ['item101', 'item102', 'item103'];
console.log(newArr4); // 6.
console.log(newArr4.splice(1, 2, 'inserted item 1', 'inserted item 2')); // 7.
console.log(newArr4); // 8.


console.log(`-------------- 34. Iterables --------------`)
const personName = "Joseph";
console.log(personName); // 1.
for (let char of personName) {
    console.log(char); // 2.
}

/* const randomNo = 123456789;
for (let num of randomNo) {
    console.log(num);   // Uncaught TypeError: randomNo is not iterable
} */

const randomNo1 = [123456789];
console.log(randomNo1); // 3.
for (let num of randomNo1) {
    console.log(num); // 4.
}

const userDetails = {
    key1: 'value1',
    key2: 'value2'
}
console.log(userDetails); // 5.
/* for (let val of userDetails) {
    console.log(val); // Uncaught TypeError: userDetails is not iterable

} */


console.log(`-------------- 36. Sets --------------`)
/* const no1 = new Set(0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5);
console.log(no1); */ // Uncaught TypeError: number 0 is not iterable

const newArrays = new Set([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]);
console.log(newArrays); // 1.

const newStrings = new Set("aabbccdd");
console.log(newStrings); // 2.

const newStrings1 = new Set("aabbccdd");
console.log(newStrings[0]); // 3.

const newNames = new Set();
newNames.add("aabbccdd");
console.log(newNames); // 4.

const newNames1 = new Set();
newNames1.add("JavaScript");
newNames1.add("JavaScript");
newNames1.add("JavaScript");
console.log(newNames1); // 5.

const newItems = ["item1", "item2", "item3"];
const newNo = new Set();
newNo.add(newItems);
newNo.add("Shubham");
newNo.add(newItems);
console.log(newNo); // 6.

const newNo1 = new Set();
newNo1.add(['item1', 'item2', 'item3']);
newNo1.add("Henry");
newNo1.add(['item1', 'item2', 'item3']);
console.log(newNo1); // 7.

const newItems1 = ['item1', 'item2', 'item3'];
const newNo2 = new Set();
newNo2.add(newItems1);
newNo2.add(newItems1);
newNo2.add(['item1', 'item2', 'item3', 'item3']);
newNo2.add(['item1', 'item2', 'item3', 'item3']);
newNo2.add("Christopher");
console.log(newNo2); // 8.

const newNo3 = new Set();
const newItems2 = ["item1", "item2", "item3", "item3"];
newNo3.add(newItems2);
console.log(newNo3); // 9.

if (newNo3.has(1)) {
    console.log(`True, it has 1`);
} else {
    console.log(`False, it does not have 1`); // 10.
}

if (newNo3.has(newItems2)) {
    console.log(`True.`); // 11.
} else {
    console.log(`False.`);
}

const newNo4 = new Set();
const newItems3 = ['item1', 'item2', 'item3', 'item3'];
newNo4.add(newItems3);
newNo4.add(1);
newNo4.add(2);
newNo4.add(3);
newNo4.add(4);
newNo4.add(5);
newNo4.add(6);
for (let val of newNo4) {
    console.log(val); // 12.
}

const myNewArr = [1, 2, 4, 4, 5, 6, 5, 6];

const myNewArr1 = new Set();
myNewArr1.add(myNewArr);
myNewArr1.add(myNewArr);
console.log(myNewArr); // 13.

const myNewArr3 = new Set(myNewArr);
console.log(myNewArr3); // 14.

const myNewArr4 = new Set(myNewArr);
let length = 0;
for (let val of myNewArr4) {
    length++;
}
console.log(length); // 15.

const personDetails = {
    firstName: 'Roger',
    age: 7,
    1: 'one',
}

for (let i in personDetails) {
    console.log(`${i}, ${personDetails[i]}`); // 16.
}
console.log(personDetails['1']); // 17.
console.log(typeof personDetails['1']); // 18.


console.log(`-------------- 37. Maps --------------`)
const personDetails1 = new Map();
personDetails1.set('firstName', 'John');
personDetails1.set('age', 7);
console.log(personDetails1); // 1.

const personDetails2 = new Map();
personDetails2.set('firstName', 'Kenny');
personDetails2.set('age', 14);
personDetails2.set(0, 'zero');
console.log(personDetails2); // 2.

const personDetails3 = new Map();
personDetails3.set('firstName', 'Ernie');
personDetails3.set('age', 20);
personDetails3.set(3, 'Three');
console.log(personDetails3.get("firstName")); // 3.
console.log(personDetails3.get("age")); // 4.
console.log(personDetails3.get(3)); // 5.

const personDetails4 = new Map();
personDetails4.set('firstName', 'Shrek');
personDetails4.set('age', 5);
personDetails4.set(10, 'Ten');
console.log(personDetails4.keys()); // 6.

const personDetails5 = new Map();
personDetails5.set('firstName', 'Charles');
personDetails5.set('age', 16);
personDetails5.set(9, 'Nine');
for (let key of personDetails5.keys()) {
    console.log(key, typeof key, personDetails5.get(key)); // 7.
}

const personDetails6 = new Map();
personDetails6.set('firstName', 'UnderDog');
personDetails6.set('age', 3);
personDetails6.set(1, 'One');
personDetails6.set(34.90, 'point');
personDetails6.set([9, 0, 9], 'ninezeronine');
for (let key of personDetails6.keys()) {
    console.log(key, typeof key, personDetails6.get(key)); // 8.
}
console.log(personDetails6); // 9.

const personDetails7 = new Map();
personDetails7.set('firstName', 'Jamal');
personDetails7.set('age', 10);
personDetails7.set(0, 'zero');
for (let value of personDetails7) {
    console.log(value); // 10.
}

for (let [key, value] of personDetails7) {
    console.log(`${key}: ${value}`); // 11.
}

const personDetails8 = new Map([
    ['firstName', 'Nick'],
    ['age', 7],
    [0, 'zero']
]);
console.log(personDetails8); // 12.

const personDetails9 = new Map();
personDetails9.set('firstName', 'Michael');
personDetails9.set('age', 7);
personDetails9.set(0, 'zero');
console.log(personDetails9); // 13.

const personDetails10 = {
    id: 1,
    firstName: 'Aaron',
}
const extraInfo = new Map();
extraInfo.set(personDetails10, {
    age: 8,
    gender: 'male',
});
console.log(personDetails10.id); // 14.
console.log(personDetails10.firstName); // 15.
console.log(personDetails10); // 16.
console.log(extraInfo); // 17.
console.log(extraInfo.get(personDetails10)); // 18.
console.log(extraInfo.get(personDetails10).age); // 19.
console.log(extraInfo.get(personDetails10).gender); // 20.
console.log(extraInfo.get(personDetails10)['age']); // 21.
console.log(extraInfo.get(personDetails10)['gender']); // 22.
console.log(extraInfo.get('id')); // 23.
console.log(extraInfo.get('firstName')); // 24.
console.log(extraInfo.get(personDetails10).id); // 25.
console.log(extraInfo.get(personDetails10).firstName); // 26.


console.log(`-------------- 39. Clone using Object.assign() --------------`)
const newObj = {
    key1: 'value1',
    key2: 'value2',
}
console.log(newObj); // 1.

const newObj1 = newObj;
console.log(newObj1); // 2.

const newObj2 = {
    ...newObj
};
console.log(newObj2); // 3.

const newObj3 = Object.assign(newObj);
console.log(newObj3); // 4.

const newObj4 = JSON.parse(JSON.stringify(newObj));
console.log(newObj4); // 5.

newObj.key3 = 'value3000';

console.log(newObj); // 6.
console.log(newObj1); // 7.
console.log(newObj2); // 8.
console.log(newObj3); // 9.
console.log(newObj4); // 10.

const newObj5 = Object.assign({}, newObj);
console.log(newObj5); // 11.


console.log(`-------------- 40. Optional Chaining "?" --------------`)
/* const customer = {
    name: 'John',
    address: {
        city: 'New York',
        street: '123 Main St'
    }
};

// Accessing nested properties without optional chaining
const cityName1 = customer.address.city; // 'New York'
const zipCode1 = customer.address.zipCode; // undefined

// Accessing nested properties with optional chaining
const cityName2 = customer.address?.city; // 'New York'
const zipCode2 = customer.address?.zipCode; // undefined

console.log(cityName1, zipCode1);
console.log(cityName2, zipCode2); */