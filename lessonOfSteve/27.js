// Array reduce method
// reduce all the values in an array into a single result
// Uses a callback function just like map, forEach, filter, etc
// array.reduce(callback, initialValue)
// also has a second parameter which is an initialValue

let numbers = [ 12, 34, 56, 78, 91];
//find the sum of all numbers

let sum = numbers.reduce(function(passedIn, item){
    //console.log(passedIn, item);
    return passedIn + item;
}, 0);
console.log('total is', sum, '\n');

let movies = ['Layer Cake', 'Star Wars', "Star Trek", "Jaws", "Jurassic Park", "Gross Pointe Blank", 
              "Eternal Sunshine of the Spotless Mind", "Memento", "Dog Soldiers", "The Host", "Gran Torino",
             "Close Encounters of the Third Kind", "Good Will Hunting", "Casino Royale", "Almost Famous"];
//Find the first movie alphabetically

let first = movies.reduce(function(current, item){
    console.log('comparing', current, 'to', item);
    return (current < item) ? current : item;
},"\u0434");
console.log('First movie is', first);
