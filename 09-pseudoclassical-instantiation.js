/**
 * @desc
 * @pattern
 */

// Constructor function
function Animal9(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal9.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal9.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

Animal9.prototype.play = function(length) {
  console.log(`${this.name} is playing.`);
  this.energy -= length;
};

const leo9 = new Animal9('Leo 9', 7);
const snoop9 = new Animal9('Snoop 9', 10);

leo9.eat(7);
leo9.sleep(7);
leo9.play(10);
console.log(leo9.energy);

snoop9.eat(10);
snoop9.sleep(10);
snoop9.play(7);
console.log(snoop9.energy);

console.info('------------- // -------------');
