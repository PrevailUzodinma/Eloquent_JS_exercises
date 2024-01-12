/* reverseArray, takes an array as argument
and produces a new array that has the same elements in the inverse order */

function reverseArray(array){
    let newArray = [];
    let index = array.length - 1;
    while (index >= 0){
        newArray.push(array[index])
        index -= 1;
    }
    return newArray;
}

console.log(reverseArray([1,2,3,4,5]));