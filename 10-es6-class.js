/**
 * @desc
 * @pattern
 *
 */

class Animal10 {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }

  sleep(amount) {
    console.log(`${this.name} is sleeping.`);
    this.energy += amount;
  }

  play(amount) {
    console.log(`${this.name} is playing.`);
    this.energy -= amount;
  }
}

const leo10 = new Animal10('Leo 10', 7);
const snoop10 = new Animal10('Snoop 10', 10);

leo10.eat(7);
leo10.sleep(7);
leo10.play(10);
console.log(leo10.energy);

snoop10.eat(10);
snoop10.sleep(10);
snoop10.play(7);
console.log(snoop10.energy);

console.info('------------- // -------------');
