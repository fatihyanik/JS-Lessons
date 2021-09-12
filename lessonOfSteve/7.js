var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);//[ 'Luke', 'Leia', 'Han', 'Chewie' ]
console.log(characters.length);//4
console.log(characters[characters.length-1]);//Chewie

characters.push('Anakin');
characters.push('Obiwan');
console.log(characters);//[ 'Luke', 'Leia', 'Han', 'Chewie', 'Anakin', 'Obiwan' ]

characters.pop();
characters.pop();
console.log(characters);//[ 'Luke', 'Leia', 'Han', 'Chewie' ]

characters.unshift('C3P0');
characters.unshift('R2D2');
console.log(characters);//[ 'R2D2', 'C3P0', 'Luke', 'Leia', 'Han', 'Chewie' ]

characters.shift();
characters.shift();
console.log(characters);//[ 'Luke', 'Leia', 'Han', 'Chewie' ]

var rem = characters.shift()
console.log(rem);//Luke

