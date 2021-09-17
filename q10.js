// 1. Volume of a box. Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box. (Volume is length * width * height.)
//     Examples:
//     volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//     volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//     volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30


function volumeOfBox(width, length, height){
    return width * length * height;
}
console.log(volumeOfBox(2, 5 , 1));

const volumeOfBox1 = (width, length, height) => width*length*height;
console.log(volumeOfBox1(4,2,2));