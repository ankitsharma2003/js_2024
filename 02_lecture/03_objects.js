// Singleton object
const tinder = new Object();

tinder.id = "123abc";
tinder.name = "Ankit";
tinder.isLoggedIn = false;
// console.log(tinder);

// Get All Keys
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));


// Propery is present or not in object 
// console.log(tinder.hasOwnProperty('name'));

// nesting in object like below
const regularUser = {
    email : "ankit@gmail.com",
    fullName : {
        userFullName : {
            firstName : "Ankit",
            lastName : "Sharma"
        }
    }
}

// console.log(regularUser.fullName?.userFullName.firstName);


// Add two or more object

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

// 1-Method
const objSum1 = {obj1, obj2};
// console.log(objSum1);

// 2-Method
const objSum2 = Object.assign({}, obj1, obj2);
// console.log(objSum2);

// 3-Method
const objSum = {...obj1 , ...obj2};
// console.log(objSum);


// *** Object de-structuring ***
const course = {
    courseName : "Java with DSA",
    price : "4999",
    starting : "16Aprail"
}

const {courseName, price : amount} = course;
// console.log(courseName, amount);      // (price : amount) then use amount/


// **************************************JSON**************************

// JSON (JavaScript Object Notation)

// JSON object representing a person
var person = {
    "name": "John",
    "age": 30,
    "city": "New York"
  };
// console.log(person.age);

  // Convert JavaScript object to JSON string
  var jsonString = JSON.stringify(person);
//   console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}
  
  // Convert JSON string back to JavaScript object
  var personObject = JSON.parse(jsonString);
  console.log(personObject.name); // Output: John
  console.log(personObject.age); // Output: 30
  console.log(personObject.city); // Output: New York
  
