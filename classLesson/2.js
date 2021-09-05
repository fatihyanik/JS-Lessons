/*
let name = "Fatih";
name = "Murat";
console.log(name);//Murat
*/

/*
const name = "Fatih";
name = "Murat";
console.log(name);//TypeError: Assignment to constant variable.
*/

/*
var name = "Fatih";
name = "Murat";
console.log(name);//Murat
*/

// the scope of a variable is the region of source code where it is defined
// determines the visibility of the variable.

// const, let : global scope or block scope.
// var: global scope or function scope

// Variables defined inside a block are not visible from outside the block

/*
{
    let a = 10;
}
console.log(a); // Reference Error: a is not defined
*/

/*
{
    const a = 10;
}
console.log(a); // Reference Error: a is not defined
*/

/*
{
    var a = 10;
}
console.log(a); // 10
*/


// Variables defined outside a block are visible from inside the block
/*
let a = 10;
{
    a = 20;
}
console.log(a); //20
*/

/*
const a = 10;
{
    a = 20;
}
console.log(a); //TypeError: Assignment to constant variable.
*/

/*
var a = 10;
{
    a = 20;
}
console.log(a); //20
*/

