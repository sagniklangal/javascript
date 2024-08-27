// while loop = Repeat some code while some condition is true

// let userName = "";
// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter your name");
// }
// console.log(`Hello ${userName}`);

// do-while loop
// let userName;
// do{
//   userName = window.prompt("Enter your name");
// }while (userName === "" || userName === null)
// console.log(`Hello ${userName}`);

// Undefined
// let userName;
// while (userName === "" || userName === null){
//   userName = window.prompt("Enter your name");
// }
// console.log(`Hello ${userName}`);


// Password program
// let loggedIn = false;
// let username;
// let password;
// while (!loggedIn) {
//   username = window.prompt("Enter your username");
//   password = window.prompt("Enter your password");

//   if (username === "myUsername" && password === "myPassword") {
//     loggedIn = true;
//     console.log("You are logged in");
//   }
//   else{
//     console.log("Invalid credentials! Please try again");
//   }
// }

//Password program using do-while
let loggedIn = true;
let username;
let password;

do {
  username = window.prompt("Enter your username");
  password = window.prompt("Enter your password");

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in");
  }
  else{
    console.log("Invalid credentials! Please try again");
  }
}while (!loggedIn)


