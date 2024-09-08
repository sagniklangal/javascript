/*
synchronous = Executes line by line consecutively in a sequential manner. Code that waits for an operation to complete

asynchronous = Allows multiple operations to be performed councurrently without waiting. Doesn't block the execution flow and allows the program to continue(I/O operations, network requests, fetching data)
Handled with: Callbacks, promises, Async/Await
*/

// setTimeout(()=> console.log("Task 1", 3000));

// console.log("Task 2");
// console.log("Task 3");
// console.log("Task 4");




function func1(callback){
  setTimeout(()=> {
    console.log("Task 1");
    callback();
  }, 3000);
}

function func2(){
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}

func1(func2);











