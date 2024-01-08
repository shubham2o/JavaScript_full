/* console.log("Start");

const id = setTimeout(() => {
    console.log("Inside setTimeout");
}, 0);

for (let i = 0; i < 100; i++) {
    console.log(".... " + i);
}

console.log("setTimeout id is " + id);

console.log("clearTimeout");
clearTimeout(id);

console.log("End"); */




/* console.log("Start");

const intervalId = setInterval(() => {
    console.log(Math.floor(Math.random() * 10));
}, 1000);

for (let i = 0; i < 100; i++) {
    console.log(".... " + i);
}

console.log("setInterval id is " + intervalId);

console.log("clearInterval");
clearInterval(intervalId);

console.log("End"); */




/* function calculator(number1, number2, callback) {
    console.log(number1, number2);
    callback(number1, number2);
}

function add(num1, num2) {
    console.log(num1 + num2);
}

calculator(4, 5, add); */

// function calculator(num1, num2, callback) {
//     console.log(num1, num2);
//     callback(num1, num2);
// }

// function multiply(num1, num2) {
//     console.log(num1 * num2)
// }

// calculator(3, 4, multiply);




/* console.log("START");

setTimeout(() => {
    console.log("INSIDE setTimeout");
}, 0);

for (let i = 0; i < 100; i++) {
    console.log(i, "...");
}

const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// How to create a Promise
const friedRicePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegetables") && bucket.includes("salt")) {
        resolve({ value: "friedRice" });
    }
    else {
        reject("Couldn't do it");
    }
});

// How to use a Promise
friedRicePromise.then((ans) => {
    console.log("Let's eat", ans);
},
).catch(
    (error) => {
        console.log(error);
    }
);

console.log("END"); */

// console.log("START");

// setTimeout(() => {
//     console.log("INSIDE setTimeout");
// }, 0);

// const fruits = ["apple", "mango", "banana"];

// const fruitJuice = new Promise((resolve, reject) => {
//     if (fruits.includes("mango")) {
//         resolve({ value: "Success" });
//     }
//     else {
//         reject("Failed");
//     }
// });

// fruitJuice.then((suc) => {
//     console.log("Let's Eat", suc);
// }).catch((error) => {
//     console.log(error);
// });

// console.log("END");



/* const URL = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// console.log(xhr);

// console.log(xhr.readyState);
xhr.open("GET", URL);
// console.log(xhr.readyState);

xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
        const response = xhr.response;
        const data = JSON.parse(response);
        // console.log(data);

        const id = data[3].id;
        // console.log(id);

        const xhr2 = new XMLHttpRequest();
        const URL2 = `${URL}/${id}`;
        // console.log(URL2);

        xhr2.open("GET", URL2);

        xhr2.onload = function () {
            const response2 = xhr2.response;
            const data2 = JSON.parse(response2);
            // console.log(data2);
        }

        xhr2.send();
    }
    else {
        console.log("Something went wrong");
    }
}

xhr.onerror = () => {
    console.log("Network Error");
}

xhr.send(); */




/* const URL = "https://jsonplaceholder.typicode.com/posts";

function sendRequest(method, url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.onload = function () {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.response);
            }
            else {
                reject(new Error("Something went wrong"));
            }
        }

        xhr.onerror = function () {
            reject(new Error("Network Error"));
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
    .then(response => {
        const data = JSON.parse(response)
        // console.log(data);
        return data;
    })
    .then(data => {
        const id = data[3].id;
        return id;
    })
    .then(id => {
        const url = `${URL}/${id}`;
        return sendRequest("GET", url);
    })
    .then(newResponse => {
        const newData = JSON.parse(newResponse);
        console.log(newData);
    })
    .catch(error => {
        console.log(error);
    }); */




/* const URL = "https://jsonplaceholder.typicode.com/posts";

fetch(URL)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        else {
            throw new Error("Something went Wrong");
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log("Inside catch");
        console.log(error);
    }); */




/* const URL = "https://jsonplaceholder.typicode.com/posts";

const getPosts = async () => {
    const response = await fetch(URL);

    if (response.ok) {
        const data = await response.json();
        return data;
    } throw new Error("Something went Wrong");
}

getPosts()
    .then(myData => {
        console.log(myData);
    })
    .catch(error => {
        console.log(error);
    }); */




/* console.log(a);
var a; // declaration
console.log(a);
a = 10; // initialization
console.log(a); */




/* console.log(a);
let a; // declaration
console.log(a);
a = 10; // initialization
console.log(a); */




/* let a = [10, 20, 30, 40];
let b = a;

console.log(a);
a.pop();
console.log(b);
b.pop();
console.log(a); */




/* let fruits = ["apple", "mango", "banana", "grapes", "peach", "orange", "kiwi"];
let fruitsClone = fruits;

// fruitsClone.push("watermelon");
// console.log(fruits);
// console.log(fruitsClone);

// fruitsClone.pop();
// console.log(fruits);
// console.log(fruitsClone);

// fruitsClone.unshift("watermelon");
// console.log(fruits);
// console.log(fruitsClone);

// fruitsClone.shift();
// console.log(fruits);
// console.log(fruitsClone);

// fruitsClone.splice(1, 3);
// console.log(fruits);
// console.log(fruitsClone);

// const slicedFruits = fruitsClone.slice(1, 3);
// console.log(fruits);
// console.log(fruitsClone);
// console.log(slicedFruits);  */




/* let a = [10, 20, 30, 40, 50, 60, 70, 80];
let b = [...a];

b.splice(1, 4);

console.log(a);
console.log(b); */




/* let a = [1000, 2000, 3000, 4000, 5000];

a.forEach((e) => {
    console.log(e / 1000);
})

console.log(a); */




/* (function () {
    var name = "Shubham Sharma"; // Private Variable
    console.log(name);
})();

// console.log(name); */




/* function printFullName(country) {
    console.log(this.firstName, this.lastName, country);
}

let name1 = {
    firstName: "Shubham",
    lastName: "Sharma",
};

let name2 = {
    firstName: "John",
    lastName: "Doe",
}

printFullName.call(name1, "India");
printFullName.call(name2, "USA"); */




/* function printFullName(country) {
    console.log(this.firstName, this.lastName, country);
}

let name1 = {
    firstName: "Shubham",
    lastName: "Sharma",
};

let name2 = {
    firstName: "John",
    lastName: "Doe",
}

printFullName.apply(name1, ["India"]);
printFullName.apply(name2, ["USA"]); */




/* function printFullName(country) {
    return this.firstName + " " + this.lastName + " " + country
}

let name1 = {
    firstName: "Shubham",
    lastName: "Sharma",
};

let name2 = {
    firstName: "John",
    lastName: "Doe",
}

const fullName1 = printFullName.bind(name1, "India");
const fullName2 = printFullName.bind(name2, "USA");

console.log(fullName1());
console.log(fullName2()); */




/* const array = ["a", "b"];
const elements = [4, 5, 6];

array.push.apply(array, elements);
console.log(array); */



/* let multiply = function (x, y) {
    console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 3, 4);
multiplyByTwo(2); */




// human.prototype.about = function () {
//     return `${this.firstName}`;
// }

// function human(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
// }

// const newHuman = new human("Shubham", "Sharma", 23);
// console.log(newHuman.about());




/* class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;;
    }
    about() {
        return `${firstName}`;
    }
}

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
} */
