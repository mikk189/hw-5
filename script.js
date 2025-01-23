let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

for (let i = 2; i <= 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}

const numbers = [1, 2, 3, 4, 5];
let i = 0;

while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 7) {
    break;
  }
  console.log(numbers[i]);
}

const n = 10; // Задайте значення n

for (let i = 1; i < 20; i++) {
  if (i >= n) {
    break;
  }
  console.log(i);
}

let i = 1;

while (i <= 20) {
  if (i % 3 === 0) {
    i++;
    continue;
  }
  console.log(i);   
  i++;
}
