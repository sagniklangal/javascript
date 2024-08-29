// rest parameters = (...rest) allow a function work with a variable number of arguments by bundling them into an array 

// spread = Expands an array into seperate elements 

// rest = Bundles seperate elements into an array

function openFridge(...foods){
  console.log(foods);
  console.log(...foods);
}

function toGetFood(...foods){
  return foods;
}


const food1 = "pizza";
const food2 = "hamburger";
const food3 = "sushi";
const food4 = "hotdog";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);

const eatables = toGetFood(food1, food2, food3, food4, food5);
console.log(eatables);