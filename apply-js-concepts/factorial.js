//Factorial
/** 3!= 1 X 2 X 3
 * 4!= 1 X 2 X 3 X 4
 * 5!= 1 X 2 X 3 X 4 X 5
 * 6!= 1 X 2 X 3 X 4 X 5 X 6
 * 7!= 1 X 2 X 3 X 4 X 5 X 6 X 7 */

var factorial = 1;
for (var i = 1; i <= 7; i++) {
  console.log(i);

  factorial = factorial * i;
}
console.log(factorial);

//for loop reversed order

function getFactorial2() {
  let factorial = 1;
  for (var i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
console.log(factorial);
