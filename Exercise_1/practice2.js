let array = [1,3,4, 1, 4, 5, 6, 3, 2, 8, 2, 1];
function remove(array, index){
    //slice from beginning to index(to remove index)
    return array.slice(0, index)
    //concat another slice from index + 1 to end
    .concat(array.slice(index + 1));
}

console.log(remove(array, 6));