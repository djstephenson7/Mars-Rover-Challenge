const Rover = require('./rover');

const roverOne = new Rover(1, 2, 'N');


function moveRover(roverOne, directionString) {
  // 1. Take the string full of letters and break it down.
  // 2. Check each letter against the position of the Rover. E.g. what effect will
  // 'L' have on a Rover facing East?
  console.log(directionString);
  console.log(`Rover facing ${roverOne.direction}`);
}


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
