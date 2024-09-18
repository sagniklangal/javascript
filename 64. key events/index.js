/*
eventListener = Listen for specific events to create interactive web pages
events: keydown, keyup
document.addeventListener(event, callback);
*/

// document.addEventListener("keydown", event => {
//   console.log(event);
// });



// document.addEventListener("keydown", event => {
//   console.log(`key down = ${event.key}`);
// });
// document.addEventListener("keyup", event => {
//   console.log(`key up = ${event.key}`);
// });


// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown", event => {
//   myBox.textContent = "keydown";
//   myBox.style.backgroundColor = "tomato";
// });
// document.addEventListener("keyup", event => {
//   myBox.textContent = "keyup";
//   myBox.style.backgroundColor = "lightblue";
// });


const myBox = document.getElementById("myBox");
const moveAmount = 50;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
  myBox.textContent = "";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event => {
  myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event => {
  console.log(event.key);
  if (event.key.startsWith("Arrow")) {
    event.preventDefault(); //To prevent the default boundary
    
    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
    
      case "ArrowDown":
        y += moveAmount;  
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }
    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
