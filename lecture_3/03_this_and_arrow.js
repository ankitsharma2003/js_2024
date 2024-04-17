// ****************** THIS *********************

// This keyword => tell about current context

const user = {
    username : "ankt",
    age : 20,

    welcomeMessage : function () {
        console.log(`${this.username} , welcome my website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sahana";
// user.welcomeMessage();

// console.log(this);


function one() {
    const username = "Ankit Sharma";
    console.log(this.username);    // this keyword is not working in Functions
}

// one();
 

// ****************** ARROW FUNCTIONS *********************


// 1.Method

const printHello = (a,b) => {
    console.log("Hello");
    return a+b;
}
// console.log(printHello(2,2));

// 2.Method
const addTwo =() => console.log("Hello World");
// addTwo();

// 3.Method
const addNum = (num1, num2) => (num1 + num2);
console.log(addNum(3,3));