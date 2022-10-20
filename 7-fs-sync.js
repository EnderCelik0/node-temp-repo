// const fs = require('fs');
// same thing
const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');
console.log('done with this task');
console.log('starting the next one');
// console.log(first, second);

// dosya yoksa verilen konumda dosyayı oluşturup içine yazar dosya varsa direk içine yazar
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first} , ${second}`
);
