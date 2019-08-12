/**
 * @desc
 * @pattern
 */

// Constructor without the NEW keyword
function Animal8(name, energy) {
  let animal = Object.create(Animal8.prototype);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

// Constructor with the NEW keyword
function Animal81(name, energy) {
  // const this = Object.create(Animal81.prototype);

  this.name = name;
  this.energy = energy;

  // return this
}

const leo81 = new Animal81('Leo 8', 7);
const snoop81 = new Animal81('Snoop 8', 10);

console.log(`${leo81.name} energy is ${leo81.energy}`);
console.log(`${snoop81.name} energy is ${snoop81.energy}`);

console.info('------------- // -------------');
