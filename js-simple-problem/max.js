const business = 450;
const minister = 350;
const army = 3050;
if (business > minister) {
  console.log("business person");
} else {
  console.log("Minister person");
}

var max = Math.max(business, minister, army);
console.log("largest is", max);

//with function
function findLargest(first, second) {
  if (first > second) {
    return first;
  } else second > first;
  {
    return second;
  }
}

var 
