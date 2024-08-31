/* function declaration = Define a reusable block of code that performs a specific task

function expression = A way to define functions as values or variables

1. Callbacks in asynchronous operations
2. Higher-order functions
3. Closures
4. Event listeners
*/


// function hello() {
//   console.log("Hello!");
// }

// const hello = function(){
//   console.log("hello!");
// }
// hello();

// setTimeout(hello, 3000);


// setTimeout(function(){
//   console.log("Hello!");
// },3000);

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(function(element) {
  return Math.pow(element,2);
});
const cubes = numbers.map(function(element) {
  return Math.pow(element,3);
});

console.log(squares);
console.log(cubes);

// function square(element) {
//   return Math.pow(element,2);
// }

// function cube(element) {
//   return Math.pow(element,3);
// }

const evenNums = numbers.filter(function(element){
  return element%2 === 0;
});
console.log(evenNums);

const oddNums = numbers.filter(function(element){
  return element%2 !==0;
});
console.log(oddNums);

const total = numbers.reduce(function(prev, next){
  return prev+next;
});
console.log(total);
