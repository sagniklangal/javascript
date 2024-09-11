//<---Example 1 <h1>--->

//Step 1 Create the element
const newListItem = document.createElement("li");

//Step 2 Add attributes/Properties
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

//Step 3 Append Element to DOM
// document.body.append(newListItem);

// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

//If these items doesn't have ids
// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[0]);

//Remove the element
// document.getElementById("fruits").removeChild(newListItem);











