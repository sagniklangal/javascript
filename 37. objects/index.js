/* 
object = A collection of related properties and/or methods 

Can represent real world objects (people, products, places)

object = {
key:value,
function()
}
*/

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function(){console.log("Hello! I am spongebob!")},
  eat: function(){
    console.log("I am eating a Crabby Patty");
  }
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 32,
  isEmployed: false,
  sayHello: () => {console.log("Hey, I am Patrick...");},
  eat: () => {
    console.log("I am eating roasted beef, chicken, pizza, cocacola");
  }
}

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);

person1.sayHello();
person2.sayHello();

person1.eat();
person2.eat();