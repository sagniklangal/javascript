/* arrow functions = A concise way to write function expressions good for simple functions that you use only once

(parameters) => some code


*/

// function hello() {
//   console.log("Hello!");
// }

const hello = (name,age) => {console.log(`Hello ${name}`);
console.log(`You are ${age} years old`);

}
hello("Sagnik",23);

// setTimeout(function() {
//   console.log("Hello!");
// }, 3000);

setTimeout(()=> {
  console.log("Hello!");
}, 3000);


const numbers = [1,2,3,4,5,6];

const squares = numbers.map((element) => 
{
  return Math.pow(element,2);
}
);

const cubes = numbers.map((element)=>{
  return Math.pow(element,3);
});
const oddNums = numbers.filter((element)=>{
  return element%2 !== 0;
});
const evenNums = numbers.filter((element)=>{
  return element%2 === 0;
});
const total = numbers.reduce((accumulator, element)=>{
  return accumulator+element;
});

console.log(squares);
console.log(cubes);
console.log(oddNums);
console.log(evenNums);
console.log(total);

