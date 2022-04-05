
let obj = {
    name : "Ekansh",
    age: 27
};

console.log(obj);

function Obj(name){
    this.name = name;
    console.log(`My name is ${this.name}`);
}

Obj.prototype.getName = function(){
    return this.name;
}

let name1 = new Obj("Ekansh");

console.log(name1);