//Number
var eggPrice = 39;
eggPrice = 39 * 2;
console.log(eggPrice);
console.log(typeof eggPrice);
//String
var singer = "Jen kian";

//boolean
var isNot = true;

//for variable declare
var tableLength = 12;

//array
var tourDestinations = ["coxs bazar", "vutan", "parice", "nepal", "thailand"];
//for know indexOf variable
tourDestinations.indexOf("parice");
//index number check
var fourthDestination = tourDestinations[3];
tourDestinations[1] = "vutan";

tourDestinations.push("London");
tourDestinations.pop("london");

//condition search
if (tourDestinations[3] == "nepal") {
  console.log("chaina tor kace jamu na");
} else if (tourDestinations[5] == "thailand") {
  console.log("vutan to kache jamu na");
} else if (tourDestinations.length == 6) {
  console.log("aro taka ase aro ghurmu");
}
//less then or equal condition check
var eggPrice = 32;
var myBudget = 32;
if (eggPrice < myBudget) {
  console.log("ami dim khamu");
}
if (eggPrice > myBudget) {
  console.log("lebu diye vatr khabo");
}
