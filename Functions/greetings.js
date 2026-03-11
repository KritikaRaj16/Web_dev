//Function: It is a block of reusable code that performs a specific task or set of tasks when it is called.

function greetings(name){
    console.log("Good morning " + name);
}
let name = "Kritika"
greetings(name);

function sum(value1 , value2){
    return value1 + value2 ;
}
function product(value1, value2){
    return value1 * value2;
}
let a = 5;
let b = 9;
console.log("The sum is " + sum(a,b) )
console.log("The product is " + product(a,b) )