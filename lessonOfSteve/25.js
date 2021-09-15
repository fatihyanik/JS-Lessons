//Array map() method

let names = ["Ali", "Ahmet", "Mahmut", "Murat", "Fatma", "Dilek", "Zeynep"];

//Determine the length of each name and save it in Array

let nameLengths = names.map(function(item, index, array){
    return item.length;
});

console.log(nameLengths);