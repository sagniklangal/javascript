// How to accept user input

// 1. Easy way = Window prompt
// 2. Professional way = HTML textbox

// let username;

// username = window.prompt("What's your username?");

// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//   username = document.getElementById("myText").value;
//   console.log(username);
// }

//Changing heading using html textbox

let change;

document.getElementById("mySubmit").onclick = function(){
  change = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${change}`;
}