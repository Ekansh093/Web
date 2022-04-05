console.log("Asynch and Await");

async function func(){
    console.log("Inside func");

    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    return data;
}

let a = func();
console.log(a);
a.then(data=> console.log(data))