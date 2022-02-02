/*Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.
Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.*/

function romanToNumberConverter(roman){
    
    let number = 0;
    let prevChar = "";
    for(let i=0; i<roman.length; i++){
        if(roman[i] === "I"){
            number +=1;
        }else if(roman[i] === "V"){
            number += 5;
        }else if(roman[i] === "X"){
            number += 10;
        }else if(roman[i] === "L"){
            number += 50;
        }else if(roman[i] === "C"){
            number += 100;
        }else if(roman[i] === "D"){
            number += 500;
        }else if(roman[i] === "M"){
            number += 1000;
        }
    }
    return number;
};

console.log(romanToNumberConverter("VI"));
