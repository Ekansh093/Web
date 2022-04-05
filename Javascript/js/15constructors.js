
function createCar(name, speed){
    this.name = name;
    this.speed = speed;
    this.run = function(){
        console.log(`${this.name} is running at ${this.speed} kmph.`);
    }
}

car1 = new createCar("Alto", 80);
console.log(car1);
car1.run();