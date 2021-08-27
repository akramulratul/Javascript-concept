//var
var time = "10:15";
var bookPrice = 150;
var isWhiteColor = false;

//array
var partners = ["sajid", "mojid", "nojid", "lajit"];
var elementCount = partners.length;
var nojidIndex = partners.indexOf("nojid");
partners.push("kajit");
partners.pop("");

//conditional
if (bookPrice < 120) {
  console.log("I will buy this book");
} else {
  console.log("lorem10");
}
//
var i = 0;
while (i <= 17) {
  //do some work
  i++;
}

for (var i = 0; i <= 17; i++) {}

//function

function isMoonUp(time) {
  if (time >= 19 && time <= 5) {
    return true;
  }
  return false;
}

var moonStatus = isMoonUp(21);

//let const

//value of variable will could change

let price = 27;
price = 29;
price = 31;

//value of variable will not change

const myName = "lal meri ohh lal meri";
console.log(myName);

console.log(myName);
