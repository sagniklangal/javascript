/*
nested objects = objects inside of other objects. Allows you to represent more complex data structures. Child object is enclosed by a parent object

Person{Address{}, ContactInfo{}}
ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

*/

// const person = {
//   fullName: "Sagnik Langal",
//   age: 23,
//   isStudent: true,
//   hobbies: ["Programming", "Gaming", "Cooking"],
//   address: {
//     village: "Chhinamore",
//     state: "West Bengal",
//     country: "India",
//   }
// }

// console.log(person.address.country);
// console.log(person.hobbies);
// console.log(person.address.state);

// for(const property in person.address){
//   console.log(person.address[property]);
// }


class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new Person("Sagnik Langal", 23, "Near Abhay Sangha", "Singur", "India");

const person2 = new Person("Vivek Gorai", 21, "Newtown", "Kolkata", "India");

console.log(person1.address);
console.log(person1.address.street);

console.log(person2.address);
console.log(person2.address.city);
