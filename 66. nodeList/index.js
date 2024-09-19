/*
NodeList = Static collection of HTML elements by (id, class, element)
Can be created by using querySelectorAll()
Similar to an array, but no (map, filter, reduce), forEach() method is present
NodeList won't update to automatically reflect changes
*/

let buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);

//Add html/css properties

// buttons.forEach(button => {
//   button.style.backgroundColor = "green";
//   button.textContent += " Hello";
// });


//Click Event Listener

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "tomato";
//   });
// });


//Mouseover + Mouseout Event Listener

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//   });
// });
// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });


//Add an element

// const newButton = document.createElement("button"); //Step 1
// newButton.textContent = "Button 5";
// newButton.classList = "myButtons"; //Step 2
// document.body.appendChild(newButton); //Step 3

// console.log(buttons);

// buttons = document.querySelectorAll(".myButtons");

// console.log(buttons);


//Remove an element

buttons.forEach(button => {
  button.addEventListener("click", event => {
    event.target.remove();
    buttons = document.querySelectorAll(".myButtons");
    console.log(buttons);
  })
})


