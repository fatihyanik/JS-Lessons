//JavaScript for loops
var names = ['Ali', 'Veli', 'Ayse', 'Fatma', 'Hayriye','Mahmut','Huseyin','Kemal'];
var numNames = names.length;

//initialize; test; increment
for(let i=0; i<numNames; i++){
    console.log(names[i]);
}
console.log("-------Reversing---------");
for(let i=numNames-1; i>=0; i--){
    console.log(names[i]);
}