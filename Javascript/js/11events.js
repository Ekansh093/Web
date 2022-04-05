
console.log("Events");

document.querySelector("h1").addEventListener("click", function(e){
    console.log(e);
    if(e.target.innerHTML == "Test"){
        e.target.innerHTML = "Javascript";
    }else{
        e.target.innerHTML = "Test";
    }

});