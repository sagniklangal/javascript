/*
constructor = special method for defining the properties and methods of objects
*/

// const car1 = {
//   make: "Ford",
//   model: "Mustang",
//   year: 2024,
//   color: "red",
//   drive: function(){console.log(`You drive the ${this.model}`)}
// }
// const car2 = {
//   make: "Chevrolet",
//   model: "Camero",
//   year: 2025,
//   color: "blue",
//   drive: function(){console.log(`You drive the ${this.model}`)}
// }
// const car3 = {
//   make: "Dodge",
//   model: "Charger",
//   year: 2026,
//   color: "orange",
//   drive: function(){console.log(`You drive the ${this.model}`)}
// }


function Car(make, model, year, color){
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color,
  this.drive = function(){
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new Car("Ford","Mustang",2024, "Red");
const car2 = new Car("Chevrolet","Camero","2025","Blue");
const car3 = new Car("Dodge","Charger",2026,"Green");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.model);
console.log(car2.make);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

car3.drive();