// spread operator = ... allows an iterable such an array or string to be expanded into seperate elements(unpacks the elements)

// let number = [1,2,3,4,5];
// let maximum = Math.max(...number);
// let minimum = Math.min(...number);

// console.log(maximum);
// console.log(minimum);


//String to character array
// let userName = "Sagnik";
// // let letters = [...userName];
// let letters = [...userName].join("-");

// console.log(letters);


//Two arrays will contain identical elements
// let fruits = ["apple", "orange", "banana"];
// let newFruits = [...fruits]

// console.log(fruits);
// console.log(newFruits);


//Combining arrays
let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrot", "potato", "cabbage"];

let fruveg = [...fruits, ...vegetables, "eggs", "milk"];
console.log(fruveg);