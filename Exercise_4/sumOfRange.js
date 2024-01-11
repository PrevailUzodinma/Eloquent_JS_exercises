/* Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to (and including) end. */

function range(start, end) {
  // define an empty array
  numArray = [];
  // run a loop to iterativelly move from start by increasing start by 1, checking if it is greater than end
  while (start <= end) {
    // if it is lesser than end, push it into the array
    numArray.push(start);
    start += 1;
  }
  return numArray;
}

console.log(range(1, 3));

/* write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does
indeed return 55 */

function sum(array) {
  let sum = 0;
  for (let number of array) {
    sum += number;
  }
  return sum;
}

console.log(sum(range(1, 10)));

/* As a bonus assignment, modify your range function to take an optional third
argument that indicates the “step” value used when building the array. If no
step is given, the elements go up by increments of one, corresponding to the
old behavior. */

function range(start, end, step = 1) {
  // define an empty array
  numArray = [];
  // run a loop to iterativelly move from start by increasing start by 1, checking if it is greater than end

  // test if step is negative
  if (step < 0) {
    while (start >= end) {
      numArray.push(start);
      start += step;
    }
    return numArray;
  } else {
    while (start <= end) {
      // if it is lesser than end, push it into the array
      numArray.push(start);
      start += step;
    }
    return numArray;
  }
}

console.log(range(10, 1, -1));
console.log(range(5, 2, -1));
console.log(range(2, 6, 2));
console.log(range(3, 7));
