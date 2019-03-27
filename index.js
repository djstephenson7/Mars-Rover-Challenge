const moveRover = require('./src/roverController');
const Rover = require('./src/rover');

const roverOne = new Rover(1, 2, 'N');
const roverTwo = new Rover(3, 3, 'E');

moveRover(roverOne, 'LMLMLMLMM');
moveRover(roverTwo, 'MMRMMRMRRM');
