const fibonacci = function(num) { 
    num = Number(num);
    if (num === 0) {
        return 0;
    }  
    if (num < 0) {
        return "OOPS";
    }
    let a = 1; 
    let b = 1;  
    for ( let i = 0; i < num -2; i++) {
    let next = a + b; 
    a = b; 
    b = next;  
} return b;

};

// Do not edit below this line
module.exports = fibonacci;
