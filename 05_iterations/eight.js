const myNums = [1, 2, 3];

// const total = myNums.reduce(function (acc, currValue)  {
//     console.log(acc);
//     console.log(currValue);
//        return acc + currValue;
// }, 0)

const total = myNums.reduce((acc, curr) => acc + curr, 0);

// console.log(total);

const shoppingCart = [
  {
    product: "iPhone 12",
    price: 49999,
  },
  {
    product: "iPhone 13",
    price: 59999,
  },
  {
    product: "iPhone 14",
    price: 69999,
  },
  {
    product: "iPhone 15",
    price: 89999,
  },
];

const totalData = shoppingCart.reduce((acc, currValue) => {
    return acc + currValue.price;
}, 0);

console.log(totalData);