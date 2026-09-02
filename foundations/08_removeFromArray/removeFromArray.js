const removeFromArray = function(array, ...itemToRemove ) {
    return array.filter(item => !itemToRemove.includes(item))
};

console.log(removeFromArray([1, 2, 3, 4], 3));

// Do not edit below this line
module.exports = removeFromArray;
