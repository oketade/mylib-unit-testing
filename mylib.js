/**
 * mylib - a small library with the basic arithmetic operations.
 *
 * Every function takes two numbers and returns a number.
 * @module mylib
 */

/**
 * Adds two numbers.
 * @param {number} a - First addend.
 * @param {number} b - Second addend.
 * @returns {number} The sum of a and b.
 */
export function add(a, b) {
  return a + b;
}

/**
 * Subtracts one number from another.
 * @param {number} a - Number to subtract from.
 * @param {number} b - Number to subtract.
 * @returns {number} The difference a - b.
 */
export function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers.
 * @param {number} a - First factor.
 * @param {number} b - Second factor.
 * @returns {number} The product of a and b.
 */
export function multiply(a, b) {
  return a * b;
}

/**
 * Divides one number by another.
 *
 * JavaScript returns Infinity (or NaN for 0 / 0) when dividing by zero
 * instead of failing, so the divisor is checked explicitly here.
 * @param {number} dividend - Number to be divided.
 * @param {number} divisor - Number to divide by.
 * @returns {number} The quotient dividend / divisor.
 * @throws {Error} "ZeroDivision" error when the divisor is 0.
 */
export function divide(dividend, divisor) {
  if (divisor === 0) {
    throw new Error('ZeroDivision: cannot divide by zero');
  }
  return dividend / divisor;
}
