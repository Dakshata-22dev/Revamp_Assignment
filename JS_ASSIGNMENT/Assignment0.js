/* Why JS is used?
    To create responsive and reactive webpage
    Though everything is possible using HTML,CSS but add to cart feature is available in js only
*/
// Variables and Types:
console.log("Variables and types");
let userAge =23;
let userName="Ram";
console.log(userAge);
console.log(userName);

// 3.Comments in JavaScript:
// Single line comment
/*Multiline comment */

// 4.Operations
console.log("Operartions");
let num1=10;
let num2=6;
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

// Data Types:
console.log("Data Types");
let len=34;
let y="Apple";
let bool=true;
let x=null;
let car;
console.log(len);
console.log(y);
console.log(bool);
console.log(x);
console.log(car);


// Function
console.log("Functions");
function greet(uname)
{
    console.log(uname);
}
greet("Vidhya");
greet("Sathish");

// If else
console.log("If Else");
let temp=5;
if(temp>30)
{
    console.log("Hot");
}else{
    console.log("Cold");
}
// for
console.log("For loop");
for(let i=1;i<=5;i++)
{
    console.log(i);
}

// Loose vs Strict equality
console.log("Loose and Strict Equality");
let a1=10;
let a2='10';
console.log(a1==a2); // Does not check the datatype 
console.log(a1===a2); //checks the datatype


