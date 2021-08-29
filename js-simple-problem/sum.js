const numbers = [44, 23, 22, 21, 20, 19, 18, 17];
let sum = 0;
for (i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  sum = sum + element;
}
// console.log(sum);
// const total = array.total([]);

function arrayTotal(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
  }
  return sum;
}
const total = arrayTotal([32, 45, 67]);
console.log(total);
