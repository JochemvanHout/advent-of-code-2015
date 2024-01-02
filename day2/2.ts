import { readFromFile } from "../utils/read-from-file.ts";

const data = await readFromFile(2, false);
const lines = data.split('\n');

let length = 0;

lines.forEach((line) => {
  const [l, w, h] = line.split('x').map(Number);
  const [value1, value2] = [l, w, h].sort((a,b) => a - b).slice(0, 2);
  
  length += (value1 * 2 + value2 * 2) + (l * w * h);

});

console.log(length);