/*
Promise = An object that manages asynchronous operations.
Wrap a Promise object around {asynchronous code}
"I promise to return a value" 
PENDING -> RESOLVED Or REJECTED
new Promise((resolve, reject) => {asynchronous code})

1.Walk the dog
2. Clean the kitchen
3. Take out the trash
*/

// //Using callbacks
// function walkDog(callback){
//   setTimeout(() => {
//     console.log("You walked the dog");
//     callback();
//   }, 1500);
// }
// function cleanKitchen(callback){
//   setTimeout(() => {
//     console.log("You cleaned the kitchen");
//     callback();
//   }, 2500);
// }
// function takeOutTrash(callback){
//   setTimeout(() => {
//     console.log("You took out the trash");
//     callback();
//   }, 500);
// }

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You finished all the chores"));
//   });
// });


//Using Promise
// function walkDog(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You walked the dog");
//     }, 1500);
//   });
// }
// function cleanKitchen(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You cleaned the kitchen");
//     }, 2500);
//   });
// }
// function takeOutTrash(){
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("You took out the trash");
//     }, 500);
//   });
// }

//We will now use method chaining
// walkDog().then(value => {
//   console.log(value);
//   return cleanKitchen().then(value => {
//     console.log(value);
//     return takeOutTrash().then(value => {
//       console.log(value);
//       console.log("You finished all the chores");
//     });
//   })
// });



//reject usage
function walkDog(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walked the dog");
      }
      else{
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}
function cleanKitchen(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You cleaned the kitchen");
      }
      else{
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}
function takeOutTrash(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashOut = false;
      if (trashOut) {
        resolve("You took out the trash");
      }
      else{
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

walkDog().then(value => {
  console.log(value);
  return cleanKitchen().then(value => {
    console.log(value);
    return takeOutTrash().then(value => {
      console.log(value);
      console.log("You finished all the chores");
    });
  });
}).catch(error => {
  console.error(error);
});