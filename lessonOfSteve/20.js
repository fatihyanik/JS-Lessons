//All about Strings

var str1 = new String("Toy Story");
var str2 = String("Wall-e");
var str3 = "Cars";

var result = str1.toUpperCase();
var result2 = "Monsters Inc".toLowerCase();

console.log(str1, result);
console.log(result2);

var r = str2.substring(4,5);
console.log(r);

console.log(str2.indexOf("-"));
console.log(str1.lastIndexOf("o"));
console.log(str1.concat(" " + str2));