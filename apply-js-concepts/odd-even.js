//normal use
const number = 4;
const reminder = number % 2;
console.log(reminder == 0);

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
const herNumber = 123;
const isHernumber = isEven(herNumber);
console.log(isHernumber);

//is odd function
function isOdd(number) {
  if (number % 2 != 0) {
    return true;
  } else {
    return false;
  }
}

var mynumber = 426;
const isMyNumberOdd = isOdd(mynumber);
console.log(isMyNumberOdd);
