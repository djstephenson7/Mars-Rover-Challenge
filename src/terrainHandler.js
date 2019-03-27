function terrainHandler(rover) {
  if (
    rover.x > 5
    || rover.x < 0
    || rover.y > 5
    || rover.y < 0
  ) {
    throw new Error('Out of bounds!');
  }
}

module.exports = terrainHandler
