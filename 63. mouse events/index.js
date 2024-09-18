/*
eventListener = Listen for specific events to create interactive web pages
events: click, mouseover, mouseout
.addEventListener(event, callback).
.addEventListener(event, arrow function)
*/

// const myBox = document.getElementById("myBox");

// function changeColor(event){
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Color is changed";
// }

// myBox.addEventListener("click", changeColor);
/*
event object is provided to us by the browser automatically. We need not to provide it explicitly.
like myBox.addEventListener("click", changeColor(event))
*/

// const myBox = document.getElementById("myBox");

// myBox.addEventListener("click", function(event){
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "Color is changed";
// });


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

myBox.addEventListener("click", event =>{
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH!";
});

myBox.addEventListener("mouseover", event => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it";
});

myBox.addEventListener("mouseout", event => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me";
});

myButton.addEventListener("click", event =>{
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH!";
});

myButton.addEventListener("mouseover", event => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "Don't do it";
});

myButton.addEventListener("mouseout", event => {
  myBox.style.backgroundColor = "lightgreen";
  myBox.textContent = "Click me";
});

