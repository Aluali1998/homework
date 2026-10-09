//1

for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    continue;
  }
  console.log(i);
}

//2
const number = +prompt("Введите число");
let fact = 1;

for (let i = 1; i <= number; i++) {
  fact *= i;
}

console.log(fact);
