/* 
this keyword doesn't work with arrow functions

this = reference to the object where THIS is used(The object depends on the immediate context)

person.name = this.name

*/

const person1 = {
  name: "Sagnik",
  favFood: "Biryani",
  sayHello: function(){console.log(`Hi! I am ${this.name}`);},
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

const person2 = {
  name: "Rahul",
  favFood: "Pizza",
  sayHello: function(){console.log(`Hi! I am ${this.name}`);},
  eat: function(){
    console.log(`${this.name} is eating ${this.favFood}`);
  }
}

person1.sayHello();
person1.eat();
person2.sayHello();
person2.eat();

