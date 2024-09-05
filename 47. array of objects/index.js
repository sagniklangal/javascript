const fruits = [
  {name: "apple", color: "red", calories: 95}, 
  {name: "orange", color: "orange", calories: 45}, 
  {name: "coconut", color: "brown", calories: 150}, 
  {name: "pineapple", color: "yellow", calories: 80}];

  // console.log(fruits[0].name);
  // console.log(fruits[0].color);
  // console.log(fruits[0].calories);

  // console.log(fruits[1].name);
  // console.log(fruits[1].color);
  // console.log(fruits[1].calories);

  // console.log(fruits[2].name);
  // console.log(fruits[2].color);
  // console.log(fruits[2].calories);


  // <------------push()------------>  
// fruits.push({name: "Mango", color: "Yellow", calories: 100});

// console.log(fruits);


// <------------pop()------------>  
// fruits.pop();

// <------------splice()------------> 
// fruits.splice(1,2); //Removing the elements of 1 and 2 indices
// console.log(fruits);


// <------------forEach()------------>
// fruits.forEach(fruit => console.log(fruit));

// fruits.forEach(fruit => console.log(fruit.name));

// <------------map()------------>
// const fruitNames = fruits.map(fruit => fruit.name);
// const colors = fruits.map(fruit => fruit.color);
// const calories = fruits.map(fruit => fruit.calories);
// console.log(fruitNames);
// console.log(colors);
// console.log(calories);

// <------------filter()------------>
// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
// const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
// const highCalFruits = fruits.filter(fruit => fruit.calories > 100);

// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// <------------reduce()------------>
// const maxCalFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
// console.log(maxCalFruit);
// console.log(maxCalFruit.calories);

// const minCalFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
// console.log(minCalFruit);
// console.log(minCalFruit.calories);
