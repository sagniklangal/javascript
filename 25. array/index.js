//array = A variable like structure that can hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[0] = "coconut"

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

fruits.push("jackfruits");
fruits.push("guava");
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift("mango");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// let numOffruitss = fruits.length;
// console.log(numOffruitss);

// let index = fruits.indexOf("coconut");
// console.log(index);


// for loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

//Reverse for loop
// for (let i = fruits.length-1; i >= 0; i--) {
//   console.log(fruits[i]);
// }

//Enhanced for loop
// for (let fruit of fruits) {
//   console.log(fruit);
// }

//Sort the array
// fruits.sort();
// for (let fruit of fruits) {
//     console.log(fruit);
// }

//Reverse sort
fruits.sort().reverse();
for (let fruit of fruits) {
    console.log(fruit);
}