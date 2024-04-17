function myName() {
  console.log("Hello Ankit Sharma");
  console.log("Hello Ankit Sharma");
  console.log("Hello Ankit Sharma");
  console.log("Hello Ankit Sharma");
}
//  myName();  // function call ya execute
//  myName;   // function reference


// Add two Number
function addTwoNumber(a, b) {
  // a, b => parameters
  console.log(a + b);
}

// const result = addTwoNumber(1,2);  // 1, 2 => arguments
// console.log(result);



//  ***********  RETURN ************

// function addTwoNumber(a, b) {
//   return a + b;
// }

// const result = addTwoNumber();
// console.log(result);


function loginUserMessage(username = "sam") {
    return `${username} user login successfully`
}
// console.log(loginUserMessage("Ankit"));


function calculateCartPrice(...num1) {
    return num1;
}

// console.log(calculateCartPrice(200, 400, 600));


// Object pass in functions

const user = {
    name : "Ankit",
    age : 20
}

function handleChange(anyObject) {
    console.log(`my name is : ${anyObject.name} & age is : ${anyObject.age}`);
}

// handleChange(user);

// Arrays pass in functions

const myNewArrays = [100, 200, 300];

function secondArrayValue(getArray) {
    return getArray[2];
}

console.log(secondArrayValue(myNewArrays));