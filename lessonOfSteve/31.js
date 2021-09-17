//Array every()
//checks EVERY element to see if it returns true

let numbers = [100,11,12,13,56,745];

let greaterThan30 = numbers.every(function(num){
    return num > 30;
});
console.log(greaterThan30);

let greaterThan10 = numbers.every(function(num){
    return num > 10;
});
console.log(greaterThan10);