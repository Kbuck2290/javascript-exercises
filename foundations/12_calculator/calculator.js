const add = function(num1, num2) { 
  return num1 + num2;
	
};

const subtract = function(num1,num2) { 
  return num1 - num2; 
	
};

const sum = function(numbers) { 
  let result = 0;
  
  for (let i = 0; i < numbers.length; i++){  
  result += numbers[i]
  }
 
  return result; 
	
};

const multiply = function(numbers) {
  let result = 1; 

  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i]
  } 

  return result; 

};

const power = function(x,y) {
  let result = 1;
  for (let i = 0; i < y; i++) {
    result *= x
  }
	
  return result;
};

const factorial = function(numbers) {
  let result = 1; 
  for (let i = numbers; i > 0; i--) {
    result *= i
  } 

  return result;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
