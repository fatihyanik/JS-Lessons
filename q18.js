function isTriangle(a,b,c){
 let max = Math.max(a, b, c);
  let sum = a + b + c;
  return sum - max > max;
}
console.log(isTriangle(7,2,2));
console.log(isTriangle(1,2,2));