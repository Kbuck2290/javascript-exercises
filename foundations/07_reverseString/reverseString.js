const reverseString = function(string) {
    let result = "" 
    
    for (let i = string.length -1; i >= 0; i--) { 
     result += string[i]; 
    }
    return result; 

    reverseString("hello"); 

    reverseString("hello there"); 

    reverseString('123! abc! Hello, Odinite.'); 

    reverseString("");





};

// Do not edit below this line
module.exports = reverseString;
