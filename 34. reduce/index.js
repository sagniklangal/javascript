/* .reduce() = reduce the elements of an array to a single value
*/

// const prices = [5,10,15,20,25,30];

// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`);

// function sum(previous, nextElement) {
//   return previous + nextElement;
// }


const grades = [30,40,50,60,70,80,90,100];
const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function getMin(accumulator, element) {
  return Math.min(accumulator, element);
}

