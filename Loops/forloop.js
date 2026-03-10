//for loop:
// *
// **
// ***
for(let i = 1; i<5; i++){
    let row = "";
    for(let j=1; j<=i; j++){
        row += "*";
    }
    console.log(row);
}

//Question2: Find sum of numbers 
let num = 49875;
let sum = 0;
let last_dg;
for(;num>0;num= Math.floor(num/10)){
    last_dg= num %10;
    sum+=last_dg;
}
console.log("Sum of the digits is= " +sum);
