/*
class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor function. 

Ex. static keyword, encapsulation, inheritence
*/

class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }

  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + this.price * salesTax;
  }
}

const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 30.7);
const product3 = new Product("Underwear", 100);

const salesTax = 0.07;

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();

const total1 = product1.calculateTotal(salesTax);
console.log(`Total for ${product1.name} is $${total1.toFixed(2)}`);

const total2 = product2.calculateTotal(salesTax);
console.log(`Total for ${product2.name} is $${total2.toFixed(2)}`);

const total3 = product3.calculateTotal(salesTax);
console.log(`total for ${product3.name} is $${total3.toFixed(2)}`);