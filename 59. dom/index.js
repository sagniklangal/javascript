/*
DOM = Document Object Model
object{} that represents the page you see in the web browser and provides you with an API to interact with it.
Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree-like representation.
Javascript can access the DOM to dynamically change the content,  structure, and style of a web page.
*/

// console.log(document);

// console.dir(document);

// document.title = "Dom manipulation";

//Dark theme
// document.title = "Dom manipulation";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

const username = "Sagnik";const welcomeMsg = document.getElementById("welcome-msg");
welcomeMsg.textContent += username === "" ? `Guest` : username;