/*
destructuring = extract values from arrays and objects, then assign them to variables in a convenient way
[] = to perform array destructuring
{} = to perform object destructuring

*/

//Example 1
//Swap values of two variables

// let a = 1;
// let b = 2;

// [a,b] = [b,a];
// console.log(a);
// console.log(b);

//Example 2
//Swap two elements in an array

// const colors = ["red","green","blue","black","white"];

// [colors[0], colors[4]] = [colors[4],colors[0]];

// console.log(colors);

//Example 3
//Assign array elements to variables

// const colors = ["red","green","blue","black","white"];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors); //Creates new array

//Example 4
//Extract values from objects

// const person1 = {
//   firstName: "Sagnik",
//   lastName: "Langal",
//   age: 23,
//   job: "Student"
// }

// const person2 = {
//   firstName: "Vivek",
//   lastName: "Gorain",
//   age: 21,
// }

// // const {firstName, lastName, age, job="Student"} = person1;

// // console.log(firstName);
// // console.log(lastName);
// // console.log(age);
// // console.log(job);


// const {firstName, lastName, age, job="Student"} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

//Example 5
//Destructuring in function parameters

function displayPerson({firstName, lastName, age, job}){
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person1 = {
    firstName: "Sagnik",
    lastName: "Langal",
    age: 23,
    job: "Student"
  }
  
  const person2 = {
    firstName: "Vivek",
    lastName: "Gorain",
    age: 21,
  }

  displayPerson(person1);
