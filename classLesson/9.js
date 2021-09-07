//Pitfalls
//1. NaN
//Question: Comment your answer in your js file: What does NaN stand for?
//Not a number value

//Check if "hello" is NaN.
console.log("hello");
console.log(isNaN("hello"));//true

//Check if 3 is NaN.
console.log(isNaN(3));//false

//What is the type of NaN?
console.log(typeof NaN);//number

//2. Rounding
console.log(0.1 * 0.2);
console.log((0.1 * 0.2).toFixed(2));

//The above in JavaScript will print: 0.020000000000000004. Use a method to make sure that only 0.02 is printed.
console.log(Math.ceil(0.020000000000000004));// rounding up
console.log(Math.floor(0.020000000000000004));//rounding down

//3. Infinity
//Divide Infinity by 0.
console.log(Infinity/0);//infinity
//Divide Infinity by Infinity.
console.log(Infinity/Infinity);//NaN
//Divide 1 by 0.
console.log(1/0);//Infinity

//NaN
console.log(3 * 'John'); // NaN
console.log(typeof NaN); // number
console.log(NaN === NaN);// false 

// isNaN(x) determines if value is NaN; so does x !== x
let myProduct = 3 * 'John'; //NaN
console.log('myProduct is ' + myProduct);//myProduct is NaN
console.log(isNaN(myProduct));//true
console.log(myProduct !== myProduct); //true

let myFraction = 0/0;
console.log(myFraction);//NaN
console.log('myFraction is' + myFraction);//myFraction isNaN
console.log(isNaN(myFraction));//true
console.log(myFraction === myFraction);// false

let myOtherFraction = 1/0;
console.log(myOtherFraction);//Infinity
console.log('myOtherFraction is ' , myOtherFraction);//myOtherFraction is  Infinity
console.log(isNaN(myOtherFraction));//false
console.log(myOtherFraction === myOtherFraction); //true


//but beware of false positives
console.log(isNaN('Hello'));//true

//reliable tests
console.log(Number.isNaN('Hello'));//false
console.log('Hello' === 'Hello');//true