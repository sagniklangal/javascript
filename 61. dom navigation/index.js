/*
DOM Navigation = The process of navigating through the structure of an HTML document using Javascript

.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children
*/


//<------.firstElementChild------>

// const element = document.getElementById("desserts");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = "Yellow";


// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//   const firstChild = ulElement.firstElementChild;
//   firstChild.style.backgroundColor = "Yellow";
// });


//<------.lastElementChild------>

// const element = document.getElementById("fruits");
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = "Yellow";


// const ulElements = document.querySelectorAll("ul");
// ulElements.forEach(ulElement => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "Yellow";
// });


//<------.nextElementSibling------>

// const element = document.getElementById("apple");
// // const element = document.getElementById("fruits");
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = "Yellow";


//<------.previousElementSibling------>

// // const element = document.getElementById("orange");
// const element = document.getElementById("vegetables");
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = "Yellow";


//<------.parentElement------>

// const element = document.getElementById("apple");
// const parent = element.parentElement;
// parent.style.backgroundColor = "Yellow";


//<------.children------>

// const element = document.getElementById("fruits");
// const children = element.children;
// console.log(children);

//HTML collections doesn't have any built in .forEach() method. So, we need to typecast it to an array and then use the forEach() method
// Array.from(children).forEach(child => {
//   child.style.backgroundColor = "Yellow";
// });

// children[1].style.backgroundColor = "Yellow";








