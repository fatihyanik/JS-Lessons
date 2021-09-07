//statements vs expressions
//expressions have a value, statements end in a semicolon and do something
console.log('hi'); // statement
2 + 2 === 5; // expression with value false

//escape character(\), escape sequences(\')
console.log('I can\'t do this'); //single (double) quotes are string delimiters
console.log(`I can't do this`); 
console.log("I can't do this"); 
console.log('He said "Yes first, then "No"');

// use the escape sequence \n to start a new line
console.log('Line 1 \nLine 2');
console.log(`Line 1 Line 2`);
console.log(`Line 1 
Line 2`);

//// string interpolation, template strings: embedding expressions in strings
let firstName = 'Don';
console.log(`Hi, ${firstName}.`)