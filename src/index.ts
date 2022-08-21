let x: number = 10;

const nome:string = "Suelytohm";


x = 20;

console.log(x);

// interferência x annotation

let y = 12;

// y = "teste"

let z:number = 12

// tipos básicos
let firstName: string = "Suelytohm"
let age: number = 27
const isAdmin: boolean = true
console.log(typeof firstName)

// object
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUpperCase()) ERRO

console.log(firstName.toUpperCase())

myNumbers.push(5)
console.log(myNumbers)

// tuplas

let myTuple: [number, string, string[]]

myTuple = [5, "teste", ["Olá", "Opa", "Oii"]];

// object literals -> {prop: value}
const user: {name: string, age: number} = {
    name: "Suelytohm",
    age: 27
}

console.log(user.name, "tem", user.age, "anos.")

// user.job = "programador" ERRO

let a:any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";
id = 200;

// id = true ERRO
// id = [] ERRO


// type alias
type myIdType = number | string

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirtId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    name: "Camisa gola V",
    size: Size.G,
};

console.log(camisa);

// literal types

let login: "autenticado" | null

// login = "outrovalor" ERRO
login = null;
login = "autenticado";

// funções

function sum(a: number, b: number) {
    return a+b;
}

console.log(sum(1,1))

// console.log(sum("12", true)) ERRO

// function com tipo de retorno
function sayHelloTo(name: string): string {
    return "Hello, " + name;
}

console.log(sayHelloTo("Suelytohm"))

function logger(msg: string): void {
    console.log(msg);
}

logger("teste");

function greeting(name: string, greet?: string): void {
    if(greet){
        console.log(`Olá ${greet} ${name}`)
    } else {
        console.log(`Olá ${name}`)

    }
}

greeting("Suelytohm");
greeting("Pedro", "Sir");


// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number,
}

function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}

console.log(sumNumbers({n1:1, n2: 2}));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}

const someNumbers:MathFunctionParams = {
    n1: 5,
    n2: 10
}

console.log(multiplyNumbers(someNumbers));

// narroring
// checagem de tipos

function doSomething(info: number | boolean) {
    if(typeof info === "number") {
        console.log(`O número é ${info}`);
        return;
    } else {
        console.log("Não é um número");
        return
    }
}

doSomething(true);
doSomething(5);


// generics

function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

console.log(showArraysItems(a1));
console.log(showArraysItems(a2));

// classes

class User {
    name
    role
    isApproved

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name
        this.role = role;
        this.isApproved = isApproved
    }

    showUserName(){
        console.log(`O nome do usuário é ${this.name}`)
    }

    showUserRole(allow: boolean): void {
        if(allow){
            console.log(`O usuário é: ${this.role}`);
            return;
        }
        console.log("Não é permitido!")
    }
}

const zeca = new User("Zeca", "admin", true)

console.log(zeca);
zeca.showUserName();

zeca.showUserRole(false);
zeca.showUserRole(true);


