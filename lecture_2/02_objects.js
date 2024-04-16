// object litrels => {}

const jsUser = {
    name : "Ankit",
    age : 21,
    location : "Delhi",
    email : "ankit@google.com",
    isLoggedIn : true,
    "id name" : "123abc"
}

// access data from jsUser in dot notation
// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.location);
// console.log(jsUser.email);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser["id name"]);

/*also access data from jsUser in array litrel if object ke ander 
both key and value wrapped in double string => "" when use array litel
*/ 

// console.log(jsUser["name"]);
// console.log(jsUser["age"]);
// console.log(jsUser["location"]);
// console.log(jsUser["id name"]);

// console.log(typeof jsUser);

// update
jsUser.name = "Tushar";
// Object.freeze(jsUser) // lock object can not update

// add new key and value in object
jsUser.greetings = function() {
    console.log("hello Ankit");
}

jsUser.greetingsTwo = function() {
    console.log(`Hello my Name is : ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());


// Symbol declare and use in object and print symbol

const mySym = Symbol("key1");

const jsUser1 = {
    [mySym] : "key1",
    name : "Ankit",
}

// console.log(jsUser1[mySym]);
