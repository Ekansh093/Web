console.log("Regular Expressions");

let reg = /ekansh/;

// reg = /ekansh/g; // flag- g is for global
// reg = /ekansh/i; // flag- i is for case insensitive


// console.log(reg);
// console.log(reg.source);

let s= "This is ekansh and ekansh"

//Functions to match expressions

//1. exec - this will return array for matcha and null for not match.

let result = reg.exec(s);
// console.log(result);

// result = reg.exec(s);
// console.log(result); --we can use multiple reg.exec for global flag

//2. test - returns true or false

let result2 = reg.test(s);
// console.log(result2);

// 3. match - It will return an array of results or null

// let result3 = reg.match(s); // wrong syntax
let result3 = s.match(reg);
// console.log(result3);


//4. search - returns index of first match else -1

let result4 = s.search(reg);
// console.log(result4);

//5 replace - replace first occurrence of reg exp match. If global flag is given then will replace all matches

let result5 = s.replace(reg, "EKANSH");
console.log(result5);



/////////////////////////////////////////// Meta character symbols////////////////////////////////

let regex = /ekansh/;
let str = "ekansh is agood programmer"

// 1. ^ - caret symbol - means starts with

regex = /^eka/;

// console.log(regex.test(str));


// 2. $ - means ends with

regex = /mmer$/;
// console.log(regex.test(str));


// 3.  .(dot)- check that eactly one character is present at the place of dot.

regex = /ek.ns/;
// console.log(regex.test(str));

// 4. * - matches any zero or more characters


regex = /ek*ns/;
// console.log(regex.test(str));

//5. ? - optional

regex = /eka?nsh/;
// console.log(regex.test(str));

//////////////////////////////////// Characters sets //////////////////

// character sets []

regex = /eka[asdf]sh/; // can be a,s d or f
regex = /eka[a-z]sh/; //can be from a to z
regex = /eka[^asd]sh/; // cannot be a,s or d
regex = /eka[a-zA-Z]sh/; // can be a to z or A to Z

// Quantifiers {}
regex = /ekan{2}sh/; // n can occur exactly 2 times
regex = /ekan{0,2}sh/; // n can occur 0, 1 or 2 times

// Groupings ()
regex = /(ek){2}/; // ek can occur 2 times


//------------------------------------ Character classes -------------------------//

regex = /\wan/; //word character - unserscore, alphabet or number.
regex = /\w+sh/; // \w+ one or more word characters
regex = /\Wbhai/; // Non word character
regex = /\W+bhai/; // one or more Non word character

regex = /\dbhai/; // \d means digit
regex = /\d+bhai/; // more than one digit
regex = /\Dbhai/; // \D means non-digit
regex = /\D+bhai/; // more than one non-digit

regex = /\s#@/; // one whitespace charater
regex = /\s+#@/; // more than one whitespace charater
egex = /\S#@/; // one non-whitespace charater
regex = /\S+#@/; // more than one non-whitespace charater
regex = /sh\b/; // \b means word boundary - means there should be a word after sh

// Assertions

regex = /h(?=y)/; //means there should be a y after h
regex = /h(?!y)/; //means there could be any character after h but not y

const str1 = "ekansh #@#bhai";

console.log(regex.test(str1));