const removeFromArray = function(arr, ...removeEntry) {
    myArr = arr    
    for(let i=0;i<removeEntry.length;i++){
            rmIndex = arr.indexOf(removeEntry[i]);
            arr.splice(rmIndex,1)
           
            
        }
    return myArr
};

// Do not edit below this line
module.exports = removeFromArray;
