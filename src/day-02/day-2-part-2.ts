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



const dataInFoo = readFileSync('./data/day-two.txt', 'utf-8').split(',').map(Number);

//  Find the input noun and verb that cause the program to produce the output 19690720. What is 100 * noun + verb?
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    const dataIn = [...dataInFoo];
    dataIn[1] = i;
    dataIn[2] = j;
    processAll(dataIn);
    if (dataIn[0] === 19690720) {
      console.log(100 * i + j);
    }
  }
}
