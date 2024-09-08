/*
Error = An object that is created to represent a problem that occurs often with user input or establishing a connection

try{ } = Encloses code that might potentially cause an error

catch{ } = Catch and handle any thrown Errors from try{ }

finally{ } = (optional) Always executes. used mostly for clean up.
ex. close files, close connection, release resources
*/

// console.lag("Hello");

// try{
//   console.log(x);
//   //Network Errors
//   //Promise Rejection
//   //Security Errors
// }
// catch(error){
//   // console.log(error);
//   console.error(error);
// }
// finally{
//   //Close files
//   //Close connection
//   //Release Resources
//   console.log("This always executes");
// }


try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number( window.prompt("Enter a divisor"));

  if (divisor == 0) {
    throw new Error("You can't divide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.log(result);
} 
catch (error) {
  console.error(error);
}

console.log("You have reached the end of the program");













