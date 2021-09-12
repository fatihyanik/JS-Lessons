// Binary Logical Operators
// AND &&
// OR ||
// creating compound if statements

let ingredients = ['ham', 'onion', 'tomato'];

let sandwichHas = function(ingredient){
    for(let i of ingredients){
        if(i == ingredient){
            return true;
        }
    }
    return false;
    //if this line omitted it returns undefined
    //which is also a falsey value
}

if(sandwichHas('ham') || sandwichHas('chicken') || sandwichHas('beef')){
    console.log('Sandwich has meat');
}else{
    console.log('No meat');
}

if(sandwichHas('lettuce') && sandwichHas('onion')){
    console.log('It has both');
}else{
    console.log('it has NOT both but maybe one of them');
}

if(sandwichHas('cheddar') && sandwichHas('onion') || sandwichHas('onion') && sandwichHas('tomato')){
    console.log('cheese and lettuce ... OR onion');
}else{
    console.log('failed final test');
}