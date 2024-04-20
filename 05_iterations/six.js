const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Nums = myNums.filter((num) => num > 4); // filter() method is used to create a new array with all elements
// console.log(Nums);

const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);


const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

// const userBooks = books.filter((item) => item.genre === 'Science');
const userBooks = books.filter((item) => item.edition > 2000);

console.log(userBooks);



// const booksData = books.filter((item) => {
//     // console.log(item);
//     return item.edition
// })
// console.log(booksData);