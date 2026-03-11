let age = 25
isStudent = true 

if (age < 18){
    console.log("Minor")
}
else if (age >= 18 &&age <=60 && isStudent){
        console.log("Adult student.")        
    
}
else{
    console.log("Senior")
}
// Question2: Check wheteher the given year is leap year or not.
let year = 2020;
// year = prompt("Enter a year:-");
if ((year % 4 ===0 && year % 100 != 0) || year % 400===0){
    console.log(year + " is leap year.");
}
else{
    console.log(year + " is not leap year.");
}