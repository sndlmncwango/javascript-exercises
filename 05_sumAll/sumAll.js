const sumAll = function(startNum,endNum) {
let totalSum = 0;
if(startNum<endNum){
for(let i=startNum;i<=endNum;i++){
    totalSum += i;
    }
}else{
    for(let i=endNum;i<=startNum;i++){
        totalSum += i;
        }
}
return totalSum
};

// Do not edit below this line
module.exports = sumAll;
