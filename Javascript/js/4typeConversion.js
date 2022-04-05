
// type conversion and type coercion

let myVar = String(10);

console.log(myVar, typeof myVar);

let myArr = String([1,2,3]);

console.log(myArr.length, typeof myArr);

let x = Number("123");
console.log(x, typeof x);

let y = Number("2342hg3");
console.log(y);

let z = Number(true);
console.log(z);


let number = parseInt("23.434");
console.log(number, typeof number);


let number1 = parseFloat("23.434");
console.log(number1, typeof number);

let number2 = parseFloat("23.434234");
console.log(number2.toFixed(2), typeof number);


// type coercion

let mystr = "789";
let num = 34;

console.log(mystr + num);