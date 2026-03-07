// Truthy values are treated as true when used in conditions. Examples include:
// True, non-empty string ("Hello"), non-zero number(42), Arrays and object

// Falsy values: 
// false, 0(zero), empty string (""),null, undefined, NaN(Not a Number)
// let name = -9; 
// if (name){
//     console.log("This is truthy value");
// }
// else{
//     console.log("Its a falsy value.");
// }

// name >0?console.log("Psitive number"):console.log("Number is either zero or negative.")
// let score = 99
// // score>=60?result = "pass":result = "fail";
// let result = score >=60? "Pass":"Fail";
// console.log(result)


let age = 18
let citizen = false
let registered = false

if (age >= 18 && citizen && registered){
    console.log("Eligible to vote.");
}
else if (age < 18 && (citizen == false || registered == false)){
    console.log("Not eligible to vote.");

}
else if (age >= 18 && !(citizen)){
    
        console.log("Not eligible due to citizenship");
   
}
else if (age >= 18 && citizen && !(registered)){

        console.log("Not eligible due to registration status.");
}