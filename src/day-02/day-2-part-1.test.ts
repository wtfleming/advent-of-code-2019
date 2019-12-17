//1,9,10,3,2,3,11,0,99,30,40,50

import { processAll } from './day-2-part-1'
import * as _ from "lodash";



test('processAll()', () => {
  const input = [1,9,10,3,2,3,11,0,99,30,40,50];
  processAll(input);
  expect(input).toEqual([3500,9,10,70, 2,3,11,0,99,30,40,50])
});


test('processAll()', () => {
  const input = [1,0,0,0,99];
  processAll(input);
  expect(input).toEqual([2,0,0,0,99])
});


test('processAll()', () => {
  const input = [2,3,0,3,99];
  processAll(input);
  expect(input).toEqual([2,3,0,6,99])
});


test('processAll()', () => {
  const input = [2,4,4,5,99,0];
  processAll(input);
  expect(input).toEqual([2,4,4,5,99,9801])
});


test('processAll()', () => {
  const input = [1,1,1,4,99,5,6,0,99];
  processAll(input);
  expect(input).toEqual([30,1,1,4,2,5,6,0,99])
});
