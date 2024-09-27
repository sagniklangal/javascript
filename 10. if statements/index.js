// let age = 21;

// if(age >= 18){
//   console.log("You are old enough");
// }
// else{
//   console.log("You are not old enough");
// }

// let time = 15;

// if (time < 12) {
//   console.log("good morning");
// }
// else{
//   console.log("Good afternoon");
// }

// let isStudent = false;

// if (isStudent) {
//   console.log("you are a student");
// }else{
//   console.log("You are not a student");
// }

//Nested if else statements
// let age = 2;
// let haslicense = false;

// if(age >= 16){
//   console.log("You are old enough to drive");
//   if (haslicense) {
//     console.log("You have your license");
//   }
//   else{
//     console.log("You don't have a license yet!");
//   }
// }
// else{
//   console.log("you must be 16+ to have a license");
// }

//if-else-if
// let age = 0;

// if (age >=100) {
//   console.log("You are too old to enter this site");
// }
// else if(age == 0){
//   console.log("You can't enter. You were just born");
// }
// else if(age>=18){
//   console.log("You are old enough to enter the site");
// }
// else if (age < 0) {
//   console.log("Your age can't be below 0");
// }

// else{
//   console.log("You must be 18 to enter this site");
// }

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
  age = myText.value;
  age = Number(age);
  
  if (age >=100) {
    resultElement.textContent = `You are too old to enter this site`;
  }
  else if(age == 0){
    resultElement.textContent = `You can't enter. You were just born`;
  }
  else if(age>=18){
    resultElement.textContent = `You are old enough to enter the site`;
  }
  else if (age < 0) {
    resultElement.textContent = `Your age can't be below 0`;
  }
  
  else{
    resultElement.textContent = `You must be 18 to enter this site`;
  }
}

