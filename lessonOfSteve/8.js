var characters = ['Luke', 'Leia', 'Han', 'Chewie'];
console.log(characters);//[ 'Luke', 'Leia', 'Han', 'Chewie' ]

characters.splice(0,1,'Rey');//ilk yer hangi index'ten itibaren degisiklik yapilacagini, 2. yer kac tane elementin silenecegini, 3. yer ise ne eklenecegini gosteriyor 
console.log(characters);//[ 'Rey', 'Leia', 'Han', 'Chewie' ]

characters.splice(1,2,'Kyle');
console.log(characters);//[ 'Rey', 'Kyle', 'Chewie' ]

characters.splice(1, 1, 'C3P0', 'R2D2');
console.log(characters);//[ 'Rey', 'C3P0', 'R2D2', 'Chewie' ]

characters.splice(1, 2);//Removing
console.log(characters);//[ 'Rey', 'C3P0']

characters.push('BB8');
characters.push('Obiwan');
console.log(characters);//[ 'Rey', 'Chewie', 'BB8', 'Obiwan' ]

characters.sort();//Alphabetical order
console.log(characters);//[ 'BB8', 'Chewie', 'Obiwan', 'Rey' ]

characters.reverse();
console.log(characters);//[ 'Rey', 'Obiwan', 'Chewie', 'BB8' ]

var position = characters.indexOf('leia');
console.log(position);//There is no leia element in our element. Therefore, our answer is -1
position = characters.indexOf('Obiwan');
console.log(position);//1
position = characters.lastIndexOf('BB8');
console.log(position);//3