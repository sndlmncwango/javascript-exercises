const convertToCelsius = function(temp) {
  sumC = (temp-32)*(5/9);
  return parseFloat(sumC.toFixed(1))
};

const convertToFahrenheit = function(temp) {
  divide = 9/5
  sumF = temp * divide;
  sumF += 32;
  return parseFloat(sumF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
