function largestElement(numbers) {
  let largestages = numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largestages) {
      largestages = element;
    }
  }
  return largestages;
}

const ages = [14, 85, 41, 58, 74, 96, 74, 12];
const oldest = largestElement(ages);
console.log("oldest", oldest);
// let oldest = ages;
