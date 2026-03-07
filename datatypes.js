//Typeof: This operator shows the datatypes of variable.
// Datatypes define the type of value that a variable stores. 
console.log(typeof 20)

// Undefined: Represents the absence of value or an uninitialised variable.
let discount
console.log(typeof discount)

// Boolean: Represents a logical entity with two values true or false. 
let in_stock = true
console.log(typeof in_stock)

console.log(typeof 20.5)

// String:Used to store sequence of characters within the double qutes. 
let product_name = "Chocolate ice-cream"
console.log(typeof product_name)

//null: Repersents the absenece of value, often used to explicitly  indicate that a variable or object property has no assigned value.
let discount2 = null
console.log(typeof discount2)

//Number: It is used to store numeric value.
let price = 5000
console.log(typeof price)

// Convert string to number by adding '+' sign before the string.
//  var name = + "10"
var name = "Kritika"
console.log(typeof Number(name))   //used Number constructor.
console.log(typeof + name)

//Convert number to string by adding '+' sign and an empty string "" after te variable.
let str = 10;
console.log(typeof String(str))
console.log(typeof (str + ""))


// parseInt and parseFloat are both function used for converting string to numbers, but they 
let num = 45.5
console.log(num)
console.log(typeof(num))
let num2 = parseInt(num)
console.log(num2)
let num3 = parseFloat(num)
console.log(num3)
console.log(isFinite(num3))
console.log(isFinite(10/3))
// NaN= Not a number 
console.log(parseInt("&522"))
console.log(parseFloat("xyz"))
console.log(isNaN("xyz"))
console.log(isNaN("5"))