/*
//Section 1 - Introduction to JavaScript
let js = "Amazing";
if (js === "Amazing") alert("JavaScript is FUN!");
console.log(40 + 8 + 23 - 10);

let firstName = "Alex";
console.log(firstName);
let JavaScriptIsFun = true;
console.log("The value of this variable is: " + JavaScriptIsFun);
console.log("The type is: " + typeof JavaScriptIsFun);

//typeof operator returns the type of the variable

console.log(typeof true);
console.log(typeof JavaScriptIsFun);
console.log(typeof 23);
console.log(typeof "Alex");

//dynamic typing
//is not needed to define variable type again
JavaScriptIsFun = "YES!";
console.log("The value of this variable is: " + JavaScriptIsFun);
console.log("The type is: " + typeof JavaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log("The value of this variable is: " + year);
console.log("The type is: " + typeof year);
//undefined type means variable is declared but not defined yet

console.log(typeof null);
//bug in JS, returns object instead of null
//reason is legacy code
//typeof operator is not perfect
//this bug will probably never be fixed due to backward compatibility
//Finish Section 1 Introduction to JavaScript
*/


//Section 2 - Variables and Constants
/*
let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990; this would cause an error
//const cannot be changed

//const job; //this would cause an error because const must be initialized

var job = "programmer";
job = "teacher";
//var is old way of declaring variables
//should be avoided due to issues with scope
lastName = "Vazquez";
console.log(lastName);
console.log(typeof lastName);
//is not recommended to declare variables without let, const or var, but it will still work
*/


/*
//Section 3 - Basic Operators
const now = 2037;
const ageJonas = now - 1991; // subtraction operator
//using variables with operators
const ageSarah = now - 2018; // subtraction operator
console.log(ageJonas, ageSarah);

console.log("Valor 1: " + ageJonas * 2, "Valor 2:" + ageJonas / 10, "Resultado de (2) elevado a la (3): " + 2 ** 3); // multiplication, division and exponentiation operators
//2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Alex";
const lastName = "Vazquez";
console.log(firstName + " " + lastName); // concatenation operator with a space in between

let x = 10 + 5; //We are using the addition operator to assign a value to x
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

console.log(ageJonas > ageSarah); // greater than operator
console.log(ageSarah >= 18); // greater than or equal to operator
console.log(ageJonas < ageSarah); // less than operator
console.log(ageSarah <= 18); // less than or equal to operator
console.log(ageJonas === ageSarah); // equality operator
console.log(ageJonas !== ageSarah); // not equal operator


console.log(now - 1991 > now - 2018); // combining operators

*/
//Finish Section 3 - Basic Operators
/*
//Section 4 -  Operator Precedence
const now = 2037;
const ageJonas = now - 1991; // subtraction operator
const ageSarah = now - 2018; // subtraction operator
console.log(now - 1991 > now - 2018); // combining operators

let x, y; //declaring multiple variables
x = y = 25 - 10 - 5;
console.log(x, y);
const avegeAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avegeAge);

//Finish Section 4 -  Operator Precedence
*/

//Excersces until Section 4


let myCountry = "MEX";
let otherCountry = "USA";

let myPopulation = 130;
let otherPopulation = 331;
revision(); //First call

function revision() {
    if (myPopulation > otherPopulation) {
        console.log(`${myCountry}'s population is above ${otherCountry}'s`);
    }
    if (myPopulation < otherPopulation) {
        console.log(`${myCountry}'s population is below ${otherCountry}'s`);
    }
};

myPopulation *= 3; //tripling my population
revision();  //Second call

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;
compareBMI();
function BMI(mass, height) {
    return mass / height ** 2;
}

function compareBMI() {
    const BMIMark = BMI(massMark, heightMark);
    const BMIJohn = BMI(massJohn, heightJohn);
    if (BMIMark > BMIJohn) {
        console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
        return;
        //Calling toFixed method to limit decimals to 2 places and using template literals
    }
    console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
    return;
}
