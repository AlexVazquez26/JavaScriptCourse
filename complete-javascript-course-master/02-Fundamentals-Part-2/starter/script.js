"use strict";
/*
const IsPrivate = true;
//Example
console.log(sprivate);
//With use strict we can avoid using code that is declare yet
const interface = "Audio";
//Strict also avoids to use reserved words
console.log(interface);
*/

/*
function logger() {
    console.log("My Name is Alex");

}
//Creation of a function with entry variables

function summarizing(x, y) {
    const sum = x + y;

    return sum;

}


var valor = summarizing(5, 8);

console.log(valor);
*/
/*--------------------------------------------------
//Functions declariations vs expressions
//use of a Function Declaration
console.log(age(2000));
//this can work even if the method is defined after we call it
function age(birthday) {
    return 2025 - birthday;
}

//Function Expresions
const age2 = function age2(birthday) {
    return 2025 - birthday
}

//in this case it is necesari to put firts the expression
//(no matter that it is a function also)
console.log(age2(1967));
--------------------------------------------------
*/
//-----------------------------------------------
//ARROW FUNCTIONS
function age(birthday) {
    return 2025 - birthday;
}
//This is the same as the part above just simplified
const ageCalc3 = birthday => 2025 - birthday;
const age3 = ageCalc3(1991);
console.log(`Your age is :${age3}`);
//it is necessari to have {`} on the string method to
//concatenate also variables, to create this backticks it is
//with Alt+96 ASCII model

//-----------------------------------------------






