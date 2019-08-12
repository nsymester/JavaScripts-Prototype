/**
 * @pattern: Functional Instantiation with Shared Methods
 */

const animalMethods3 = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing.`);
    this.energy -= length;
  }
};

function Animal3(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;
  animal.eat = animalMethods3.eat;
  animal.sleep = animalMethods3.sleep;
  animal.play = animalMethods3.play;

  return animal;
}

const leo3 = Animal3('leo 3', 7);
const snoop3 = Animal3('Snoop 3', 10);

leo3.eat(7);
leo3.sleep(7);
leo3.play(10);
console.log(leo3.energy);

snoop3.eat(10);
snoop3.sleep(10);
snoop3.play(7);
console.log(snoop3.energy);

console.log('------------- // -------------');
