//String split and Array join methods
//Converting Strings to Arrays and Arrays to Strings
//String to Array str.split();
//Array to String str.join();

let sentence = "Hello my name is Murat Fatih";

let words = sentence.split(" ").sort();
console.log(words);

let chars = sentence.split("");
console.log(chars);

let hyphenated = words.join("-");
console.log(hyphenated);

let oneWord = words.join("");
console.log(oneWord);

let x = sentence.split(" ").sort().join(" ");
console.log(x);