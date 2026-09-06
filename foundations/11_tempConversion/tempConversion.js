const convertToCelsius = function(num1) {
    return Math.round((num1 - 32) * 5/9 * 10) / 10;
};

const convertToFahrenheit = function(num2) { 
  return Math.round(((num2 * 9/5) + 32 )* 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
