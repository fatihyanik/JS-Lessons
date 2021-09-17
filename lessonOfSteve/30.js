// Array some()
// Wider availability than includes
// functional approach like map, filter, and forEach
// returns Boolean when first positive match is found


let movies = ['Star Wars', "Star Trek", "Jaws", "Jurassic Park", "Gross Pointe Blank", 
"Eternal Sunshine of the Spotless Mind", "Memento", "Dog Soldiers", "The Host", "Gran Torino",
"Close Encounters of the Third Kind",'Layer Cake', "Good Will Hunting", "Casino Royale", "Almost Famous"];

let keyword1 = "Star"; // appears more than once
let keyword2 = "Cake"; // appears once
let keyword3 = "Max"; //not in list

let test1 = movies.some(function(title, index){
    console.log(index, title);
    return title.indexOf(keyword1) > -1;
})

let test2 = movies.some(function(title, index){
    console.log(index, title);
    return title.indexOf(keyword2) > -1;
})

let test3 = movies.some(function(title, index){
    console.log(index, title);
    return title.indexOf(keyword3) > -1;
})