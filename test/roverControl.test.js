const moveRover = require('../src/roverControl');
const Rover = require('../src/rover');

const roverOne = new Rover(1, 2, 'N');

test('It changes from North to East', () => {
  expect(moveRover(roverOne, 'R')).toEqual({ direction: 'E', x: 1, y: 2 });
});

test('It changes from East to North', () => {
  expect(moveRover(roverOne, 'L')).toEqual({ direction: 'N', x: 1, y: 2 });
});

test('It moves forward in the direction it is facing', () => {
  expect(moveRover(roverOne, 'M')).toEqual({ direction: 'N', x: 1, y: 3 });
});

test('It takes multiple commands as a string', () => {
  expect(moveRover(roverOne, 'LMLMLM')).toEqual({ direction: 'E', x: 1, y: 1 });
});
