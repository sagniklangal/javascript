/* .filter() = creates a new array by filtering out elements
*/
 
// let numbers = [1,2,3,4,5,6,7];
// const evenNums = numbers.filter(isEven);
// const oddNums = numbers.filter(isOdd);

// console.log(evenNums);
// console.log(oddNums);


// function isEven(element) {
//   return element % 2 === 0;
// }

// function isOdd(element) {
//   return element % 2 !== 0;
// }


// const ages = [16,17,18,19,20, 40];
// const adults = ages.filter(isAdult);
// const minors = ages.filter(isMinor);

// console.log(adults);
// console.log(minors);


// function isAdult(element) {
//   return element >= 18;
// }

// function isMinor(element) {
//   return element < 18;
// }


const words = ["apple", "orange", "banana", "kiwi", "pomegranate", "coconut"];
const shortWords = words.filter(shorten);
const longWords = words.filter(longen);

console.log(shortWords);
console.log(longWords);

function shorten(element) {
  return element.length <= 6;
}

function longen(element) {
  return element.length > 6;
}
