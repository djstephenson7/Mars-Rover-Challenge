const Rover = require('./rover');
const moves = require('./moves');

const roverOne = new Rover(1, 2, 'N');
const roverTwo = new Rover(3, 3, 'E');

function moveRover(rover, directionString) {
  const direction = rover.direction;
  if (directionString === 'L') {
    rover.direction = moves[direction].L;
    console.log(direction);
  } else if (directionString === 'R') {
    rover.direction = moves[direction].R;
    console.log(direction);
  } else if (directionString === 'M') {
    rover = moves[direction].move(rover.x, rover.y);
    console.log(direction);
    console.log(rover);
  }


  // 1. Take the string full of letters and break it down.
  // 2. Check each letter against the position of the Rover. E.g. what effect will
  // 'L' have on a Rover facing East?
  console.log(`Rover status: ${rover.direction}, ${rover.x}, ${rover.y}`);
  return rover.x, rover.y, rover.direction;
}

// moveRover(roverOne, 'L')
moveRover(roverOne, 'M');

function directionHandler() {
  // 1. Case: when facing North
  //  - receive 'L': face West || receive 'R': face East
  // 2. Case: when facing West
  //  - receive 'L': face South || receive 'R': face North
  // 3. Case: when facing East
  //  - receive 'L': face North || receive 'R': face South
  // 4. Case: when facing South
  //  - receive 'L': face East || receive 'R': face West
}

function directionConverter() {
  // N: North
  // S: South
  // E: East
  // W: West
}

function terrainHandler() {
  // 1. if latitude & longitude are < 0 or > 5, throw 'out of bounds' error
  // 2. If x, y coordinates are equal to another rover's, throw 'Collision' error
}

module.exports = moveRover;
