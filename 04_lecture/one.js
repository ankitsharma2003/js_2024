// if - condition

const tempreture = 41;

if (tempreture < 50) {
  // console.log("Executed");
} else {
  console.log("Wrong condition");
}

// < , > , <= , >= , != , == , === , !==  => operator

// scope study dont use var
const score = 200;

if (score > 100) {
  let power = "fly";
  // console.log(`Power is : ${power}`);
}

// console.log(power);

// shorthand notation for if

const balance = 1000;

// if (balance > 500) console.log("balance is 1000"), console.log('test');   // never use this formart



// else - if
const price = 1000;

// if(price < 500) {
//     console.log('Price is less than 500');
// } else if (price < 700) {
//     console.log('Price is less than 700');
// } else if (price < 800) {
//     console.log('Price is less than 800');
// } else {
//     console.log('Price is less than 1200');
// }


const userLoggedIn = true;
const debitCard = true

if(userLoggedIn && debitCard) {    // && => if both condtion is true then executed
    console.log("user is buy laptop");
}

const loggedInFromGoogle = true;
const loggedInFromEmail = false;

if(loggedInFromGoogle || loggedInFromEmail) {   // || => if one condtion is true then code executed
    console.log("User logged In");
}
