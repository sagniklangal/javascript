/*
static = Keyword that defines properties or methods that belong to a class itself rather than the objects created from that class(class owns anything static, not the objects)
*/

// class mathUtil{
//   static PI = 3.14159;

//   static getDiameter(radius){
//     return 2 * radius;
//   }
//   static getCircumFerence(radius){
//     return 2 * radius * this.PI;
//   }
//   static getArea(radius){
//     return this.PI * radius * radius;
//   }
// }

// console.log(mathUtil.PI);
// console.log(mathUtil.getDiameter(20));
// console.log(mathUtil.getCircumFerence(5).toFixed(2));
// console.log(mathUtil.getArea(10).toFixed(2));



class User{
  static userCount = 0;

  constructor(username){
    this.username = username;
    User.userCount++;
  }
  sayHello(){
    console.log(`Hello! my username is ${this.username}`)
  }
  static getUserCount(){
    console.log(`There are ${this.userCount} users online`);
  }
}

const user1 = new User("Sagnik");
const user2 = new User("Rahul");
const user3 = new User("paresh");

console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
console.log(User.userCount);

user1.sayHello();
user2.sayHello();
user3.sayHello();

User.getUserCount();