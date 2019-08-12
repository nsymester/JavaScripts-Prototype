/*
 * @pattern: Object.create
 * @desc Uses 04-object-create to improve on 03-functional-instantiation-with-shared-messages
 * instead of adding all the shared methods to the animal one by one like we're doing now,
 * we can use Object.create to delegate to the animalMethods object instead.
 */

const animalMethods5 = {
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  },
  sleep(length) {
    console.log(`${this.name} is sleeping`);
    this.energy += length;
  },
  play(length) {
    console.log(`${this.name} is playing`);
    this.energy -= length;
  }
};

function Animal5(name, energy) {
  let animal = Object.create(animalMethods5);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

console.info(
  '05 Functional Instantiation \nWith Shared Methods \nand Object Create'
);

const leo5 = Animal5('Leo 5', 7);
const Snoop5 = Animal5('Snoop 5', 10);

leo5.eat(10);
Snoop5.play(5);

console.info('------------- // -------------');
