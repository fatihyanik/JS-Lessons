var first_name = "Ricky";
var last_name = "Bobby";
var age = 45;
var first = true;
var last = false;
var bob;

if(first == last){
    console.log("This can never happen");
}else{
    console.log("You're only last if you're not first.");
    if(age){
        console.log(age);
    }
}

//TERNARY STATEMENT
first==last ? console.log("nope") : (age) ? console.log("yep") : console.log("sdf");
