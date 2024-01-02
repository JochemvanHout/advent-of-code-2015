import { readFromFile } from "../utils/read-from-file.ts";

const data = await readFromFile(2, false);
const lines = data.split('\n');

let squareFeet = 0;

lines.forEach((line) => {
  const [l, w, h] = line.split('x').map(Number);

  squareFeet += (2 * l * w) + (2 * w * h) + (2 * h * l) + Math.min(l * w, w * h, h * l);
});

console.log(squareFeet);