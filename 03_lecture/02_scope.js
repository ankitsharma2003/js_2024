// {} => scope in all Language like JS, Java & C++

if (true) {
  var c = 30;    // var is function-scoped
}
// console.log(c);  // This is the main problem with var thats why we dont use var 



let a = 300;

if(true) {
    let a = 10;
    // console.log(a);
    const b = 20;
}

// console.log(a);


// ************* Nested Scope ******************

function one() {
    const username = "Ankit Sharma";
    console.log(website);   // ReferenceError as website  is not accessible here

    function two() {
        const website = "http://ankit-sharma.com";
        console.log(username);  //// Accessing outerVariable from inner scope
    }
    // two();
}
// one();


// ++++++++++++ intresting ++++++++++++++


console.log(addOne(5));  // Executed

function addOne(num) {
    return num +1;
}


addTwo(4);  // Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}

addTwo(4);  // Executed
