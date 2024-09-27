/*
Callback Hell = Situation in Javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
Old pattern to handle asynchronous functions.
Use Promises + async/await to avoid Callback Hell
*/

//Synchronous functions
// function task1(){
//   console.log("Task 1 is complete");
// }
// function task2(){
//   console.log("Task 2 is complete");
// }
// function task3(){
//   console.log("Task 3 is complete");
// }
// function task4(){
//   console.log("Task 4 is complete");
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All tasks are complete");


//Asynchronous functions
// function task1(){
//   setTimeout(() => {
//     console.log("Task 1 is complete");
//   }, 2000);
// }
// function task2(){
//   setTimeout(() => {
//     console.log("Task 2 is complete");
//   }, 1000);
// }
// function task3(){
//   setTimeout(() => {
//     console.log("Task 3 is complete");
//   }, 3000);
// }
// function task4(){
//   setTimeout(() => {
//     console.log("Task 4 is complete");
//   }, 1500);
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All tasks are complete");


//Asynchronous functions with callbacks
function task1(callback){
  setTimeout(() => {
    console.log("Task 1 is complete");
    callback();
  }, 2000);
}
function task2(callback){
  setTimeout(() => {
    console.log("Task 2 is complete");
    callback();
  }, 1000);
}
function task3(callback){
  setTimeout(() => {
    console.log("Task 3 is complete");
    callback();
  }, 3000);
}
function task4(callback){
  setTimeout(() => {
    console.log("Task 4 is complete");
    callback();
  }, 1500);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log("All tasks are complete");
      });
    });
  });
});




