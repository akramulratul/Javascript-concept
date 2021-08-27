var computer = {
  id: 145,
  price: 29000,
  storage: "156gb",
  processor: "intel i5",
};
var mobile = {};

console.log(computer);
console.log(computer.price);

var computerPrice = computer.price;

//set a object property value

computerPrice = 220;
console.log(computerPrice);

//different ways to set a value of an object property
var priceProperty = "Storage";
computer.price = 22000;
computer["price"] = 23000;
computer[priceProperty] = 19000;
console.log(computer);
console.log(computer.price);

//last changeable number will be the right number
