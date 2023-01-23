const reverseString = function(str) {
    let myStr = [];
    for(let i=0;i<str.length;i++){
        myStr.unshift(str[i]);
    }
    let output = myStr.toString()
    return output.split(",").join("")
};

// Do not edit below this line
module.exports = reverseString;
