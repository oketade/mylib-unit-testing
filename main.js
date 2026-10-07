/**
 * Main program: imports the mylib module and runs each of its functions.
 *
 * Run with: npm start
 */
import { add, subtract, multiply, divide } from './mylib.js';

const a = 12;
const b = 4;

console.log(`${a} + ${b} = ${add(a, b)}`);
console.log(`${a} - ${b} = ${subtract(a, b)}`);
console.log(`${a} * ${b} = ${multiply(a, b)}`);
console.log(`${a} / ${b} = ${divide(a, b)}`);

// Dividing by zero throws, so it has to be caught by the caller.
try {
  console.log(`${a} / 0 = ${divide(a, 0)}`);
} catch (error) {
  console.log(`${a} / 0 -> ${error.message}`);
}
