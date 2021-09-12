//JavaScript for..in loops
var capitals = {'Turkey':'Ankara', 'Germany':'Berlin', 'England':'London'};
console.log(capitals);//{ Turkey: 'Ankara', Germany: 'Berlin', England: 'London' }

//var in object
for(let prop in capitals){
   // console.log(prop);// Turkey, Germany, England
   // console.log(capitals[prop]);//Ankara, Berlin, London
    console.log("The capital city of", prop, "is", capitals[prop]+".");//The capital city of Turkey is Ankara. The capital city of Germany is Berlin. The capital city of England is London.
}

//prop is index 
//capitals[prop] is a value