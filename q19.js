function reverseWords(str) {
    return str
    .split('')
    .reverse()
    .join('')
    .split(' ')
    .reverse()
    .join(' ');
    }
console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));

function reverseWords1(str) {
    // Go for it
    let arr = str.split(" ");
    let reversedArr = arr.map(word => word.split("").reverse().join("")).join(" ");
    return reversedArr;
  }
  console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));