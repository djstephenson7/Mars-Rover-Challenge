const Rover = require('./rover');
const moves = require('./moves');

const roverOne = new Rover(1, 2, 'N');
const roverTwo = new Rover(3, 3, 'E');

function moveRover(rover, directionString) {
  const commands = directionString.split('');
  for (let i = 0; i < commands.length; i++) {
    const direction = rover.direction;
    if (commands[i] === 'L') {
      rover.direction = moves[direction].L;
    } else if (commands[i] === 'R') {
      rover.direction = moves[direction].R;
    } else if (commands[i] === 'M') {
      rover = moves[direction].move(rover.x, rover.y);
      rover.direction = moves[direction].NONE;
    }
  }
  console.log(`Rover status: ${rover.x}, ${rover.y}, ${rover.direction}`);
  return rover;
}

moveRover(roverOne, 'LMLMLMLMM');
moveRover(roverTwo, 'MMRMMRMRRM');

module.exports = moveRover;
