const name = "Ankit Sharma";
const repoCount = 11;

// String concatenation is the process of combining two or more strings into a single string

// console.log(`my name is : ${name} & my total repo in Github : ${repoCount}`);

const gameName = new String('pubg');

// console.log(gameName.length);          // get string lenght
// console.log(gameName.toUpperCase());  // convert into UPPER CASE
// console.log(gameName.charAt(2));      // get position
// console.log(gameName.indexOf('g'));   // get index

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-8, 4);  // also take negtive value
// console.log(anotherString);


const newCar = "  Range-Rver  ";
const setString1 = newCar.trim();
// console.log(setString1);


// replace method
const url = "https://ankit.com/ankit%40sharma";
// console.log(url.replace('%40', '-'));     // first is search value & second is what is add value

// console.log(url.includes('ankit')); // get value is present or not

// split method
const myAims = "I want to become a successfull Developer";
// console.log(myAims.split(' '));