function leapyear(myYear) {
  var Leapyear = myYear % 4;
  if (Leapyear == 0) {
    return Leapyear;
  } else {
    return myYear;
  }
}

var myYear = leapyear(1301);
console.log(myYear);
