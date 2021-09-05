// A variable that has been declared outside a block can be redeclared inside the block
/*
let wocky = 11;
{
    let wocky = 13;
    console.log(wocky);//13
}
console.log(wocky);//11
*/

/*
const wocky = 11;
{
    const wocky = 13;
    console.log(wocky);//13
}
console.log(wocky);//11
*/

/*
var wocky = 11;
{
    var wocky = 13;
    console.log(wocky);//13
}
console.log(wocky);//13
*/

// The value of a const variable cannot be changed through reassignment
// const balance = 100;
// balance += 10; // Type error : no reassignment of values to const variables
// console.log(balance); // does not get executed

// let variables are mutable, const variables are not.
// DON'T confuse the mutability of values with the mutability of variables!!!!