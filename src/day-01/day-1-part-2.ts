// https://adventofcode.com/2019/day/1

import { readFileSync } from 'fs';

// To find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.
function fuelRequired(mass) {
  return Math.floor(mass / 3) - 2;
}


export function totalFuelRequired(mass) {
  let amtRequired = fuelRequired(mass);

  let nextRequired = amtRequired;
  while (true) {
    nextRequired = fuelRequired(nextRequired);
    if (nextRequired <= 0) {
      return amtRequired;
    }
    amtRequired += nextRequired;
  }
}


const data = readFileSync('./data/day-one.txt', 'utf-8').split('\n').filter(x => x != '');
const totalFuel = data
  .map(x => parseInt(x, 10))
  .map(totalFuelRequired)
  .reduce((acc, val) => acc + val, 0);

console.log(totalFuel);
