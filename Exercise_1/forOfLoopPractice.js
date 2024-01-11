function sum(...numbers) {
  let sum = 0;
  //learning to use for..of
  //for "define a variable" of "iterableName"
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

console.log(sum(9, 10, 7));
console.log(sum(9, 10, 7, 2, 3));
console.log(sum(9, 10));
console.log(Math.floor(Math.random()));
