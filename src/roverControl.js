const Rover = require('./rover');
const moves = require('./moves');

const roverOne = new Rover(1, 2, 'N');
const roverTwo = new Rover(3, 3, 'E');

function moveRover(rover, directionString) {
  const hi = directionHandler(directionString);
  console.log(hi);
  const direction = rover.direction;
  if (directionString === 'L') {
    rover.direction = moves[direction].L;
  } else if (directionString === 'R') {
    rover.direction = moves[direction].R;
  } else if (directionString === 'M') {
    rover = moves[direction].move(rover.x, rover.y);
    console.log(direction);
    console.log(rover);
  }

  console.log(`Rover status: ${rover.direction}, ${rover.x}, ${rover.y}`);
  return rover.x, rover.y, rover.direction;
}

function directionHandler(commands) {
  return commands.split('');
}

directionHandler('LMLMLMLMM')

moveRover(roverOne, 'LMLMLMLMM')
// moveRover(roverOne, 'M');


function terrainHandler() {
  // 1. if latitude & longitude are < 0 or > 5, throw 'out of bounds' error
  // 2. If x, y coordinates are equal to another rover's, throw 'Collision' error
}

module.exports = moveRover;
