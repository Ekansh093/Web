
let str1 = "Ekansh";
let str2 = "Ekta";

//concat
console.log(str1+ ' ' + str2);

console.log(str1.concat(str2, " xyz" ," pqr"));

//index
console.log(str1[3]); // prints n

//----------------------------------------- string methods--------------------------------//

let str3 = "The quick brown fox jumps over The lazy little dog."

console.log(str3.indexOf("brown")); // returns -1 if not present

console.log(str3.indexOf("The"));

console.log(str3.lastIndexOf("The"));

console.log(str3.charAt(5));

console.log(str3.endsWith("dog.")); //returns boolean

console.log(str3.startsWith("The"));

console.log(str3.includes("fox"));

console.log(str3.substring(0,5));

console.log(str3.slice(0,6)); // returns first 5 characters in string

console.log(str3.slice(-4)); // returns last 4 character in string

console.log(str3.split(" "));

console.log(str3.replace("The" , "It")); // it replaces the first occurrence in string only.

console.log(str1.repeat(10));

//------------------------- Template literals ------------------//

let fruit1 ='Orange';
let fruit2 = 'Apple';
let html='';

html= ` <h1> This is a heading </h1>

<p> You like ${fruit1} and ${fruit2}.
`;
console.log(html);
document.body.innerHTML = html;