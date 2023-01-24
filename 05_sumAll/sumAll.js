const sumAll = function (startNum, endNum) {
    let totalSum = 0;
    if (startNum > 0 && endNum > 0) {
        if (typeof (startNum) === "number" && typeof (endNum) === "number") {
            if (startNum < endNum) {
                for (let i = startNum; i <= endNum; i++) {
                    totalSum += i;
                }
            } else {
                for (let i = endNum; i <= startNum; i++) {
                    totalSum += i;
                }
            }
        } else { return "ERROR"; };
        return totalSum

    } else { return "ERROR"; };
}

// Do not edit below this line
module.exports = sumAll;
