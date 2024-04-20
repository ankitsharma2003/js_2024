// for-in loop
const myObject = {
    js : 'JavaScript',
    cpp : 'c++',
    py : 'Python',
    rb : 'ruby'
}

for (const key in myObject) {
    //  console.log(`${key} : ${myObject[key]}`);
}


const development = ["MERN", "MEAN", "LEAN"];

for(const dev in development) {
    // console.log(development[dev]);
}