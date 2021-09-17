const subLength = (str, letter) => (str.
match(new RegExp(letter, "g")) || []).length;

console.log(subLength('Saturday', 'a'));
console.log(subLength('summer', 'u'));