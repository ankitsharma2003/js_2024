// TYPES OF DATA TYPE

// 1. Primitive Data type

// 7 types : String, Number, Boolean, Undefined, Null, Sysmbol, BigInt

let score = 89;  //Number
let name = "Ankit Sharma";  //String

let indianPeople = 192999393293929930n;  //BigInt

const isLogged = true; //Boolean
const outsideTemp = null;  //Null
let userEmail;  //Undefined

const id = Symbol('123'); //Sysmbol
const anotherId = Symbol('123');  //Sysmbol

// console.log(id === anotherId);


// 2. Reference (Non - primitive)

// Array, Objects, Functions


const favCars = ["Range-Rover", "Fortuner", "Mercedes", 21]  // Array
// console.log(favCars);

const myObj = {   // objects
    name : "Ankit Sharma",
    age : 21
}
// console.log(myObj);

const Addition = function(a) {   // functions
       console.log(4+5);
}
// Addition();





// ++++++++++++ Memory in JS +++++++++++++++++

// 1. Stack Memory   => Primitive Data type  (Copy milti hai yha pr)
// 2. Heap Memory    => Reference (Non - primitive)  (refrence milta hai)


// 1. Stack Memory
let myInstaName = "ankitshaarmaa";
let anotherName = myInstaName;

anotherName = "Ankit Sharma";
// console.log(anotherName);
// console.log(myInstaName);