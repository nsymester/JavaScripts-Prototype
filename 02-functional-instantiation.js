/*
 * @pattern: Functional Instantiation
 * @desc Constructor Function
 * encapsulate the logic in 01-common.js inside of a function
 * that we can invoke whenever we needed to create a new animal.
 * @weakness: recreation of the methods increases memory usage
 * @solution: Create a new animal, move them to their own object
 * then have each animal reference that object
 * See 03-functional-instantiation-with-shared-messages.js
 */

function Animal2(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function(length) {
    console.log(`${this.name} sleeping`);
    this.energy += length;
  };

  animal.play = function(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  };

  return animal;
}

const leo2 = Animal2('leo 2', 7);
const snoop2 = Animal2('Snoop 2', 10);

leo2.eat(7);
leo2.sleep(7);
leo2.play(10);
console.log(leo2.energy);

snoop2.eat(10);
snoop2.sleep(10);
snoop2.play(7);
console.log(snoop2.energy);

console.log('------------- // -------------');
