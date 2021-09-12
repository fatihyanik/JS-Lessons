//hoisting
//the process of taking two passes through the js file_exists
//first pass hoists all the declarations to the top of the file

var a;
var b = 4;
console.log(d); //undefined

function c(){
    //function declaration
}

var d = 5;
e(); //undefined

var e = function(){
    //function expression
}

e(); //this works