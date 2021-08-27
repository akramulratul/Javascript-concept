// let factorial = 1;

// for (let i = 1; i <= 5; i++) {
//   factorial = factorial * 1;
// }
// console.log(factorial);

function getfactorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
  }
  return fact;
}
var factorial = getfactorial(9);
console.log(factorial);

//while loop

function getFactorial(num) {
  let fact = 1;
  let i = 1;
  while (i <= num) {
    fact = fact * 1;
    i++;
  }
  return fact;
}

const myFactorial = getFactorial(6);
console.log(myFactorial);
