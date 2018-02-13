var name = 'Brandon';
var age = 26;

function greet(arr, nameArg, ageArg) {
  console.log(arr[0] + nameArg + arr[1] + ageArg + arr[2]);
}

greet`Woah, ${name} is ${age}?`;
// "Woah, Brandon is 26?"


/********************************************************/

const city = 'São Paulo'
const something = 'Mozão'
const otherThing = 'Liverpool'

function green (template, ...values) {
  return template.reduce((accumulator, part, i) => {
    return `
      ${accumulator}
      <span class="green">${values[i - 1].toUpperCase()}</span>
      ${part}    
    `
  });
}

const sumpaulo = green`I live in ${city} the city of ${something} and ${otherThing}`

console.log(sumpaulo)
