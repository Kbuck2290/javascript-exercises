const palindromes = function (string) {
    let reversedString = "";  
    let cleanedString = string.toLowerCase();
    cleanedString = cleanedString.replace(/[^a-z0-9]/g, ""); 
    for (let i = cleanedString.length - 1; i >= 0; i--) {
        reversedString += cleanedString[i]; 
    }  
    return cleanedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
