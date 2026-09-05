const leapYears = function(timePeriod) { 
     if (timePeriod % 400 === 0) {
        return true;
    }
    
    if (timePeriod % 100 === 0) {
        return false;
    }
    
    if (timePeriod % 4 === 0) {
        return true;
    } else { 
        return false;  
    };    

}

// Do not edit below this line
module.exports = leapYears;
