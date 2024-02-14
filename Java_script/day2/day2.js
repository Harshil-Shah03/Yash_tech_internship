// Hoisting & Variable declaration
// Comparison operators
// Conditional statements
// Regex
// Assignment



// Exercise 1 – Write a function which returns a string as below:
// Input – 
// var personInput = {"name": "Clark", "surname": "Kent", "age": "36“,”country”:”India”};
// Output – {{Clark}} Kent is {{36}} years old and belong to India
// Note : Change country Name to USA in personInput and in this case the output should be
// Output – {{Clark}} Kent is {{36}} years old and does not belong to India

var personInput = {"name": "Clark", "surname": "Kent", "age": "36","country":"USA"};

if(personInput["country"]=="India"){
    console.log("{{"+personInput["name"]+"}}Kent is{{"+36+"}}years old and belongs to India");}
else
{
    console.log("{{"+personInput["name"]+"}}Kent is{{"+36+"}}years old and does not belong to India");
}



// FIX ERRORS IN BELOW Problem
// EX 1
function print ()
{
var a;
a =10;
console. log (a); // DONT REMOVE THIS LINE
// var a = 10;
var c = 5;
console. log (c); // DONT REMOVE THIS LINE
// var c = 5;
}
print();
// / /
// 10
// 5
// // expected output
// // EX 2
function a(){
    console.log("Hello");
}
// var a = 10;
a();
var a = 10;


// write kegex to extract inputs from given strings
// 1. "my name is Salman".
// Output - Salman
// 2. "my age is 20 what is yours?",
// Output - 20
// 3. "my employee id is EN123 I work at Yash",
// Output - employeId i.e. EN123
// 4. Replace all the "i" with "e" in below strings
// "Hiy you aft not Robot"

const regex1 = /my name is (\w+)/;
const text = "my name is salman"
match = text.match(regex1);
console.log(match[1]);


const regex2 = /\d+/g;
const txt2 = "my age is 20 what is yours?";
match = txt2.match(regex2)
console.log(match)


const regex3 = /[A-Z]{2}\d+/g;
const txt3 = "my employee id is EN123 I work at Yash";
match = txt3.match(regex3);
console.log("Employee id is "+match)


const regex4 = /i/g;
var txt4 = "Hiy you ari not Robot"
txt4 = txt4.replace(regex4,"e")
console.log(txt4)