
let a = document;

a= document.all


// console.log(a);

Array.from(a).forEach(element => {
   // console.log(element);
});


//element selectors

/**
 * 1. Single element selector
 * 2. Multi element selector
 */

 let element = document.getElementById("first");

 console.log(element);

 element.innerText = "Ekansh is a good boy.";
 element.innerHTML= "<h1>Ekansh is a good boy.</h1>";
 element.style.color = "red";

 console.log(element.innerText);

//  element.querySelector();