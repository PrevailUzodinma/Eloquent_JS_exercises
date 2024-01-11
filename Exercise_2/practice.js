/* const square = function (x) {
    return x*x;
}

console.log(square(12));// a little world of its own
console.log(square(12));// another little world of its own; not needing to understand what's going on in th
lobal environment */

/* let x = 10;
if (true){
    let y = 20;
    let z = 10;
    console.log(x+y+z);
}
let z = 15;
console.log(x) */

// Function Declaration works like this
/* function product(x,y){
    return x * y;
}
console.log(product(9,8))
// Arrow functions work this way
const product2 = (x,y) => {
    return x * y;
}
console.log(product2(8,9))

// remember that is you define a parameter for a function and
//don't give it a value during its call, JS will give it the value "undefined"
const minus = (a,b) =>{
    if(b === undefined){
        return -a
    } else{
    return a- b;
    }
}
console.log(minus(10))
console.log(minus(10,17)) */

const power = (base, exponent = 6) => {
  result = 1;
  for (counter = 0; counter < exponent; counter++) {
    result *= base;
  }
  return result;
};
console.log(power(3) + power(7,3));
yes = power(3)
yes2 = power(3)