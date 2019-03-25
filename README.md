# Mars-Rover-Challenge

## Gameplan

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

##User stories

```
As a rover,
So I have solid ground beneath my wheels,
I'd like a 5x5 terrain.
```

```
As a rover,
So I know which direction I'm heading in,
I'd like North, South, East and West.
```

```
As a rover,
So I know which way to turn 90 degrees,
I'd like the L (Left), R (Right) and M (Move forward) commands.
```

```
As a user,
So I can cover the terrain ground twice as fast,
I'd like there to be two rovers with different starting positions.
```
```
As a user,
So I can give accurate commands to specific rovers,
I'd like the first command to be the rover's starting position and the second to be the movement instructions.
```
