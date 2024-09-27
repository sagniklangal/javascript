// callback = a function that is passed as an argument
/* 
used to handle asynchronous operation:

  1. Reading a file
  2. Network requests
  3. Interacting with database

  Hey, when you're done, call this next.
*/ 

hello(leave);
leave();

function hello(callback){
  console.log("Hello!");
  callback();
}

function leave(){
  console.log("Leave!");
}

function goodbye() {
  console.log("Goodbye!");
}