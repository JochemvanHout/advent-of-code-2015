import { readFromFile } from "../utils/read-from-file.ts";

const data = await readFromFile(1, false);
const chars = data.split('');

let sum = 0;

chars.forEach((char: string, index: number) => {
  if (char === '(') sum += 1;
  if (char === ')') sum -= 1;  
});

console.log(sum);
