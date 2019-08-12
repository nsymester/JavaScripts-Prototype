/*
 * @pattern: Object.create
 * Improves on 03-functional-instantiation-with-shared-messages
 * Whenever there's a failed property lookup on child,
 * JavaScript will delegate that lookup to the parent object.
 */

const parent = {
  name: 'Stacey',
  age: 35,
  heritage: 'Irish'
};

const child = Object.create(parent);
child.name = 'Ryan';
child.age = 7;

console.log(child.name); // Ryan
console.log(child.age); // 7
console.log(child.heritage); // Irish

console.log('------------- // -------------');
