const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// myNums.map((item) => console.log(item));

const value =  myNums.map((item) => {
    return item + 10;
})

// console.log(value);


// chaining of method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers
                    .map((item) => item * 10)
                    .map((item) => item + 1)
                    .filter((item) => item >= 40)

console.log(newNumbers);
