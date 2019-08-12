/*
 * @pattern: Prototypal Instantiation
 * @desc prototype is just a property that every function in JavaScript has and,
 * as we saw above, it allows us to share methods across all instances of a function.
 * All our functionality is still the same
 * but now instead of having to manage a separate object for all the methods,
 * we can just use another object that comes built into the Animal function itself,
 * Animal.prototype.
 *
 */

function Animal7(name, energy) {
  let animal = Object.create(Animal7.prototype);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

Animal7.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal7.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal7.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

const leo7 = Animal7('Leo 7', 7);
const snoop7 = Animal7('Snoop 7', 10);

leo7.eat(10);
snoop7.play(5);

console.info('------------- // -------------');
