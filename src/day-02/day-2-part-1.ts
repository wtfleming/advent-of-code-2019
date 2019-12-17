// https://adventofcode.com/2019/day/1

import { readFileSync } from 'fs';
import * as _ from "lodash";


export function processAll(dataIn: number[]) {
  let i = 0;
  while (true) {
    const chunkedData = _.chunk(dataIn, 4);
    const done = processChunk(chunkedData[i], dataIn);
    if (done) {
      break;
    }
    i++;
  }
}


function processChunk(chunk: number[], outData: number[]) {
  let [opcode, posA, posB, posOut] = chunk;
  let valA = outData[posA];
  let valB = outData[posB];

  if (opcode === 99) {
    return true;
  }

  if (opcode == 1) {
    outData[posOut] = valA + valB;
  } else {
    outData[posOut] = valA * valB;
  }

  return false;
}



const dataIn = readFileSync('./data/day-two.txt', 'utf-8').split(',').map(Number);

// Before running the program, replace position 1 with the value 12 and replace position 2 with the value 2. What value is left at position 0 after the program halts?
dataIn[1] = 12;
dataIn[2] = 2;

processAll(dataIn);
console.log(dataIn[0]);
