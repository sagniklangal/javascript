/*
closure = A function defined inside of another function. The inner function has access to the variables and scope of the outer function.
Allow for private variables and state maintenance.
Used fequently in JS frameworks: React, Vue, Angular

*/

//Allow for private variables
// function outer() {
//   let message = "Hello";
  
//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// message = "good bye"; //Out of scope

// outer();

//State of a variable
// function createCounter() {
//   let count = 0;
  
//   function increment() {
//     count++;
//     console.log(`Count increased to ${count}`);
//   }
//   return {increment}; //Returning an object with the method increment
// }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();

// counter.count = 10; //Original count variable can't be modified

// counter.increment();
// counter.increment();
// counter.increment();


// function createCounter() {
//     let count = 0;
    
//     function increment() {
//       count++;
//       console.log(`Count is increased to ${count}`);
//     }
//     function getCount() {
//       return count;
//     }
    
//     return {increment, getCount}; //
//   }

// const counter = createCounter();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

// console.log(`The current count is ${counter.getCount()}`);


//Game
function createGame() {
  let score = 0;

function increaseScore(points) {
  score += points;
  console.log(`+${score}pts`);
}

function decreaseScore(points) {
  score -= points;
  console.log(`-${score}pts`);
}

function getScore(params) {
  return score;
}

  return {increaseScore, decreaseScore, getScore};
}


const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(1);

console.log(`The final score is ${game.getScore()}pts`);








