// for of
const cars = ["Vovlo", "Range-Rover", "Fortuner"]

for (const car of cars) {
    // console.log(car);
}


const greetings = "Hello Ankit Sharma";

for (const greet of greetings) {
    // console.log(greet);
}



// Map => for unique value
const map = new Map();
map.set('IN', 'INDIA');
map.set('USA', 'United State of American');
map.set('RS', 'Russia');
map.set('IN', 'INDIA');

// console.log(map);

//apply for-of loop in map

for (const key of map) {    // return array
    // console.log(key);
}

for(const [key, value] of map) {
    // console.log(key, value);
}


let myObject = {
    'name' : 'Ankit',
    'age' : '20'
}

for(let key of myObject) {     // not apply for-of loop in object
    // console.log(key);
}
