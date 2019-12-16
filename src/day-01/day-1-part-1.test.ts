import { fuelRequired } from './day-1-part-1'

// https://adventofcode.com/2019/day/1
// For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
// For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
// For a mass of 1969, the fuel required is 654.
// For a mass of 100756, the fuel required is 33583.

test('fuelRequired()', () => {
  expect(fuelRequired(12)).toBe(2);
  expect(fuelRequired(14)).toBe(2);
  expect(fuelRequired(1969)).toBe(654);
  expect(fuelRequired(100756)).toBe(33583);
});
