import { findDistance } from './day-3-part-1'

test('findDistance()', () => {
  const inputOne = "R75,D30,R83,U83,L12,D49,R71,U7,L72";
  const inputTwo = "U62,R66,U55,R34,D71,R55,D58,R83";
  const result = findDistance(inputOne, inputTwo);
  expect(result).toEqual(159)
});

test('findDistance()', () => {
  const inputOne = "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51";
  const inputTwo = "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7";
  const result = findDistance(inputOne, inputTwo);
  expect(result).toEqual(135)
});

