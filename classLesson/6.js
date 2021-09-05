// string concatenation
// const str1 = "Hello";
// const str2 = "world";
// console.log(str1+str2);
// console.log(str1+ ", " +str2+"!");

// const str1 = "Tom";
// const str2 = "Tom";
// console.log(str1 === str2);

// const obj1 = {city: "Hamburg"};
// const obj2 = {city: "Hamburg"};
// console.log(obj1 === obj2);//false

// ternary operator
// let num1 = 2 < 3 ? "Tom" : "Jerry";
// let num2 = 2 > 3 ? "Tom" : "Jerry";
// console.log(num1);
// console.log(num2);

// lazy evaluation; logical short-circuiting
// console.log(jubjub);//ReferenceError: jubjub is not defined
// console.log(false && jubjub);//false
// console.log(true && jubjub);//ReferenceError: jubjub is not defined
// console.log(true || jubjub);//true
// console.log(jubjub || true);//ReferenceError: jubjub is not defined
// console.log(false || jubjub);//ReferenceError: jubjub is not defined

// const port = process.env.PORT || 3000;
 
/*
if(user){
    //do something
}
*/
/*
let myName = 10 < 11 ? "Carlos" : "Edo";
let city = 10 > 12 ? "Italien": "Spanien";
console.log(myName + " " + city);
*/

/*
let str1 = "Fatih";
let str2 = "Edo";
{
    let str1 = "Edo";
    let str2 = "Fatih";
    console.log(str1);//Edo
    console.log(str2);//Fatih
}
console.log(str1);//Fatih
console.log(str2);//Edo
*/

/*
const str1 = "Fatih";
const str2 = "Edo";
{
    const str1 = "Edo";
    const str2 = "Fatih";
    console.log(str1);//Edo
    console.log(str2);//Fatih
}
console.log(str1);//Fatih
console.log(str2);//Edo
*/

var str1 = "Fatih";
var str2 = "Edo";
{
    var str1 = "Edo";
    var str2 = "Fatih";
    console.log(str1);//Edo
    console.log(str2);//Fatih
}
console.log(str1);//Edo
console.log(str2);//Fatih


