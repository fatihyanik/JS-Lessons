//console.log(10 && "hello"); //hello
//Math
//console.log(Math.ceil(3.5));//4 rounding up 
//console.log(Math.floor(3.5));//3 rounding down
//console.log(Math.random());// creates a random number between 0 and 1
//console.log(Math.max(1,2,3));//3
//console.log(Math.min(1,2,3));//1

//These exercises are designed to make you more comfortable with the ternary operator.
//1) Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’

//let isDog = true;
//console.log(isDog === true ? "pat, pat" : "find me a dog to part");

//let isDog = true;
//let message = isDog === true ? "pat, pat" : "find me a dog to part";
//console.log(message);//pat, pat

//let isDog;
//isDog = (isDog === true) ? "pat, pat" : "find me a dog to pat";
//console.log(isDog);

//2) Declare a variable named message and a variable named speed.  If speed is above 50, assign “You are speeding” to message, otherwise “Your speed is fine”.
//let speed = Math.floor(Math.random()*100);
//console.log(speed);
//let message = speed > 50 ? "You are speeding" : "Your speed is fine";
//console.log(message);

//3) Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
//let age = 125;
//let result = age < 16 ? "serve butter beer" : "serve beer";
//console.log(result);

//4) Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
//let isStudent = false;
//let result = isStudent===true ? "Ticket costs €5,00" :  "Ticket costs €12,00";
//console.log(result);

//5) Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
//let okMarie = "cake";
//let result = okMarie === "cake" ? "Let them eat cake" : "Oh, bother";
//console.log(result);

//6) Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
// 30
// 939
// 40.9
//var isOdd=26;
//isOdd = isOdd % 2 == 0 ? "even" : "odd";
//console.log(isOdd);

//let isEven = 939 % 2 === 0 ? "is even" : "is odd"
//console.log(isEven);