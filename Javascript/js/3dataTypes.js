/**
 * 
 * Data types in JS:
 * 
 * 1. Primitive data types -> Stored in stack memory 
 *    
 *      String
 *      Numbers
 *      Boolean
 *      Null
 *      Undefined
 *      Symbol
 * 
 * 
 * 2. Referenced data types -> Stored in heap memory
 * 
 *      Arrays
 *      Object literals
 *      Functions
 *      Dates
 */


 //string

 let name = "Ekansh";
 console.log(name);
 console.log(typeof name);

 // Number
 let marks = 30;
 console.log(marks);
 console.log(typeof marks);


 //boolean
 let isDriver = true;
 console.log(typeof isDriver);


 //Null
 let nulVar = null;
 console.log(typeof nulVar); //returns object

 //Undefined
 let var1 = undefined;
 console.log(var1);

 //array
let myarr = [1,2,3,4, true, "sdf"];
 console.log(myarr);
 console.log(typeof myarr);  //object

// object literals
let stMarks = {
    Ekansh: 40,
    Ekta: 90,
    'XYZ ABC': 23
};

console.log(stMarks);
console.log(typeof stMarks);

// function

function myName() {
   
}

console.log(typeof myName);


// dates

let date = new Date();
console.log(typeof date);