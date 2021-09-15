//Array forEach loop

let names = ["Ali", "Ahmet", "Mahmut", "Murat", "Fatma", "Dilek", "Zeynep"];

//convert all the names to lowercase except Murat
//and console.log() them
//anonymous function

/*
names.forEach(output);

function output(item, index, array){
    console.log(index, item);
}
*/
/* //Ustekiyle birebir ayni
names.forEach(function(item, index, array){
    console.log(index,item);
})
*/

names.forEach(function(item, index, array){
    if(item === "Murat"){
        item = item.toUpperCase();
    }else{
        item = item.toLowerCase();
    }
    console.log(index,item);
})

