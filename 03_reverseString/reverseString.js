const reverseString = function(str) {
   let myStr = str.toString()
   let output = myStr.split("").reverse().join("")
   return output
};

// Do not edit below this line
module.exports = reverseString;
