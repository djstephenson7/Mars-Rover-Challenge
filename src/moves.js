const moves = {
  N: {
    NONE: 'N',
    L: 'W',
    R: 'E',
    move: (x, y) => ({ x, y: y + 1 }),
  },
  E: {
    NONE: 'E',
    L: 'N',
    R: 'S',
    move: (x, y) => ({ x: x + 1, y }),
  },
  S: {
    NONE: 'S',
    L: 'E',
    R: 'W',
    move: (x, y) => ({ x, y: y - 1 }),
  },
  W: {
    NONE: 'W',
    L: 'S',
    R: 'N',
    move: (x, y) => ({ x: x - 1, y }),
  },
};


module.exports = moves;
