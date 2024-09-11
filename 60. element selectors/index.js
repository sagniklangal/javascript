/*
Element selectors = Methods used to target and manipulate HTML elements.
They allow you to select one or multiple HTML elements from the DOM(Document Object Model)

1. document.getElementsById() //Element or null
2. document.getElementsByClassName() //HTML Collection
3. document.getElementsByTagName() //HTML Collection
4. document.querySelector() // Element or null
5. Document.querySelectorAll() //Nodelist
*/


const myHeading = document.getElementById("welcome-msg");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);


const fruits = document.getElementsByClassName("fruits");
console.log(fruits);


// Changing colors of fruits class using index
// fruits[0].style.backgroundColor = "Red";


//Changing colors of fruits class using forEach loop
// for(let fruit of fruits){
//   fruit.style.backgroundColor = "Red";
// }


//Changing colors of fruits class using .forEach method
// Array.from(fruits).forEach(fruit => {
//   fruit.style.backgroundColor = "Red";
// });

const h4Elements = document.getElementsByTagName("h4");
console.log(h4Elements);
const liElements = document.getElementsByTagName("li");
console.log(liElements);

// Changing colors of h4 tags using index
// h4Elements[0].style.backgroundColor = "Brown";
// h4Elements[1].style.backgroundColor = "Green";


// // Changing colors of h4 tags using for each loop
// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor = "Brown";
// }


// //Changing colors of li tags using for each loop
// for(let liElement of liElements){
//   liElement.style.backgroundColor = "lightgreen";
// }


//Changing colors of h4 tags using .forEach() method
// Array.from(h4Elements).forEach(h4Element => {
//   h4Element.style.backgroundColor = "Brown";
// });


//Changing colors of li tags using .forEach() method
// Array.from(liElements).forEach(liElement => {
//   liElement.style.backgroundColor = "lightgreen";
// });


const element = document.querySelector(".fruits");
element.style.backgroundColor = "Yellow"; //querySelector will only select the first element of the fruits class


//querySelector in unordered lists
// const ulTag = document.querySelector("ul");
// ulTag.style.backgroundColor = "Yellow";


//querySelectorAll
// const foods = document.querySelectorAll("li");
// console.log(foods);

// foods.forEach(food => {
//   food.style.backgroundColor = "Yellow";
// });




