//Array filter() method

let numbers = [23, 45, 14, 66, 94, 33, 4, 9];
let breakPoint = 30;

let smallNumbers = numbers.filter(function(num){
    return num < breakPoint;
});

let bigNumbers = numbers.filter(checkBig);
    
function checkBig(num){
    return num > breakPoint;
};

let oddNumbers = numbers.filter(function(num){
    return num % 2 !==0;
});

console.log('\nSmaller than 30:', smallNumbers);
console.log('\nLarger than 30:', bigNumbers);
console.log('\nOdd than 30:', oddNumbers);