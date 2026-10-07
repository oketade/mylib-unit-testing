# mylib-unit-testing

A small JavaScript library (`mylib`) with the four basic arithmetic operations,
a main program that uses it, and a Mocha + Chai unit test suite.

## Files

| File | Purpose |
| --- | --- |
| `mylib.js` | The library: `add`, `subtract`, `multiply`, `divide` |
| `main.js` | Main program that imports `mylib` and runs each function |
| `tests/mylib.test.js` | Unit tests (Mocha + Chai, Expect style) |

## Requirements

- Node.js 18 or newer

## Usage

Install the test dependencies:

```
npm install
```

Run the main program:

```
npm start
```

Run the unit tests (this does not execute the main program):

```
npm test
```

## Notes

`divide` throws a `ZeroDivision` error when the divisor is `0`, instead of
returning `Infinity` as plain JavaScript division does.
