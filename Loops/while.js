//While loop: It is a controlled structure that repeatedly executes a block of code as log as a specified condition remains true.It terminates as the condition becomes false.


//Program to reverse a number 
let num = 12345;
let last_dg;
let rev = 0;
while(num>0){
    last_dg = num % 10;
    rev = rev * 10 + last_dg;
    // num = num / 10;      Output = Infinity
    num = Math.floor(num/10);
}
console.log("Reversed number is= " + rev);



