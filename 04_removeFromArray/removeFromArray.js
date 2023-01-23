const removeFromArray = function(arr,removeEntry) {
    //remove the .push and set array directly as arr
    const myArr = arr;
    let entryIndex = myArr.indexOf(removeEntry);
    myArr.splice(entryIndex,1);
    return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
