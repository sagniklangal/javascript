//<---Example 1 <h1>--->

//Step 1 Create the element
const newH1 = document.createElement("h1");

//Step 2 Add attributes/Properties
newH1.textContent = "I like Biryani";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

//Step 3 Append Element to DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

//If these elements doesn't have any id, we will select them using their class and querySelector
// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[2]);

//Remove the element
// document.body.append(newH1);
// document.body.removeChild(newH1);

// document.getElementById("box1").append(newH1);
// document.getElementById("box1").removeChild(newH1);











