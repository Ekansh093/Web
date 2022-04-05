console.log("ajax");

let fetchBtn = document.getElementById("fetchBtn");

fetchBtn.addEventListener("click", fetchDetails);

function fetchDetails(){

    const xhr = new XMLHttpRequest();

    //open object
    xhr.open("GET","ajax.txt",true);

    //do on progress
    xhr.onprogress = function(){
        console.log("fetch in progress");
    };

    //do on getting response
    xhr.onload = function(){
        console.log(this.responseText);
    };

    //send request
    xhr.send();
    console.log("we are done");
}


let popBtn = document.getElementById("popBtn");

popBtn.addEventListener("click", populateDetails);


function populateDetails(){

    const xhr = new XMLHttpRequest();

    xhr.open("POST","https://reqres.in/api/users",true);


    let params = `{
        "name": "Ekansh",
        "job": "leader"
    }`;

    xhr.onprogress = function(){
        console.log("in progress");
    }

    xhr.onload= function(){
        if(this.status === 201){
            console.log(this.responseText);
        }else{
            console.log("Error while fetching details");
        }
    }

    xhr.send(params);
}