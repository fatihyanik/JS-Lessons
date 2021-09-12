//variable scope
"use strict";
//create some Global variables
var ranger = 'Aragorn';
let elf = 'Legolas';
const DWARF ='Gimli'; //cannot be reassigned
let hobbit = 'Sam';

function goToMountDoom(){
    for(var i=0; i<100; i++){
        //i is a local scope variable
    }
    for(let c=0; c<100; c++){
        //i is a block scope variable
    }
    console.log('i', i);
    console.log('c', c);
    let hobbit ='Frodo';
}

function visitLothLorien(){
    elf = 'Galadriel';
    ranger = 'Strider';
    DWARF = 'Gloin';
    let hobbit = 'Bilbo';
}

goToMountDoom();
visitLothLorien();