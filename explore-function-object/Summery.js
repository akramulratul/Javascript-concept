var skyColor = "white";
var phones = ["iphone", "xiomi", "samsung", "motorolla"];

phones[2] = "walton";
console.log(phones);

//check oppo not exists in an array
if (phones.indexOf("oppo") == -1) {
  console.log("opps! amir khan oppo is missing");
}
//lg is availble in an array
if (phones.indexOf("lg") != -1) {
  console.log("Lg is available now");
}

//loop through
var number = 0;
while (num <= 10) {
  num++;
}

for (var i = 0; i < phones.length; i++) {}
//function
function addThreeNumbers(number1, number2, number3) {
  var total = number1 + number2 + number3;
  return total;
}
addThreeNumbers(87, 41, 56);

//object//
var microphone = { brand: "blue yeti", price: 120, color: "black" };
