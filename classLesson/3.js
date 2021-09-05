//Accessing a let or const variable before it is declared results in a reference error
/*
console.log(borogove);
let borogove = "mimsy"; //ReferenceError: Cannot access 'borogove' before initialization
*/

/*
console.log(borogove);
const borogove = "mimsy"; //ReferenceError: Cannot access 'borogove' before initialization
*/

/*
console.log(borogove); //undefined
var borogove = "mimsy"; 
*/

//console.log(borogove);//ReferenceError: borogove is not defined

// var variable declarations are hoisted to the top, let declarations are not
/*
let borogove;
console.log(borogove);//undefined
borogove = "mimsy";
console.log(borogove);//mimsy 
*/

/*
const borogove;//SyntaxError: Missing initializer in const declaration
console.log(borogove);
borogove = "mimsy";
console.log(borogove); 
*/

/*
var borogove;
console.log(borogove);//undefined
borogove = "mimsy";
console.log(borogove);//mimsy 
*/

// A let variable that has been declared but not yet initialized has the default value of undefined
//let a;
//console.log(a);//undefined

// Declaring a const variable without initializing it is a syntax error
//const a;//SyntaxError: Missing initializer in const declaration
//console.log(a);

//var a;
//console.log(a);//undefined

// Redeclaring a let or const variable is a syntax error
//let a = 10;
//let a = 10;//SyntaxError: Identifier 'a' has already been declared
//console.log(a);

//const a = 10;
//const a = 10;//SyntaxError: Identifier 'a' has already been declared
//console.log(a);

//var a = 10;
//var a = 10;
//console.log(a);//10