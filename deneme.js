function toplama(num1,num2){
    return num1+num2;
}
function carpma(num1,num2){
    return num1*num2;
}

function matematik(a,b,callback){
    return (callback(a,b));
}

console.log(matematik(4,6,carpma));