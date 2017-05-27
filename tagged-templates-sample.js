var name = 'Brandon';
var age = 26;

function greet(arr, nameArg, ageArg) {
  console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);
}

greet`Woah, ${name} is ${age}?`;
// "Woah, Brandon is 26?"