const moveRover = require('../src/roverControl');
const Rover = require('../src/rover');

const roverOne = new Rover(1, 2, 'N');

test('It changes from North to East', () => {
  expect(moveRover(roverOne, 'R')).toEqual('E');
});

test('It changes from East to North', () => {
  expect(moveRover(roverOne, 'L')).toEqual('N');
});
