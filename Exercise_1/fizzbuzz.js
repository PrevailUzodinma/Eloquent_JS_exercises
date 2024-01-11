//print all numbers from 1 to 100
for (counter = 1; counter <= 100; counter++) {
  //for numbers divisible by both  and 5, print "FizzBuzz" instead of the number;
  if (counter % 3 == 0 && counter % 5 == 0) {
    console.log("FizzBuzz");
  }
  //for numbers divisible by 3, print "Fizz" instead of the number;
  else if (counter % 3 == 0) {
    console.log("Fizz");
  }}