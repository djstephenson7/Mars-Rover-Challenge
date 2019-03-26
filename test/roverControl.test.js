const moveRover = require('../src/roverControl')
const Rover = require('../src/rover')

const roverOne = new Rover(1, 2, 'N');

test('It changes from North to West', () => {
  expect(moveRover(roverOne, 'L')).toEqual('W')
});
