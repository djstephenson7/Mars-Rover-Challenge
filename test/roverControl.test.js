const moveRover = require('../src/roverController');
const Rover = require('../src/rover');

const roverOne = new Rover(1, 2, 'N');
const roverTwo = new Rover(3, 3, 'E');

test('It changes from North to East', () => {
  expect(moveRover(roverOne, 'R')).toEqual({ direction: 'E', x: 1, y: 2 });
});

test('It changes from East to North', () => {
  expect(moveRover(roverOne, 'L')).toEqual({ direction: 'N', x: 1, y: 2 });
});

test('It moves forward in the direction it is facing', () => {
  expect(moveRover(roverOne, 'M')).toEqual({ direction: 'N', x: 1, y: 3 });
});

test('Rover One takes the test input and retrns the correct position', () => {
  expect(moveRover(roverOne, 'LMLMLMLMM')).toEqual({ direction: 'N', x: 1, y: 3 });
});

test('Rover Two takes the test input and retrns the correct position', () => {
  expect(moveRover(roverTwo, 'MMRMMRMRRM')).toEqual({ direction: 'E', x: 5, y: 1 });
});

test('Throws an error if the rover moves off the grid', () => {
  expect(() => moveRover(roverOne, 'LMMM')).toThrowError(new Error('Out of bounds!'));
  expect(() => moveRover(roverOne, 'MMMM')).toThrowError(new Error('Out of bounds!'));
});
