// let variables are mutable, const variables are not.
// DON'T confuse the mutability of values with the mutability of variables!!!!

// assigning a new value to a const variable is a type error.
// changing the value of a const variable is OK if that value is mutable
// changing the existing value of a const variable is not the same as replacing the value
// of a const variable with a new value
/* 
 const obj = {a : 1};
 obj = "Hello";//TypeError: Assignment to constant variable.
 obj.b =2;
 obj.b =3;
 console.log(obj);
 */

 /*
 let obj = {a : 1};
 obj = "Hello";
 obj.b =2;
 obj.b =3;
 console.log(obj);//Hello
*/

 var obj = {a : 1};
 obj = "Hello";
 obj.b =2;
 obj.b =3;
 console.log(obj);//Hello