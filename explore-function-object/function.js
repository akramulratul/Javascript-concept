//function diclaretion

function startFan() {
  console.log("object");
}

//call the function
startFan();

function bringSingara(taka) {
  console.log("singara er jonno dise", taka);
  console.log("mama singara den");
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 250;
var singara = bringSingara(money);
