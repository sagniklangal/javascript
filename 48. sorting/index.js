/*
sort() = method used to sort elements of an array in place. Sorts elements as strings in lexicographic order, not alphabetical

lexicographic = (alphabet + numbers + symbols) as strings
*/

let fruits = ["apple", "orange", "coconut", "cucumber", "dragonfruit", "jackfruit"];

let numbers = [1,10,5,20,13,17];

fruits.sort();
numbers.sort(); //Here sort() is sorting lexicographically, not alphabetically

console.log(fruits);
console.log(numbers);

//How to use sort() in integer array
let numbers1 = [1,10,5,20,13,17];
 numbers1.sort((a,b) => a-b); //Sorting in increasing order
 console.log(numbers1);

 numbers1.sort((a,b) => b-a); //Sorting in decreasing order
 console.log(numbers1);


//Sorting objects
const people = [
  {name: "Sagnik", age: 23, sgpa: 7.97},
  {name: "Vivek", age: 21, sgpa: 8.8},
  {name: "Paresh", age: 25, sgpa: 7.3},
  {name: "Sahid", age: 21, sgpa: 8}
];

// people.sort((a,b) => a.age - b.age); //Increasing order

// console.log(people);

// people.sort((a,b) => b.age - a.age); //Decreasing order

// console.log(people);

//Sorting according to name
people.sort((a,b) => a.name.localeCompare(b.name)); //Lexicographically arranged
console.log(people);