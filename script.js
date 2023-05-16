console.log(`// // // // // // 6. String // // // // // //`);
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