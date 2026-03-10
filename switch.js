// let day = 9
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//       case 2:
//         console.log("Tuseday");
//         break;  
//       case 3:
//         console.log("Wednesday");
//         break;  
//       case 4:
//         console.log("Thursday");
//         break;  
//       case 5:
//         console.log("Friday");
//         break;  
//       case 6:
//         console.log("Khushi s jeene wla pehla din.");
//         break;  
//       case 7:
//         console.log("Khushi s jeene wla akhiri din.");
//         break;  
//         default:
//             console.log("Enter a valid day number.")
            
// }


//Question1:
let shape = "rectangle";
let a = 5;
let radius = 2;
let b = 10;
let result;
switch(shape){
  case "circle":
    result = 3.14 * radius * radius;
    console.log("Area of circle is = " + result);
    break;
  case "square":
      result = a*a
      console.log("Area of square is = " +result);
      break;

  case "rectangle":
    result = a*b;
    console.log("Area of rectangle is= " + result);
    break;
    default:
      console.log("Choose bteween these three shapes(circle,square,rectangle).");
}

