/*
if in html, button is before image
<button id="myButton">Hide</button><br>
<img id="myImg" src="images/image.png" width="400px">
*/

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
//   if (myImg.style.display === "none") {
//     myImg.style.display = "block";
//     myButton.textContent = "Hide";
//   }
//   else{
//     myImg.style.display = "none";
//     myButton.textContent = "Show";
//   }
// });



/*
if in html, image is before button
<img id="myImg" src="images/image.png" width="400px"><br>
<button id="myButton">Hide</button><br>
*/

// Using visibility instead of display we are actually reserving space for the Image. Else, the button will take up the space reserved for Image.

const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event => {
  if (myImg.style.visibility === "hidden") {
    myImg.style.visibility = "visible";
    myButton.textContent = "Hide";
  }
  else{
    myImg.style.visibility= "hidden";
    myButton.textContent = "Show";
  }
});
