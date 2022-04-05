
let element = document.createElement("li");


let text = document.createTextNode("This is a text node");
element.appendChild(text);


element.className = "newLi";
element.id = "liId";
// element.innerHTML = "<b>Fourth</b>";

element.setAttribute("title", "myTitle");

document.querySelector("ul.childul").appendChild(element);

console.log(element);

let elem2 = document.createElement("h1");

elem2.innerText = "This is a heading";

let ul = document.querySelector("ul.childul").firstElementChild;

ul.replaceWith(elem2);

console.log(ul);