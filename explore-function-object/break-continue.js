// var i = 0;
// while (i < 15) {
//   console.log(i);
//   if (i == 5) {
//     break;
//   }
//   i++;
// }

var numbers = [54, 55, 85, 46, 44, 25, 45, 95];
var number;
// for (var i = 0; i < numbers.length; i++) {
//   number = numbers[i];
//   console.log(number);
// }

//for continue then code will run to next line
//for break code will stop
for (var i = 0; i < numbers.length; i++) {
  number = numbers[i];
  if (number > 90) {
    continue;
  }
  console.log(number);
}
