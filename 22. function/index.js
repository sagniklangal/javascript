//function = A section of reusable code.

// function happyBirthday(userName, age){
//   console.log(`Happy Birthday to ${userName}`);
//   console.log(`You are ${age} years old`);
// }
// happyBirthday("Sagnik", 23);
// happyBirthday("Vivek", 21);
// happyBirthday("Sahid", 21);


// //Add two numbers

// function add(x, y){
//   result = x + y;
//   return result;
// }

// // Subtract two numbers

// function sub(x ,y){
//   return x-y;
// }

// // Multiply two numbers

// function mul(x ,y){
//   return x*y;
// }

// // Divide two numbers

// function div(x ,y){
//   return x/y;
// }

// //  let ans = add(2, 3);
// //  console .log(ans);

// console .log(add(2, 3));
// console .log(sub(3, 2));
// console .log(mul(2, 3));
// console .log(div(3, 2));


//Even
function isEven(x){
  // if (x%2 === 0) {
  //   return true;
  // }
  // else{
  //   return false;
  // }

  return x%2 === 0? true : false;
}
console .log(isEven(10));

//email
function isValidEmail(email){
  // if (email.includes("@")) {
  //   return true;
  // }
  // else{
  //   return false;
  // }
  return email.includes("@")? true : false;
}

console.log(isValidEmail("abc@email.com"));
console.log(isValidEmail("abcemail.com"));

