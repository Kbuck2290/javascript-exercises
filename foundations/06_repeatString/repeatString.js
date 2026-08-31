const repeatString = function(hey, amount) {
    let result = ""; 
    for (let i = 0; i < amount; i++) 
    result += hey;
    return result;  

    repeatString("hello", 10); 

    repeatString("hi", 1); 

    repeatString("bye", 0);  

    repeatString("hey", 1000 ); 

    repeatString("don't use the built-in repeat method!", 1); 

    repeatString("goodbye", -1); 

    repeatString("", 10);


};

// Do not edit below this line
module.exports = repeatString;
