/**
 * Unit tests for the mylib module (Mocha + Chai, Expect style).
 *
 * Run with: npm test
 */
import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../mylib.js';

describe('mylib', function () {
  let startTime;

  // Runs once before the first test in this suite.
  before(function () {
    startTime = Date.now();
    console.log('    Starting mylib tests...');
  });

  // Runs once after the last test in this suite.
  after(function () {
    console.log(`    mylib tests finished in ${Date.now() - startTime} ms`);
  });

  describe('add()', function () {
    it('adds two positive numbers', function () {
      expect(add(2, 3)).to.equal(5);
    });

    it('adds a negative number', function () {
      expect(add(5, -8)).to.equal(-3);
    });

    it('adds decimals within floating point precision', function () {
      // 0.1 + 0.2 is 0.30000000000000004 in JavaScript.
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 1e-9);
    });
  });

  describe('subtract()', function () {
    it('subtracts a smaller number from a larger one', function () {
      expect(subtract(10, 4)).to.equal(6);
    });

    it('returns a negative result when the second number is larger', function () {
      expect(subtract(4, 10)).to.equal(-6);
    });
  });

  describe('multiply()', function () {
    it('multiplies two numbers', function () {
      expect(multiply(6, 7)).to.equal(42);
    });

    it('returns 0 when one factor is 0', function () {
      expect(multiply(9, 0)).to.equal(0);
    });

    it('returns a positive result for two negative factors', function () {
      expect(multiply(-3, -4)).to.equal(12);
    });
  });

  describe('divide()', function () {
    it('divides two numbers', function () {
      expect(divide(12, 4)).to.equal(3);
    });

    it('returns a decimal when the division is not even', function () {
      expect(divide(1, 4)).to.equal(0.25);
    });

    it('returns 0 when the dividend is 0', function () {
      expect(divide(0, 5)).to.equal(0);
    });

    it('throws a ZeroDivision error when the divisor is 0', function () {
      // The call is wrapped in a function so Chai can catch the error.
      expect(() => divide(12, 0)).to.throw(Error, 'ZeroDivision');
    });
  });
});
