# Mars-Rover-Challenge

Mars Rover Challenge is a challenge to help NASA explore Mars!

## Installation

Install npm and install the dependencies:
```
npm install
```

## Testing

Tested with Jest. To run:

```
npm test
```

## Linting

Linted with Eslint (Airbnb config). To run:

```
npx eslint yourfolder/yourfile
```

## Usage

Create a new Rover object and assign it to a constant:

```
const roverOne = new Rover(1, 2, 'N');
```

Command your rover with the moveRover function. The first argument takes the name of the rover you want to move, the second argument is the command string to move it.

```
moveRover(roverOne, 'LMLMLMLMM');
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Planning

Create a grid. The bottom left coordinates are 0,0, while the top right is 5,5.
  There should be 5 rows and 5 columns.
  First 0 is column. Second 0 is row.

Create directions:
  North (N)
  South (S)
  East (E)
  West (W)

Create commands:
  L: turn 90 degrees left
  R: turn 90 degrees right.
  M: Move forward 1 space.

There should be two rovers.
  Rover 1: position 1, 2 and facing North. Receives 'LMLMLMLMM' commands.
    Expected output: 1,3 N
  Rover 2: position 3,3 and facing East. Receives 'MMRMMRMRRM' commands.
    Expected output: 5,1 E.

Each rover has two lines of input:
  Line 1: Gives the rover's position.
  Line 2: Input instructions.
