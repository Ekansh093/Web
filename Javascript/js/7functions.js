
function greet(name, greetMsg="Hello!!"){
    console.log(`${greetMsg} This is ${name}.`);
}

greet("Ekansh", "Hey!!");
greet("Ekansh");

let myGreet = function(name, greetMsg="Hello!!"){
    console.log(`${greetMsg} This is ${name}.`);
}

myGreet("Ekansh123");

const myObj = {
    name: "Ekansh",
    game: function(){
            return "Test";
        }
};

console.log(myObj.game());

let arr = ["eksd","skjdf","kjsl"];

arr.forEach(function(element, index, array){
    console.log(element, index, array);
});