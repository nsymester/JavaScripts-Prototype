/*
 * @pattern: ??
 * @weakness: only one instance of the object has been created
 * @des: Most common way to crete an object
 * Object literal
 */

let animal = {};
animal.name = 'Leo';
animal.energy = 10;

animal.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

animal.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

animal.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.engery -= length;
};

animal.eat(7);
animal.sleep(10);
animal.play(5);
console.log(animal.energy);

console.log('------------- // -------------');
