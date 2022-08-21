"use strict";
let x = 10;
const nome = "Suelytohm";
x = 20;
console.log(x);
let y = 12;
let z = 12;
let firstName = "Suelytohm";
let age = 27;
const isAdmin = true;
console.log(typeof firstName);
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
let myTuple;
myTuple = [5, "teste", ["Olá", "Opa", "Oii"]];
const user = {
    name: "Suelytohm",
    age: 27
};
console.log(user.name, "tem", user.age, "anos.");
let a = 0;
a = "teste";
a = true;
a = [];
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirtId = 123;
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};
console.log(camisa);
let login;
login = null;
login = "autenticado";
function sum(a, b) {
    return a + b;
}
console.log(sum(1, 1));
function sayHelloTo(name) {
    return "Hello, " + name;
}
console.log(sayHelloTo("Suelytohm"));
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    }
    else {
        console.log(`Olá ${name}`);
    }
}
greeting("Suelytohm");
greeting("Pedro", "Sir");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 5,
    n2: 10
};
console.log(multiplyNumbers(someNumbers));
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    }
    else {
        console.log("Não é um número");
        return;
    }
}
doSomething(true);
doSomething(5);
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
console.log(showArraysItems(a1));
console.log(showArraysItems(a2));
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(allow) {
        if (allow) {
            console.log(`O usuário é: ${this.role}`);
            return;
        }
        console.log("Não é permitido!");
    }
}
const zeca = new User("Zeca", "admin", true);
console.log(zeca);
zeca.showUserName();
zeca.showUserRole(false);
zeca.showUserRole(true);
