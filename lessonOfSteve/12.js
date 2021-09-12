//While loops
/*
while(condition){
    statements
}

do{
    statements
}while(condition)
*/

let total =30;
while(total<30){
    total += Math.floor(Math.random()*5)+1;
    console.log('while', total);
}

do{
    total += Math.floor(Math.random()*5)+1;
    console.log('do', total);
}while(total<30);
