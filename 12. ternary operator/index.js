//Ternary operator = A shortcut to if{} and else{} statements, it helps to assign a variable based on a condition ? codeIftrue : codeIfFalse;

// let age = 2;

// let message = age >= 18 ? "You are an adult" : "You are a minor";

// let message;
// if (age>=18) {
//   message = "You are an adult";
// }
// else{
//   message = "You are a minor";
// }

// console.log(message);

// let time = 20;
// let greeting = time<12 ? "Good Morning" : "Good afternoon"
// console.log(greeting);

// let isStudent = false;
// let student = isStudent ? "You are a student" : "You are not a student";
// console.log(student);

let purchaseAmount = 130;
let discount = purchaseAmount>=100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount*(discount/100)}`);